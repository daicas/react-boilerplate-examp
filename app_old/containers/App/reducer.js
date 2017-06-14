/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';

import {
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS,
  LOAD_REPOS_ERROR,
  LOAD_ARTICLES_SUCCESS,
  LOAD_ARTICLES,
  LOAD_ARTICLES_ERROR,
  LOAD_ARTICLES_DETAIL,
  LOAD_ARTICLES_DETAIL_SUCCESS,
  LOAD_ARTICLES_DETAIL_ERROR,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  currentUser: false,
  userData: {
    repositories: false,
  },
  articlesId: 0
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_REPOS:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['userData', 'repositories'], false);
    case LOAD_REPOS_SUCCESS:
      return state
        .setIn(['userData', 'repositories'], action.repos)
        .set('loading', false)
        .set('currentUser', action.username);
    case LOAD_REPOS_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);

    case LOAD_ARTICLES:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['userData', 'repositories'], false);
    case LOAD_ARTICLES_SUCCESS:
      return state
        .setIn(['userData', 'repositories'], action.articles)
        .set('loading', false)
        .set('articlesId', action.articleId);
    case LOAD_ARTICLES_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);

    case LOAD_ARTICLES_DETAIL:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['userData', 'repositories'], false);
    case LOAD_ARTICLES_DETAIL_SUCCESS:
      return state
        .setIn(['userData', 'repositories'], action.articlesDetail)
        .set('loading', false)
        .set('articleId', action.articleId);
    case LOAD_ARTICLES_DETAIL_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);

    default:
      return state;
  }
}

export default appReducer;

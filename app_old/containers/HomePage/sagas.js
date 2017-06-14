/**
 * Gets the repositories of the user from Github
 */

import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { LOAD_ARTICLES } from 'containers/App/constants';
import { articlesLoaded, articlesLoadingError } from 'containers/App/actions';

import request from 'utils/request';
import { makeSelectUsername } from 'containers/HomePage/selectors';

/**
 * Github repos request/response handler
 */
export function* getArticles() {
  // Select username from store
  //const username = yield select(makeSelectUsername());
  const requestURL = require(`!file-loader?name=[hash].[ext]!static/data/articles.json`);
  //const requestURL = `https://api.github.com/users/mxstbr/repos?type=all&sort=updated`;
  try {
    // Call our request helper (see 'utils/request')
    const articles = yield call(request, requestURL);

    yield put(articlesLoaded(articles));
  } catch (err) {
    yield put(articlesLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* githubData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  const watcher = yield takeLatest(LOAD_ARTICLES, getArticles);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// Bootstrap sagas
export default [
  githubData,
];

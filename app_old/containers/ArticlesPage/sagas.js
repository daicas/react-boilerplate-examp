/**
 * Gets the repositories of the user from Github
 */

import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { LOAD_ARTICLES_DETAIL } from 'containers/App/constants';
import { articlesDetailLoaded, articlesDetailLoadingError } from 'containers/App/actions';

import request from 'utils/request';
import { makeSelectArticlesId } from './selectors';

/**
 * Github repos request/response handler
 */
export function* getArticles() {
  // Select articles from store
  const articlesId = yield select(makeSelectArticlesId());
  const requestURL = require(`!file-loader?name=[hash].[ext]!static/data/articles.json`);

  try {
    // Call our request helper (see 'utils/request')
    const articlesList = yield call(request, requestURL );

    let articlesDetail = {};
    const length = articlesList.length;
    articlesList.map( (item) => {
      if(item.id.toString() === articlesId)
      {
        articlesDetail = item;
      }
    })

    yield put(articlesDetailLoaded(articlesDetail , articlesId));
  } catch (err) {
    yield put(articlesDetailLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* githubDataArticles() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  const watcher = yield takeLatest(LOAD_ARTICLES_DETAIL, getArticles);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// Bootstrap sagas
export default [
  githubDataArticles,
];

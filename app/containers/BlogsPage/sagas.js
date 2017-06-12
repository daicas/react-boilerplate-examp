/**
 * Gets the repositories of the user from Github
 */

import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';

import { todosLoaded, todosLoadingError } from 'containers/App/actions';

import request from 'utils/request';


/**
 * Github repos request/response handler
 */
export function* getTodos() {
  // Select username from store
  const requestURL = 'https://api.github.com/users/mxstbr/repos?type=all&sort=updated';// 'https://hosting125.herokuapp.com/data/todos.json';// require(`!file-loader?name=[hash].[ext]!static/data/todos.json`); //
  
  try {
    // Call our request helper (see 'utils/request')
    const todos = yield call(request, requestURL);
    console.log(todos);
    yield put(todosLoaded(todos));
  } catch (err) {
    yield put(todosLoadingError(err));
  }
}


/**
 * Root saga manages watcher lifecycle
 */
export function* getData() {
  // Watches for LOAD_TODOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  const watcher = yield takeLatest('LOAD_TODOS', getTodos);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// Bootstrap sagas
export default [
  getData,
];
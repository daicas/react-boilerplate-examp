/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectTodos = (state) => state.get('blogs');

const makeSelectTodos = () => createSelector(
  selectTodos,
  (blogsState) => blogsState.get('todos')
);

export {
  selectTodos,
  makeSelectTodos,
};

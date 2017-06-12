/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectBlogs = (state) => state.get('blogs');

const makeSelectTodos = () => createSelector(
  selectBlogs,
  (blogsState) => blogsState.get('todos')
);

export {
  selectBlogs,
  makeSelectTodos,
};

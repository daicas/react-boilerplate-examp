/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectArticles = (state) => state.get('articles');

const makeSelectArticlesId = () => createSelector(
  selectArticles,
  (ArticlesState) => ArticlesState.get('articlesId')
);

export {
  selectArticles,
  makeSelectArticlesId,
};

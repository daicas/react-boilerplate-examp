import React, { PropTypes } from 'react';

import List from 'components/List';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';
import ArticleListItem from 'containers/ArticleListItem';

function ArticlesList({ loading, error, articles }) {
  if (loading) {
    return <List component={LoadingIndicator} />;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <ListItem item={'Something went wrong, please try again!'} />
    );
    return <List component={ErrorComponent} />;
  }

  if (articles !== false) {
    console.log('articlesList- article :', articles);
    return <List items={articles} component={ArticleListItem} />;
  }

  return null;
}

ArticlesList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  articles: PropTypes.any,
};

export default ArticlesList;

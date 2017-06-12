import React, { PropTypes } from 'react';

import List from '../../components/List';
import ListItem from '../../components/ListItem';

import LoadingIndicator from '../../components/LoadingIndicator';
import TodoList from './TodoList';

function TodoListApp({ loading, error, data }) {
  if (loading) {
    return <List component={LoadingIndicator} />;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <ListItem item={'Something went wrong, please try again!'} />
    );
    return <List component={ErrorComponent} />;
  }

  if (data !== false) {
    return <TodoList items={data} component={RepoListItem} />;
  }

  return null;
}

TodosList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  data: PropTypes.any,
};

export default TodosList;

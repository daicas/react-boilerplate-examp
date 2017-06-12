/*
 * BlogsPage
 *
 * List all the Blogs
 */
import React from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import H1 from 'components/H1';
import messages from './messages';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectTodos, makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import H2 from 'components/H2';
import TodoList from 'components/TodoList';

import { loadTodos } from '../App/actions';

export class BlogsPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  

  render() {
    
    const { loading, error, todos } = this.props;
    const TodoListProps = {
       loading, error, todos
    };
    return (
      <div>
        <Helmet
          title="Blogs Page"
          meta={[
            { name: 'description', content: '11111' },
          ]}
        />
        <H1>
          <FormattedMessage {...messages.header} />
        </H1>
         <TodoList {...TodoListProps} />
      </div>
    );
  }
}

BlogsPage.propTypes = {
  loading: React.PropTypes.bool,
  error: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
  todos: React.PropTypes.any
};

export function mapDispatchToProps(dispatch) {
  return {
    todos: () => {
      dispatch(loadTodos());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  todos: makeSelectTodos(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(BlogsPage);
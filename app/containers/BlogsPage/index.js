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
import List from './List';
import ListItem from './ListItem';
import ListItemTitle from './ListItemTitle';
import BlogsList from './BlogsList';
import TodoList from './TodoList';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reducer from './TodoList/reducers';
import { getAllTodos } from './TodoList/actions';
import createSagaMiddleware from 'redux-saga';


export default class BlogsPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props){
    super(props);
    this.state={
      blogsData:[]
    }
    this.loadData = this.loadData.bind(this);
  }
  // loadData(){
  //   const url = require(`!file-loader?name=[hash].[ext]!static/data/blogs.json`);
  //   const data = fetch(url)
  //           .then( (response) => {
  //               return response.json();
  //           })
  //           .then( (json) => {
  //             this.setState({blogsData: json.data});
  //       });
  // }

  shouldComponentUpdate() {
    return false;
  }

  render() {

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
         <BlogsList data={this.state.blogsData} />

         <TodoListApp {...todosListProps} />
      </div>
    );
  }
}

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

export default class BlogsPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(){
    super();
    this.state={
      item:'item nè',
      blogs:[{
        id:1,
        title:'Title 1',
        description:'description description description description description description description description ',
        image:'',
        date:'6/7/2017'
      },{
        id:2,
        title:'Title 2',
        description:'description description description description description description description description ',
        image:'',
        date:'6/7/2017'
      }]
    }
  }
  // Since state and props are static,
  // there's no need to re-render this component
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
         <BlogsList data={this.state.blogs} />

      </div>
    );
  }
}

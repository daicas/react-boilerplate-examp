/**
 * RepoListItem
 *
 * Lists the name and the issue count of a repository
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FormattedNumber } from 'react-intl';
import { Link } from 'react-router';
import { makeSelectCurrentUser } from 'containers/App/selectors';
import ListItem from 'components/ListItem';
import IssueIcon from '../RepoListItem/IssueIcon';
import IssueLink from '../RepoListItem/IssueLink';
import RepoLink from './Link';
import Wrapper from '../RepoListItem/Wrapper';

export class ArticleListItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const item = this.props.item;
    const image = require(`!file-loader?name=[hash].[ext]!static/image/${item.image}`);

    const content = (
      <Wrapper>
        <div>
           <Link href={`/articles/${item.id}`} > {item.title}</Link>
        </div>
        <br />
        <div>
        <Link to={`/articles/${item.id}`} ><img src={image} alt="" width="100" /></Link>
        </div>
         <br />
        <p>
          {item.description}
        </p>
         <br />
      </Wrapper>
    );

    // Render the content into a list item
    return (
      <ListItem key={`repo-list-item-${item.id}`} item={content} />
    );
  }
}

ArticleListItem.propTypes = {
  item: React.PropTypes.oneOfType({
    id: React.PropTypes.number,
    title: React.PropTypes.string,
    image:React.PropTypes.string,
    description: React.PropTypes.string,
    date: React.PropTypes.string,
    author: React.PropTypes.string,
  })
};

export default connect(createStructuredSelector({
}))(ArticleListItem);

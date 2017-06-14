/**
 * RepoListItem
 *
 * Lists the name and the issue count of a repository
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FormattedNumber } from 'react-intl';
import { makeSelectArticlesId } from 'containers/App/selectors';
import { Link } from 'react-router';
import ListItem from 'components/ListItem';


export class ArticlesItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const item = this.props.item;

    // Render the content into a list item
    return (
      <Wrapper>
        <div>
            {item.name}
        </div>
        <br />
        <div>
       <img src={item.owner.avatar_url} alt="" width="50" />
        </div>
         <br />
        <p>
          {item.description}
        </p>
         <br />
      </Wrapper>
    );
  }
}

ArticlesItem.defaultProps = {
  item: {
    name: null,
    owner: null,
    description: null,
  },
  articlesId: React.PropTypes.any,
};

ArticlesItem.propTypes = {
  item: React.PropTypes.object,
  articlesId: React.PropTypes.any,
};

export default connect(createStructuredSelector({
  articlesId: makeSelectArticlesId(),

}))(ArticlesItem);

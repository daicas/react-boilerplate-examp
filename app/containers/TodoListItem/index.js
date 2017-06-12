/**
 * RepoListItem
 *
 * Lists the name and the issue count of a repository
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FormattedNumber } from 'react-intl';


import { makeSelectTodos } from 'containers/App/selectors';

export class TodoListItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const item = this.props.item;

   const content = (
      <Wrapper>
        <RepoLink target="_blank">
          {item.id}
        </RepoLink>
      </Wrapper>
    );
    // Render the content into a list item
    return (
     <ListItem item={content} />
    );
  }
}


TodoListItem.propTypes = {
  item: React.PropTypes.object
};


// export default connect(createStructuredSelector({
//   item: makeSelectTodos(),
// }))(TodoListItem);
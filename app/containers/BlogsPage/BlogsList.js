import React from 'react';
import List from './List';
import ListItem from './ListItem';

function BlogsList(props) {
  let listItem = props.data.map((item)=>{
    return <ListItem
        key={item.id}
        id={item.id}
        >
          {item.title}
        </ListItem>
    });
  return (
    <List>
      {listItem}
    </List>
  );
}

BlogsList.propTypes = {
  data: React.PropTypes.any,
};

export default BlogsList;

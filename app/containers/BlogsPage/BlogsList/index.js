import React from 'react';
import PropTypes from 'prop-types';
import List from '../List';
import ListItem from '../ListItem';
import Img from 'components/Img';
import { Link, IndexLink } from 'react-router';


const BlogsList = (props) => {
  const listItem = props.data.map(item =>{
    const image = require(`!file-loader?name=[hash].[ext]!static/image/${item.image}`);

    return <ListItem
        key={item.id}
        id={item.id}
        >
        <div>
        <Link to={`/Blogs/${item.id}`} className='blog-image'>
          <Img src={image } alt={item.title} />
        </Link>
        </div>
        <Link to={`/Blogs/${item.id}`} className='blog-title'>{item.title}</Link>
        <p>{item.description}</p>
        </ListItem>
    });
  return (
    <List className="blogs-blocks">
      {listItem}
    </List>
  );
}

BlogsList.propTypes = {
  data: React.PropTypes.arrayOf
};

export default BlogsList;

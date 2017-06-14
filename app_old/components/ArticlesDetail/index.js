import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import List from 'components/List';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';
import { makeSelectArticlesDetail } from 'containers/App/selectors';

function ArticlesDetail({ loading, error, articlesDetail}) {
  if (loading) {
    return <List component={LoadingIndicator} />;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <ListItem item={'Something went wrong, please try again'} />
    );
    return <List component={ErrorComponent} />;
  }

  if (articlesDetail) {
    const image = require(`!file-loader?name=[hash].[ext]!static/image/${articlesDetail.image}`);
    return (
      <div>
        <div>
            {articlesDetail.title}
        </div>
        <br />
        <div>
        <img src={image} alt="" width="50" />
        </div>
         <br />
        <p>
          {articlesDetail.description}
        </p>
         <br />

      </div>
    )

  }

  return null;
}

ArticlesDetail.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  articlesDetail: React.PropTypes.oneOfType({
    id: React.PropTypes.number,
    title: React.PropTypes.string,
    image:React.PropTypes.string,
    description: React.PropTypes.string,
    date: React.PropTypes.string,
    author: React.PropTypes.string,
  })
};

export default ArticlesDetail;


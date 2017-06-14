/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectArticlesDetail, makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import H2 from 'components/H2';
import ArticlesDetail from 'components/ArticlesDetail';
import AtPrefix from '../HomePage/AtPrefix';
import CenteredSection from '../HomePage/CenteredSection';
import Section from '../HomePage/Section';
import messages from '../HomePage/messages';
import { loadArticlesDetail } from 'containers/App/actions';
import { getArticlesId } from './actions';
import { makeSelectArticlesId} from './selectors';

export class ArticlesPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  constructor(props){
    super(props)
    this.state = {
      articlesId: props.params.id
    }
  };
  componentDidMount() {
    this.props.onGetArticleId(this.props);
    this.props.loadArticles();
  }

  render() {
    const { loading, error, articlesDetail } = this.props;
    const articlesProps = {
      loading,
      error,
      articlesDetail,
    };

    return (
      <article>
        <Helmet
          title="Home Page"
          meta={[
            { name: 'description', content: 'A React.js Boilerplate application homepage' },
          ]}
        />
        <div>
          <CenteredSection>
            <H2>
              <FormattedMessage {...messages.startProjectHeader} />
            </H2>
            <p>
              <FormattedMessage {...messages.startProjectMessage} />
            </p>
          </CenteredSection>
          <Section>
            <ArticlesDetail {...articlesProps} />
          </Section>
        </div>
      </article>
    );
  }
}

ArticlesPage.propTypes = {
  loading: React.PropTypes.bool,
  error: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
  articlesDetail: React.PropTypes.oneOfType([
    React.PropTypes.object
  ]),
  articleId: React.PropTypes.number,
  onGetArticleId: React.PropTypes.func,
  loadArticles: React.PropTypes.func
};

export function mapDispatchToProps(dispatch) {
  return {
    onGetArticleId: (props) => {
      dispatch(getArticlesId(props.params.id))
    },
    loadArticles: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadArticlesDetail());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  articlesDetail: makeSelectArticlesDetail(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  articlesId: makeSelectArticlesId(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(ArticlesPage);

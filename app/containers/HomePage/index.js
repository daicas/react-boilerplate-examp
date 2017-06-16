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

import { makeSelectRepos, makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import H2 from 'components/H2';
import ReposList from 'components/ReposList';
import AtPrefix from './AtPrefix';
import CenteredSection from './CenteredSection';
import Form from './Form';
import Input from './Input';
import Section from './Section';
import messages from './messages';
import { loadRepos } from '../App/actions';
import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';
import IntroBlock from 'components/IntroBlock';
import HomeNewsBlock from 'components/HomeNewsBlock';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    if (this.props.username && this.props.username.trim().length > 0) {
      this.props.onSubmitForm();
    }
  }

  render(props) {

    return (
      <main>
        <IntroBlock />
        <HomeFeatured>
          <HomeNewsBlock />
          <article class="partners-block block">
            <header>
              <h2 class="title">Partners</h2>
            </header>
            <section>
              <div class="partners-slider">
                <div class="partners-slider-item"><a href="#" title="logo 1"><img src="images/upload/logo-1.jpg" alt="logo 1"/></a><a href="#" title="logo 2"><img src="images/upload/logo-2.jpg" alt="logo 2"/></a>
                </div>
                <div class="partners-slider-item"><a href="#" title="logo 1"><img src="images/upload/logo-3.jpg" alt="logo 1"/></a><a href="#" title="logo 2"><img src="images/upload/logo-4.jpg" alt="logo 2"/></a>
                </div>
                <div class="partners-slider-item"><a href="#" title="logo 1"><img src="images/upload/logo-5.jpg" alt="logo 1"/></a><a href="#" title="logo 2"><img src="images/upload/logo-6.jpg" alt="logo 2"/></a>
                </div>
                <div class="partners-slider-item"><a href="#" title="logo 1"><img src="images/upload/logo-1.jpg" alt="logo 1"/></a><a href="#" title="logo 2"><img src="images/upload/logo-2.jpg" alt="logo 2"/></a>
                </div>
                <div class="partners-slider-item"><a href="#" title="logo 1"><img src="images/upload/logo-3.jpg" alt="logo 1"/></a><a href="#" title="logo 2"><img src="images/upload/logo-4.jpg" alt="logo 2"/></a>
                </div>
                <div class="partners-slider-item"><a href="#" title="logo 1"><img src="images/upload/logo-5.jpg" alt="logo 1"/></a><a href="#" title="logo 2"><img src="images/upload/logo-6.jpg" alt="logo 2"/></a>
                </div>
              </div>
            </section>
          </article>
        </HomeFeatured>
      </main>
    );
  }
}

HomePage.propTypes = {

};

export function mapDispatchToProps(dispatch) {
  return {


  };
}

const mapStateToProps = createStructuredSelector({

});

// Wrap the component to inject dispatch and state into it
export default HomePage;

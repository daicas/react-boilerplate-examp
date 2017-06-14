import React from 'react';
import { FormattedMessage } from 'react-intl';
import A from './A';
import Button from 'components/Button';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Logo from 'static/images/logo.png';
import messages from './messages';
import style from './style';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Header className="main-header">
      <A href="#" title="Template Demo" className="logo"><Img src={Logo} alt="Sutrix template demo"/></A>
        <Button type="button" className="navbar-btn"><span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span></Button>
        <div className="navbar-wrapper">
          <div className="navbar-right">
            <form action="#" method="post" name="search-form" id="search-form" className="search-form">
              <input type="text" id="search-text" name="search-text" placeholder="Search" required="required" className="search-text"/>
              <button type="submit" name="search-btn" id="search-btn" title="Search" className="search-btn">Search
              </button>
            </form>
            <ul className="language">
              <li><a href="#" title="Vietnamese" className="vn">Vietnamese</a>
              </li>
              <li><a href="#" title="English" className="en">English</a>
              </li>
              <li><a href="#" title="Russia" className="ru">Russia</a>
              </li>
            </ul>
          </div>
          <nav className="navbar">
            <ul>
              <li className="active"><a href="#" title="About us">About us</a>
              </li>
              <li><a href="#" title="Services">Services</a>
              </li>
              <li><a href="#" title="New &amp; event">New & event</a>
              </li>
              <li><a href="#" title="Gallery">Gallery</a>
              </li>
              <li><a href="#" title="Contact us">Contact us</a>
              </li>
              <li><a href="#" title="FAQs">FAQs</a>
              </li>
            </ul>
          </nav>
        </div>
      </Header>
    );
    // return (
    //   <div>
    //     <A href="https://twitter.com/mxstbr">
    //       <Img src={Banner} alt="react-boilerplate - Logo" />
    //     </A>
    //     <NavBar>
    //       <HeaderLink to="/">
    //         <FormattedMessage {...messages.home} />
    //       </HeaderLink>
    //       <HeaderLink to="/features">
    //         <FormattedMessage {...messages.features} />
    //       </HeaderLink>
    //     </NavBar>
    //   </div>
    // );
  }
}

export default Header;

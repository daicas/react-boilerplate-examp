import React from 'react';
import { FormattedMessage } from 'react-intl';

import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Logo from 'static/images/logo.png';
import messages from './messages';
import styled from 'styled-components';
import {
  HeaderTab,
  LinkLogo,
  NavBnt,
  IconBar,
  NavbarWrapper,
  NavRight,
	SearchForm,
  SearchText,
  SearchBtn,
  ListLanguage,
	ListLanguageItem,
	LinkLang,

  } from './style';


class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render(props) {
    return (
      <HeaderTab className="main-header">
        <LinkLogo href="#" title="Template Demo" ><Img src={Logo} alt="Sutrix template demo" /></LinkLogo>
        <NavBnt>
          <IconBar />
          <IconBar />
          <IconBar />
        </NavBnt>
        <NavbarWrapper>
          <NavRight>
            <SearchForm action="#" method="post" name="search-form">
              <SearchText type="text" id="search-text" name="search-text" placeholder="Search" required="required" className="search-text"/>
              <SearchBtn type="submit" name="search-btn" id="search-btn" title="Search" className="search-btn">Search
              </SearchBtn>
            </SearchForm>
            <ListLanguage>
              <ListLanguageItem><LinkLang href="#" title="Vietnamese" VN>Vietnamese</LinkLang>
              </ListLanguageItem>
              <ListLanguageItem><LinkLang href="#" title="Vietnamese" EN>English</LinkLang>
              </ListLanguageItem>
              <ListLanguageItem><LinkLang href="#" title="Vietnamese" RU>Russia</LinkLang>
              </ListLanguageItem>
            </ListLanguage>
          </NavRight>
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
        </NavbarWrapper>
      </HeaderTab>
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

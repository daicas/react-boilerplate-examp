import React from 'react';
import { FormattedMessage } from 'react-intl';

import Img from './Img';
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
  NavBar,
	NavBarList,
	NavBarListItem,
	NavBarLink

  } from './style';


class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render(props) {
    return (
      <HeaderTab className="main-header">
        <LinkLogo to="/" title="Template Demo" ><Img src={Logo} alt="Sutrix template demo" /></LinkLogo>
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
          <NavBar>
            <NavBarList>
              <NavBarListItem first className="active"><NavBarLink to="/about" title="About us">About us</NavBarLink>
              </NavBarListItem>
               <NavBarListItem ><NavBarLink to="/services" title="Services">Services</NavBarLink>
              </NavBarListItem>
              <NavBarListItem ><NavBarLink to="/news-event" title="New & event">New & event</NavBarLink>
              </NavBarListItem>
              <NavBarListItem ><NavBarLink to="/gallery" title="Gallery">Gallery</NavBarLink>
              </NavBarListItem>
              <NavBarListItem ><NavBarLink to="/contact-us" title="Contact us">Contact us</NavBarLink>
              </NavBarListItem>
              <NavBarListItem ><NavBarLink to="/faqs" title="FAQs">FAQs</NavBarLink>
              </NavBarListItem>
            </NavBarList>
          </NavBar>
        </NavbarWrapper>
      </HeaderTab>
    );

  }
}

export default Header;

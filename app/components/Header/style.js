import styled from 'styled-components';

import Button1 from 'components/Button';
import A1 from 'components/A';
import ImgTab from 'components/Img';
import iconSearch from 'static/images/icon-search.png';
import iconVN from 'static/images/vn.png';
import iconEN from 'static/images/EN.png';
import iconRU from 'static/images/ru.png';
import navBarLine from 'static/images/line.png';
import { Link } from 'react-router';

const HeaderTab = styled.header`
	overflow: hidden;
  padding: 20px 0;
`;

const A = styled.a`
	float: left;
  position: relative;
  z-index: 99;
  margin-bottom: 20px;
`;

const LinkLogo = styled(Link)`
	float: left;
  position: relative;
  z-index: 99;
  margin-bottom: 20px;
`;
const NavBnt = styled.button`
	display: none;
	background: #000;
	width: 35px;
	height: 30px;
	border: none;
	border-radius: 4px;
	float: right;
	position: relative;
	z-index: 99;
	@media (max-width: 768px) {
		display: block;
	}
`;
const IconBar = styled.span`
	background: #fff;
	display: block;
	height: 2px;
	margin-bottom: 3px;
`;
const NavbarWrapper = styled.div`
	display: block;
`;
const NavRight = styled.div`
	  float: right;
    padding-top: 26px;
`;
const SearchForm = styled.form`
	float: left;
  border-right: 1px solid #b2b2b2;
  padding-right: 10px;
  position: relative;
`;
const SearchText = styled.input`
  width: 198px;
	height: 25px;
	border-top-left-radius: 5px;
	border-top-right-radius: 5px;
	border-bottom-left-radius: 5px;
	border-bottom-right-radius: 5px;
	background-color: #ffffff;
	background: linear-gradient(#ffffff, #ffffff, #f4f3f1, #f4f3f1);
	box-sizing: border-box;
	border: solid 1px #cfcdc5;
	padding: 4px 30px 4px 7px;
	color: #666;
	font-size: 11px;
`;
const SearchBtn = styled.button`
	position: absolute;
	right: 10px;
	top: 2px;
	bottom: 2px;
	background: url(${iconSearch}) center center no-repeat;
	border: none;
	border-left: 1px solid #b2b2b2;
	width: 26px;
	height: auto;
	text-indent: 9999px;
`;
const ListLanguage = styled.ul`
	float: left;
	list-style: none;
	margin: 0;
  padding: 0;
`;
const ListLanguageItem = styled.li`
	float: left;
	margin-left: 7px;
	padding-top: 5px;
`;
const LinkLang = styled.a`
	text-indent: 9999px;
  display: block;
  width: 20px;
  height: 16px;
	background: url(${props => props.VN? iconVN : props.EN? iconEN : iconRU});
`;
const NavBar = styled.nav`
	overflow: hidden;
	background: #ff8a00;
	background: linear-gradient(#ffcc00, #ff8a00);
	border: 1px solid #ff8a00;
	border-radius: 5px;
	-ms-border-radius: 5px;
	width: 100%;
`;
const NavBarList = styled.ul`
	width: 100%;
  height: 40px;
  display: table;
	list-style:none;
	margin:0;
	padding:0;
`;
const NavBarListItem = styled.li`
	display: table-cell;
  width: 16.66666667%;
  background: url(${props => props.first ? 'none' : navBarLine }) 0 center no-repeat;
`;
const NavBarLink = styled(Link)`
	display: block;
  line-height: 40px;
  text-align: center;
  font-family: "CenturyGothic", Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 15px;
  color: #fff;
  text-transform: uppercase;
  text-decoration: none;
  text-shadow: 0 -2px #ff8a00;
	&:hover {
		background: #ff9e00;
    color: #fff;
	}
	&:active {
		background: #ff9e00;
	}
`;

export {

  LinkLogo,
  HeaderTab,
  Img,
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
};
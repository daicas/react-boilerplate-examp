import styled from 'styled-components';

import Button1 from 'components/Button';
import A1 from 'components/A';
import ImgTab from 'components/Img';
import iconSearch from 'static/images/icon-search.png';
import iconVN from 'static/images/vn.png';
import iconEN from 'static/images/EN.png';
import iconRU from 'static/images/ru.png';
import navBarLine from 'static/images/line.png';


const IntroBlockWapper = styled.div`
	padding: 10px;
	background: #dfdfdf;
  border-radius: 5px;
  margin-top: 20px;
  overflow: hidden;
`;
const IntroBlockContent = styled.div`
	width: 74%;
  float: left;
  padding-right: 10px;
`;
const Title = styled.h1`
	font-size: 2.818em;
  margin: 8px 0 10px;
	color: #ff6900;
  font-family: "CenturyGothic", Arial, Helvetica, sans-serif;
  padding: 0;
  border: 0;
  vertical-align: baseline;
  background: transparent;
`;
 const IntroBlockDes = styled.div`
 	line-height: 1.7;
  display: inline;
	& p{
		display: inline;
	}
 `;
 const LinkViewMore = styled.a`
 	text-decoration: underline;
  font-family: Arial, Helvetica, sans-serif;
 `;
 const IntroSlider = styled.div`
 position: relative;
	width: 26%;
	height: 130px;
	float: right;
	border: 1px solid #fff;
	border-radius: 5px;
	overflow: hidden;
 `;
const IntroSliderItem = styled.div`

`;

export {
	IntroBlockWapper,
	IntroBlockContent,
	Title,
	IntroBlockDes,
	LinkViewMore,
	IntroSlider,
	IntroSliderItem
};
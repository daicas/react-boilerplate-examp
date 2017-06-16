import styled from 'styled-components';

import ImgTab from 'components/Img';
import headerLine from 'static/images/line.png';


const ArticleWapper = styled.div`
	width: 48%;
	margin: 0 1%;
	float: left;
	background: #dfdfdf;
	border-radius: 5px;
	-ms-border-radius: 5px;
	min-height: 284px;
	overflow: hidden;
`;
const ArticleHeader = styled.div`
	    padding: 10px;
    background: url(${headerLine}) 0 100% repeat-x;
    overflow: hidden;
`;
const LinkViewMore = styled.a`
	float: right;
  line-height: 21px;
`;
const Title = styled.h2`
	font-family: "CenturyGothic", Arial, Helvetica, sans-serif;
	font-weight: bold;
	font-size: 21px;
	color: #ff6900;
	text-transform: uppercase;
	float: left;
	max-width: 70%;
	 margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
  background: transparent;
`;

export {
	ArticleWapper,
	ArticleHeader,
	Title,
	LinkViewMore
};
import { injectGlobal } from 'styled-components';
import bgImage from 'static/images/bg-body.png';
import fontwoff2 from 'static/fonts/gothic.woff';
/* eslint no-unused-expressions: 0 */
injectGlobal`

@font-face {
  font-family: 'CenturyGothic';
  src: url(${require('static/fonts/gothic.woff')}) format('woff'), url(${require('static/fonts/gothic.ttf')}) format('truetype');
}

  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;

  }

  body.fontLoaded {
    font-family: Arial, Helvetica, sans-serif;
  }

  #app {
    background: url(${bgImage}) 0 0 repeat;
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
    font-size:11px;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }

  hr {
  display: block;
  margin: 1em 0;
  padding: 0;
  height: 1px;
  border: 0;
  border-top: 1px solid #ccc;
}

  a {
    color: #0096ff;
    text-decoration: none;
  }

  a:hover {
    color: #ff9e00;
  }

`;

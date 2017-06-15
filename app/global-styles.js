import { injectGlobal } from 'styled-components';
import bgImage from 'static/images/bg-body.png';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;

  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
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
  a:active {
    color: #0078cc;
  }
  a:focus {
    outline: 0;
  }
`;

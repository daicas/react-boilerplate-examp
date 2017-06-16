import React from 'react';
import { FormattedMessage } from 'react-intl';

import Img from 'components/Img';
import styled from 'styled-components';
import {
	IntroBlockWapper,
	IntroBlockContent,
	Title,
	IntroBlockDes,
	LinkViewMore,
	IntroSlider,
	IntroSliderItem
  } from './style';


class IntroBlock extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render(props) {
    return (
       <IntroBlockWapper>
          <IntroSlider>
            <IntroSliderItem><Img src={require('static/images/upload/thumb.jpg')} alt="intro 1"/>
            </IntroSliderItem>
          </IntroSlider>
          <IntroBlockContent>
            <Title>Welcome to our Web Site !</Title>
            <IntroBlockDes>
              <p>Lorem Ipsum consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore Lorem ipsum dolor sit amet, conseter sadipscing elitr, sed diam ipsum dolor sit amet, conseter sadipscing elitr, sed diam Lorem Ipsum consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore Lorem ipsum dolor sit amet, conseter sadipscing elitr, sed diam ipsum dolor sit amet, conseter sadipscing elitr, sed diam invidunt ut labore Lorem ipsum dolor sit amet, conseter sadipscing elitr, sed diam ipsum dolor sit amet, conseter conseter sit...</p>
            </IntroBlockDes>
            <LinkViewMore href="#">View more</LinkViewMore>
          </IntroBlockContent>
        </IntroBlockWapper>
    );

  }
}

export default IntroBlock;

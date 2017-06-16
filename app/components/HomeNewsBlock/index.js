import React from 'react';
import { FormattedMessage } from 'react-intl';

import Img from 'components/Img';
import styled from 'styled-components';
import {
	ArticleWapper,
	ArticleHeader,
	Title,
	LinkViewMore
  } from './style';


class HomeNewsBlock extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render(props) {
    return (
       <ArticleWapper>
            <ArticleHeader>
              <Title>News &amp; Events</Title><LinkViewMore href="#" title="View more" class="viewmore">View more</LinkViewMore>
            </ArticleHeader>
            <section>
              <div class="featured-item"><a href="#" class="thumbnail"><img src="images/upload/thumb-2.jpg" alt="Sutrix template demo"/></a>
                <div class="caption">
                  <div class="header">
                    <h3 class="title-item"><a href="#" title="Consetetur sadipscing nonumy elitr...">Consetetur sadipscing nonumy elitr...</a>
                    </h3><span class="date">18.12.2013</span>
                  </div>
                  <div class="desc">
                    <p>Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore Consetetur sadipscing elitr,  diam nonumy eirmod tempor invidunt ut labore...</p>
                  </div>
                </div>
              </div>
              <div class="item-article">
                <div class="header">
                  <h3 class="title-item"><a title="Consetetur sadipscing elitr Consetetur sadipscing elitr Consete...">Consetetur sadipscing elitr Consetetur sadipscing elitr Consete...</a>
                  </h3><span class="date">18.12.2013</span>
                </div>
                <div class="shorttext">
                  <p>Consetetur sadipscing elitr, sed diam nonumy invidunt labore Consetetur Consetetur sadipscing elitr, sed diam nonumy invidunt labore Consetetur...</p>
                </div>
              </div>
              <div class="item-article">
                <div class="header">
                  <h3 class="title-item"><a title="Consetetur sadipscing elitr Consetetur sadipscing elitr Consete...">Consetetur sadipscing elitr Consetetur sadipscing elitr Consete...</a>
                  </h3><span class="date">18.12.2013</span>
                </div>
                <div class="shorttext">
                  <p>Consetetur sadipscing elitr, sed diam nonumy invidunt labore Consetetur Consetetur sadipscing elitr, sed diam nonumy invidunt labore Consetetur...</p>
                </div>
              </div>
            </section>
          </ArticleWapper>
    );

  }
}

export default HomeNewsBlock;

var React = require('react');
var Slider = require('react-slick');
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

export default class SliderSlick extends React.Component {

  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div>
          <img src={ require(`!file-loader?name=[hash].[ext]!static/images/upload/slider.jpg`)} alt="slider-1"/>
          <div>
            <p>
              1At Naturetour we are constantly adding to and improving our portfolio of wildlife holidays to provide you with an even greater choice of wildlife viewing experiences we are constantly adding to and improving.
            </p>
          </div>
        </div>

      </Slider>
    );
  }
}

SliderSlick.propTypes = {

};

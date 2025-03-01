// src/components/SareeCarousel.js
import React from 'react';
import Slider from "react-slick";
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './styles/SareeCarousel.css';

const SareeCarousel = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    vertical: false,
    verticalSwiping: false,
  };

  return (
    <Slider {...settings}>
      {images.map((img, index) => (
        <div key={index} className="carousel-slide">
          <Zoom>
            <img src={img} alt={`Saree slide ${index + 1}`} className="carousel-image" />
          </Zoom>
        </div>
      ))}
    </Slider>
  );
};

export default SareeCarousel;

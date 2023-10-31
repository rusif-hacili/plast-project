import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { paperList } from './PaperList';
import PaperItem from './PaperItem';

const Carousel = () => {
  var settings = {
    dots: true, // Show dots for navigation
    infinite: true, // Loop the carousel
    speed: 300, // Transition speed in milliseconds
    slidesToShow: 5, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll at a time
  };

  return (
    <>
      <div className='"carousel-container"'>
        <Slider {...settings}>
          {paperList.map((paperItem, key) => {
            return (
              <PaperItem
                key={paperItem.key}
                image={paperItem.image}
                name={paperItem.name}
              />
            )
          })}
        </Slider>
      </div>
    </>
  );
};

export default Carousel;


{/* <div className="carousel-container">
  <Slider {...settings}>



  </Slider>
</div> */}


import React from 'react';
import general_styles from '../../../general_styles/GeneralStyles.module.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { galleryData } from '../../../config/gallery';
// import './Gallery.css'

const Gallery = () => {
  const inlineStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    padding: '30px',
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className={`${general_styles.container}`} style={inlineStyle}>
      <Slider {...settings}>
        {galleryData.map((item) => (
          <div className="card" key={item.id}>
            <div className="card-top">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="card-bottom">type: {item.name}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Gallery;

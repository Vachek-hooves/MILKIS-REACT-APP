import React from 'react';
import { Banner } from '../banner/Banner';
import BarSlide from './barSlider/BarSlide';
import CarPark from './carParking/CarPark';
import RestSlide from './resSlider/RestSlide';

const Facilities = () => {
  return (
    <div>
      <Banner section="facilities" />
      <RestSlide />
      <BarSlide />
      <CarPark />
    </div>
  );
};

export default Facilities;

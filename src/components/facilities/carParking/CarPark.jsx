import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { parkingSlide } from '../../../config/parkingSlider';
import styles from './CarPark.module.css';
import general_styles from '../../../general_styles/GeneralStyles.module.css';
import { settingsParking } from '../../../config/parkingSlider';

const CarPark = () => {
  return (
    <div className={`${styles.slyder__container}`}>
      <div className={` ${styles.slider__position}`}>
        <Slider {...settingsParking}>
          {parkingSlide.map((item, index) => (
            <div className={`${'card'} ${styles.slider__card}`} key={index}>
              <img src={item.image} alt="park pic" />
            </div>
          ))}
        </Slider>
        <h3>Car Parking</h3>
      </div>
    </div>
  );
};

export default CarPark;

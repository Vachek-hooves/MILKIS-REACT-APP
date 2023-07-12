import { restSlide } from '../../../config/restaurantSlider';
import { setBar } from '../../../config/restaurantSlider';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './RestSlide.module.css';

const RestSlide = () => {
  return (
    <div>
      <div className={styles.slider__container}>
        <Slider {...setBar}>
          {restSlide.map((course) => (
            <div key={course.id} className={styles.element__background}>
              <div>
                <img
                  className={styles.imgSet}
                  src={course.image}
                  alt={course.course}
                />
              </div>
              <div className={styles.slider__descriptionCenter}>
                <div className={styles.slider__description}>
                  <h2>{course.course}</h2>
                  <h2>{course.ingredients}</h2>
                  <h2>{course.price}</h2>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <h3>Restaurant</h3>
      </div>
    </div>
  );
};

export default RestSlide;

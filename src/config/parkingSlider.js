import first from '../img/facilities/park/first.png';
import second from '../img/facilities/park/second.png';
import third from '../img/facilities/park/third.png';

export const parkingSlide = [
  {
    image: `${first}`,
  },
  {
    image: `${second}`,
  },
  {
    image: `${third}`,
  },
  {
    image: `${third}`,
  },
];

export const settingsParking = {
  dots: true,
  infinite: true,
  speed: 600,
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
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
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

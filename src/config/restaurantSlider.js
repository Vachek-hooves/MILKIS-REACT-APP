import first from '../img/facilities/bar/bed1.png';
import second from '../img/facilities/bar/bed2.png';
import third from '../img/facilities/bar/bed3.png';

export const restSlide = [
  {
    id:1,
    course: 'Starter',
    ingredients: 'Fennel - Burrata - Salad',
    price: '5$ - 100$',
    image: `${first}`,
  },
  {
    id:2,
    course: 'Main Dish',
    ingredients: 'Fennel - Burrata - Salad',
    price: '5$ - 100$',
    image: `${second}`,
  },
  {
    id:3,
    course: 'Dessert',
    ingredients: 'Fennel - Burrata - Salad',
    price: '5$ - 100$',
    image: `${third}`,
  },
  {
    id:4,
    course: 'Dessert',
    ingredients: 'Fennel - Burrata - Salad',
    price: '5$ - 100$',
    image: `${second}`,
  },
];

export const setBar = {
  dots: true,
  infinite: true,
  speed: 1200,
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

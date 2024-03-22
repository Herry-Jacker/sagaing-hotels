import React, { createContext } from 'react';
import './App.css';
import Nav from './components/nav/Nav';
import Home from './pages/home/Home';

// Hotel banner Images
import HotelImg1 from './statics/hotel1.jpg'
import HotelImg2 from './statics/hotel2.jpg'
import HotelImg3 from './statics/hotel3.jpg'
import HotelImg4 from './statics/hotel4.jpg'
import HotelImg5 from './statics/hotel5.jpg'
import HotelImg6 from './statics/hotel6.jpg'
import HotelImg7 from './statics/hotel7.jpg'
// Hotel banner Images

// Reception Images
import cardSlideImg1 from './statics/reception1.jpg';
import cardSlideImg2 from './statics/reception2.jpg';
import cardSlideImg3 from './statics/reception3.jpg';
import cardSlideImg4 from './statics/reception4.jpg';
import cardSlideImg5 from './statics/reception5.jpg';
import cardSlideImg6 from './statics/reception6.jpg';
import cardSlideImg7 from './statics/reception7.jpg';
// Reception Images

// Hotel Logos
import logoImage from './statics/logo/logo.jpg'
// Hotel Logos

export const HotelsContext = createContext(null);

const hotels = [
  {
    name: 'Example Hotel One', 
    description: 'Example Something More Like This Is The Best', 
    link: '#', 
    bannerImage: HotelImg1, 
    cardSlideImage: cardSlideImg1,
    card: {
      logo: logoImage, 
      title: 'EXP Hotel', 
      subTitle: "Example Something More Like This is the Best.", 
      email: "examplehotel@gmail.com", 
      phone: "09-123123456", 
      location: "123, example street, sagaing"
    },
  },
  {
    name: 'Example Hotel One', 
    description: 'Example Something More Like This Is The Best', 
    link: '#', 
    bannerImage: HotelImg2, 
    cardSlideImage: cardSlideImg2,
    card: {
      logo: logoImage, 
      title: 'EXP Hotel', 
      subTitle: "Example Something More Like This is the Best.", 
      email: "examplehotel@gmail.com", 
      phone: "09-123123456", 
      location: "123, example street, sagaing"
    },
  },
  {
    name: 'Example Hotel One', 
    description: 'Example Something More Like This Is The Best', 
    link: '#', 
    bannerImage: HotelImg3, 
    cardSlideImage: cardSlideImg3,
    card: {
      logo: logoImage, 
      title: 'EXP Hotel', 
      subTitle: "Example Something More Like This is the Best.", 
      email: "examplehotel@gmail.com", 
      phone: "09-123123456", 
      location: "123, example street, sagaing"
    },
  },
  {
    name: 'Example Hotel One', 
    description: 'Example Something More Like This Is The Best', 
    link: '#', 
    bannerImage: HotelImg4, 
    cardSlideImage: cardSlideImg4,
    card: {
      logo: logoImage, 
      title: 'EXP Hotel', 
      subTitle: "Example Something More Like This is the Best.", 
      email: "examplehotel@gmail.com", 
      phone: "09-123123456", 
      location: "123, example street, sagaing"
    },
  },
  {
    name: 'Example Hotel One', 
    description: 'Example Something More Like This Is The Best', 
    link: '#', 
    bannerImage: HotelImg5, 
    cardSlideImage: cardSlideImg5,
    card: {
      logo: logoImage, 
      title: 'EXP Hotel', 
      subTitle: "Example Something More Like This is the Best.", 
      email: "examplehotel@gmail.com", 
      phone: "09-123123456", 
      location: "123, example street, sagaing"
    },
  },
  {
    name: 'Example Hotel One', 
    description: 'Example Something More Like This Is The Best', 
    link: '#', 
    bannerImage: HotelImg6, 
    cardSlideImage: cardSlideImg6,
    card: {
      logo: logoImage, 
      title: 'EXP Hotel', 
      subTitle: "Example Something More Like This is the Best.", 
      email: "examplehotel@gmail.com", 
      phone: "09-123123456", 
      location: "123, example street, sagaing"
    },
  },
  {
    name: 'Example Hotel One', 
    description: 'Example Something More Like This Is The Best', 
    link: '#', 
    bannerImage: HotelImg7, 
    cardSlideImage: cardSlideImg7,
    card: {
      logo: logoImage, 
      title: 'EXP Hotel', 
      subTitle: "Example Something More Like This is the Best.", 
      email: "examplehotel@gmail.com", 
      phone: "09-123123456", 
      location: "123, example street, sagaing"
    },
  }
]

export default function App() {
  return (
    <HotelsContext.Provider value={ hotels }>
      <Nav/>
      <Home/>
    </HotelsContext.Provider>
  )
}

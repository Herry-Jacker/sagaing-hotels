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

export const HotelsContext = createContext(null);

const hotels = [
  {name: 'Example Hotel One', description: 'Example Something More Like This Is The Best', link: '#', bannerImage: HotelImg1},
  {name: 'Example Hotel One', description: 'Example Something More Like This Is The Best', link: '#', bannerImage: HotelImg2},
  {name: 'Example Hotel One', description: 'Example Something More Like This Is The Best', link: '#', bannerImage: HotelImg3},
  {name: 'Example Hotel One', description: 'Example Something More Like This Is The Best', link: '#', bannerImage: HotelImg4},
  {name: 'Example Hotel One', description: 'Example Something More Like This Is The Best', link: '#', bannerImage: HotelImg5},
  {name: 'Example Hotel One', description: 'Example Something More Like This Is The Best', link: '#', bannerImage: HotelImg6},
  {name: 'Example Hotel One', description: 'Example Something More Like This Is The Best', link: '#', bannerImage: HotelImg7}
]

export default function App() {
  return (
    <HotelsContext.Provider value={ hotels }>
      <Nav/>
      <Home/>
    </HotelsContext.Provider>
  )
}

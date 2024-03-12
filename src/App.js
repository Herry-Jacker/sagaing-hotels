import React, { createContext } from 'react';
import './App.css';
import Nav from './components/nav/Nav';
import Home from './pages/home/Home';

// Hotel banner Images
import HotelImg from './statics/hotel1.jpg'
// Hotel banner Images

export const HotelsContext = createContext(null);

const hotels = [
  {name: 'Example Hotel One', description: 'Example Something More Like This Is The Best', link: '#', bannerImage: HotelImg},
  {name: 'Example Hotel One', description: 'Example Something More Like This Is The Best', link: '#', bannerImage: HotelImg},
  {name: 'Example Hotel One', description: 'Example Something More Like This Is The Best', link: '#', bannerImage: HotelImg},
  {name: 'Example Hotel One', description: 'Example Something More Like This Is The Best', link: '#', bannerImage: HotelImg},
  {name: 'Example Hotel One', description: 'Example Something More Like This Is The Best', link: '#', bannerImage: HotelImg},
  {name: 'Example Hotel One', description: 'Example Something More Like This Is The Best', link: '#', bannerImage: HotelImg},
  {name: 'Example Hotel One', description: 'Example Something More Like This Is The Best', link: '#', bannerImage: HotelImg}
]

export default function App() {
  return (
    <HotelsContext.Provider value={ hotels }>
      <Nav/>
      <Home/>
    </HotelsContext.Provider>
  )
}

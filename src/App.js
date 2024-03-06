import React, { createContext, useState } from 'react';
import './App.css';
import Nav from './components/nav/Nav';
import Home from './pages/home/Home';

export const ActiveContext = createContext(null);

export default function App() {
  const [activeItem, setActiveItem] = useState('home');
  return (
    <ActiveContext.Provider value={{ activeItem, setActiveItem }}>
      <Nav/>
      <Home/>
    </ActiveContext.Provider>
  )
}

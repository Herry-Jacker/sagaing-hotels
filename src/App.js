import React, { createContext, useState } from 'react';
import './App.css';
import Nav from './components/nav/Nav';
import Home from './pages/home/Home';


const hotels = [
  {name: 'one', link: '#'},
  {name: 'one', link: '#'},
  {name: 'one', link: '#'},
  {name: 'one', link: '#'},
  {name: 'one', link: '#'},
  {name: 'one', link: '#'},
  {name: 'one', link: '#'}
]

export const ActiveContext = createContext(null);

export default function App() {
  return (
    <>
      <Nav hotels={hotels}/>
      <Home/>
    </>
  )
}

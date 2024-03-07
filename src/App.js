import React, { createContext, useState } from 'react';
import './App.css';
import Nav from './components/nav/Nav';
import Home from './pages/home/Home';

export const ActiveContext = createContext(null);

export default function App() {
  return (
    <>
      <Nav/>
      <Home/>
    </>
  )
}

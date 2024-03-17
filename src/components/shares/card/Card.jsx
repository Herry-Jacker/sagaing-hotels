import React from 'react';
import './card.css';
import logo from '../../../statics/logo/logo.jpg'

export default function Card() {
  return (
    <div className='card'>
        <div className="col-5 c-title">
            <img src={logo} />
            <h3>SGW Hotel</h3>
            <span>Lorem ipsum dolor sit amet.</span>
        </div>
        <div className="divider"></div>
        <div className="col-5 c-description"></div>
    </div>
  )
}
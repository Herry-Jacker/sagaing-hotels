import React from 'react';
import './cardSlider.css';
import myImg from '../../../statics/riverView/sagaingBridge.jpg';

export default function CardSlider() {
  return (
    <div className='card-slider'>
        <div className='temp-slider'>
            <div style={{backgroundImage: `url(${myImg})`}}>
            </div>
            <div className='card-container'>
                <div className="card"></div>
            </div>
        </div>
    </div>
  )
}

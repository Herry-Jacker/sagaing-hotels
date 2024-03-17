import React from 'react';
import './cardSlider.css';
import myImg from '../../../statics/riverView/sagaingBridge.jpg';
import Card from '../card/Card';

export default function CardSlider() {
  return (
    <div className='card-slider'>
        <div className='temp-slider'>
            <div style={{backgroundImage: `url(${myImg})`}}>
            </div>
            <div className='card-container'>
                <Card>
                  
                </Card>
            </div>
        </div>
    </div>
  )
}

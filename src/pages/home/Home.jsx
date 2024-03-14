import React from 'react';
import './home.css';
import ImageSlider from '../../components/shares/imageSlider/ImageSlider';

const Banner = () => {
    
      return (
        <div>
          <ImageSlider/>
        </div>
      );
    
}

const WhyChooseUs = () => {
  return (
    <div className='whyChooseUs'>
      <div className="container" style={{maxWidth: 1200}}>
        <div className="row">
          <div className='col-3'></div>
          <div className='col-3'></div>
          <div className='col-3'></div>
          <div className='col-3'></div>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
        <Banner/>
        <WhyChooseUs/>
    </>
  )
}
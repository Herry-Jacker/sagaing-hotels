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

export default function Home() {
  return (
    <>
        <Banner/>
    </>
  )
}
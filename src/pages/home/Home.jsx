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
        <div className="row justify-content-center">
          <div className="col-11 col-lg-10 text-light text-center">
            <h4 className='section-title'>Why Choose Us</h4>
            <h2 className='main-title'>Sagaing Hotels And Resorts</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, iusto voluptatem dolorum soluta sed veniam vero?</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum eum officia tempora sunt iure facere quasi doloribus dolores laborum saepe mollitia cumque corporis porro nisi, obcaecati voluptate? Deserunt, dolor consectetur.</p>
          </div>
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
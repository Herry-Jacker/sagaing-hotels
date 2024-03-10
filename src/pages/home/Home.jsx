import React from 'react';
import './home.css';
import ImageSlider from '../../components/shares/imageSlider/ImageSlider';

const Banner = () => {
    const images = [
        'https://img.freepik.com/free-photo/nature-water-beautiful-blue-house_1203-4911.jpg?t=st=1710034435~exp=1710038035~hmac=22534bc707375fd60bad33b06151823dbe494901d75d683c9c4c313cdb26a956&w=900',
        'https://img.freepik.com/free-photo/light-garden-luxury-pool-nature_1203-4908.jpg?t=st=1710034532~exp=1710038132~hmac=da8336237043e3dfc7968772f6b8cab64c594f108d9ad5b4ead4940f6f61207d&w=900',
        'https://img.freepik.com/free-photo/nature-water-beautiful-blue-house_1203-4911.jpg?t=st=1710034435~exp=1710038035~hmac=22534bc707375fd60bad33b06151823dbe494901d75d683c9c4c313cdb26a956&w=900',
      ];
    
      return (
        <div>
          <ImageSlider images={images} />
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
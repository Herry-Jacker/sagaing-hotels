import React, { useContext } from 'react';
import './cardSlider.css';
import myImg from '../../../statics/riverView/sagaingBridge.jpg';
import Card from '../card/Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import { HotelsContext } from '../../../App';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function CardSlider() {
  
  const hotels = useContext(HotelsContext);

  return (
    <div className='card-slider'>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {hotels.map((hotel, index) => (
          <SwiperSlide key={index}>
            
            <div style={{backgroundImage: `url(${hotel.cardSlideImage})`}}>
            </div>
            <div className='card-container'>
              <Card card={hotel.card}/>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

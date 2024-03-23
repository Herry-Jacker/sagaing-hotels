import React, { useContext } from 'react';
import './cardSlider.css';
import Card from '../card/Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import { HotelsContext } from '../../../App';
import { Keyboard, Navigation, Pagination, Scrollbar } from 'swiper/modules';

export default function CardSlider() {
  
  const hotels = useContext(HotelsContext);

  return (
    <div className='card-slider'>
      <Swiper
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        }}
        scrollbar={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className="mySwiper"
      >
        {hotels.map((hotel, index) => (
          <SwiperSlide key={index}>
            <div className='slide-container'>
              <div style={{backgroundImage: `url(${hotel.cardSlideImage})`}}>
              </div>
              <div className='card-container'>
                <Card card={hotel.card}/>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

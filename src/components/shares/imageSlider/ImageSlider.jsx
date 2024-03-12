import React, { useContext } from 'react';
import './imageSlider.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { HotelsContext } from '../../../App';

export default function App() {

  const hotels = useContext(HotelsContext);

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {hotels.map((hotel, index) => (
          <SwiperSlide key={index}>
            <div style={{backgroundImage: `url(${hotel.bannerImage})`}} className='slide'>
              <div className='cta'>
                <h3>{hotel.name}</h3>
                <h2>{hotel.description}</h2>
                <a className='btn btn-warning' href={hotel.link}>Discover More</a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

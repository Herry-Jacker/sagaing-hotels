import React from 'react';
import './home.css';
import BookFilterBox from '../../components/bookFilterBox/BookFilterBox';

const Banner = () => {
    return (
        <div className='bannerBG'>
            <div className='cta'>
                <h1>Enjoy Your</h1>
                <h1>Dream Vacation</h1>
            </div>
            <BookFilterBox/>
        </div>
    )
}

export default function Home() {
  return (
    <>
        <Banner/>
    </>
  )
}
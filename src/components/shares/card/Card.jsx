import React from 'react';
import './card.css';

export default function Card({card}) {
  return (
    <div className='card'>
        <div className="col-5 c-title">
            <img src={card.logo} />
            <h3>{card.title}</h3>
            <span>{card.subTitle}</span>
        </div>
        <div className="divider"></div>
        <div className="col-5 c-description">
          <ul>
            <li>
              <i class="fa-solid fa-phone"></i>
              <span>{card.phone}</span>
            </li>
            <li>
              <i class="fa-solid fa-envelope"></i>
              <span>{card.email}</span>
            </li>
            <li>
              <i class="fa-solid fa-location-dot"></i>
              <span>{card.location}</span>
            </li>
          </ul>
          <button className='btn btn-sm btn-outline-warning'>Learn More</button>
        </div>
    </div>
  )
}
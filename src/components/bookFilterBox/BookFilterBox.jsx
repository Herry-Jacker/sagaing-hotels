import React from 'react';
import './filterBox.css';

export default function BookFilterBox() {
  return (
    <div className='filter-box'>
        <div>
            <span>Hotel Resort</span>
            <select id='hotels'>
                <option value="SGW">Sagaing Golden World Hotel</option>
            </select>
        </div>
        <div>
            <span>Check In</span>
            <input type='date'/>
        </div>
        <div>
            <span>Check Out</span>
            <input type="date" />
        </div>
        <div>
            <span>Adult</span>
            <select id='adult'>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
        </div>
        <div>
            <span>Child</span>
            <select id='child'>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
        </div>
        <button className='btn btn-primary'>Book Now</button>
    </div>
  )
}

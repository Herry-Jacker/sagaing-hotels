import React, { useContext } from 'react';
import './nav.css';

const FixNav = {
    position: "fixed",
    top: 0,
    zIndex: 1200,
}

export default function Nav({hotels}) {

  const changeMenu = () => {
    document.querySelector('.toggle_menu').classList.toggle("mobile-active");
  }

  return (
    <nav className="navbar back-filter p-0 pt-1 w-100" style={FixNav}>
        <div className='container' style={{maxWidth: 1200}}>
            <a className="navbar-brand pt-2 flex-fill logo" href="#">
                <h3 className='Pcolor'>Sagaing Hotels</h3>
            </a>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-warning me-2" type="submit">Search</button>
            </form>
            <button className="navbar_toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span onClick={changeMenu} className="toggle_menu"><span></span></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <div className='flex-fill'></div>
              <ul className="navbar-nav">
                  {
                    hotels.map( hotel => (
                      <li className='nav-item'>
                        <a className="nav-link Pcolor" aria-current="page" href={hotel.link}>{hotel.name}</a>
                      </li>
                    ))
                  }
              </ul>
            </div>
        </div>
    </nav>
  )
}
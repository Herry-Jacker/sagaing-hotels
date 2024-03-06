import React, { useContext } from 'react';
import './nav.css'
import { ActiveContext } from '../../App';

const FixNav = {
    position: "fixed",
    top: 0,
    zIndex: 1200,
}

const NavItems = ({modal}) => {
    const {activeItem, setActiveItem} = useContext(ActiveContext);
    return (
        <>
            <li className={activeItem === 'home' ? 'nav-item active' : 'nav-item'}>
                <a className="nav-link Pcolor" data-bs-dismiss={modal} href="#">HOME</a>
            </li>
            <li className={activeItem === 'room' ? 'nav-item active' : 'nav-item'}>
                <a className="nav-link Pcolor" data-bs-dismiss={modal} href="#">ROOMS</a>
            </li>
            <li className={activeItem === 'about' ? 'nav-item active' : 'nav-item'}>
                <a className="nav-link Pcolor" data-bs-dismiss={modal} href="#">ABOUT</a>
            </li>
            <li className={activeItem === 'service' ? 'nav-item active' : 'nav-item'}>
                <a className="nav-link Pcolor" data-bs-dismiss={modal} href='#'>SERVICES</a>
            </li>
        </>
    )
}

const Modal = () => {
  return (
    <div className="modal d-md-none fade overflow-visible h-90" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content back-filter2 Pcolor">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Menu</h5>
                    <i type="button" className="fas fa-xmark fs-3" data-bs-dismiss="modal" aria-label="Close"></i>
                </div>
                <div className="modal-body mobile-nav text-center height-100 navbar d-block nav">
                    <NavItems modal="modal"/>
                </div>
            </div>
        </div>
    </div>
  )
}

function changeNavColor(){
	const navBarBgcolor = document.querySelector(".transpNav")
	const navScrollValue = window.scrollY;
	if(navScrollValue < 0){
		navBarBgcolor.classList.remove("back-filter");
	} else{
		navBarBgcolor.classList.add("back-filter");
	}
}

window.addEventListener("scroll", changeNavColor);

export default function Nav() {
  return (
    <nav className="navbar transpNav p-0 pt-1 navbar-expand-sm w-100" style={FixNav}>
        <div className='container' style={{maxWidth: 1200}}>
            <a className="navbar-brand pt-2 flex-fill logo" href="#">
                <h3 className='Pcolor'>SGW Hotel</h3>
            </a>
            <div className="navbar d-none d-md-flex nav">
                <NavItems/>
            </div>
            <i className='fas d-block d-md-none ms-4 me-2 fa-bars Pcolor fs-3' data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
            <Modal/>
        </div>
    </nav>
  )
}
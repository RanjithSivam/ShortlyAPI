import React from 'react'
import './Navbar.css'

import Logo from '../images/logo.svg';

function Navbar() {
    return (
        <nav className="navbar container">
            <div className="navbar__left">
                <div className="navbar__title">
                    <img src={Logo} alt="logo" />
                </div>
                <ul className="nav__options">
                    <li><a className="nav__links">features</a></li>
                    <li><a className="nav__links">pricing</a></li>
                    <li><a className="nav__links">resources</a></li>
                </ul>
            </div>
            <div className="navbar__right">
                <ul className="nav__options">
                    <li><a className="nav__links nav__login">login</a></li>
                    <li><a className="nav__links nav__signup">sign up</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar

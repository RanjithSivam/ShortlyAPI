import React, { useState } from 'react'
import './MobileNav.css'

import Logo from '../images/logo.svg';


function MobileNav({show}) {
    const [nav,setNav] = useState(false);

    const showNav = () =>{
        setNav(!nav);
        show();
    }
    return (
        <div className="mobile__nav container">
            <div className="mobile__top">
                <div className="mobile__title">
                    <img src={Logo} alt="logo" />
                </div>
                <div className="hamburger" onClick={showNav}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div className={nav?"mobile__bottom show":"mobile__bottom"}>
                <ul className="mobile__nav__options">
                    <li><a className="mobile__nav__links">features</a></li>
                    <li><a className="mobile__nav__links">pricing</a></li>
                    <li><a className="mobile__nav__links">resources</a></li>
                </ul>
                <hr />
                <ul className="mobile__nav__options">
                    <li><a className="mobile__nav__links mobile__nav__login">login</a></li>
                    <li className="mobile__nav__signup"><a className="mobile__nav__links">sign up</a></li>
                </ul>
            </div>
        </div>
    )
}

export default MobileNav;

import React, { useState } from "react";
import { Link } from "react-scroll";
import './Header.css';

import Logo from '../../assets/logo.png';
import Bars from '../../assets/bars.png';

const Header = () => {

    const mobile = window.innerWidth <= 768 ? true : false;
    const [menuOpened, setMenuOpened] = useState(false);

    return (
        <div className="header">
            <img src={Logo} alt="logo fit club" className="header__logo" />

            {(menuOpened === false && mobile === true) ? (
                <div 
                    style={{ backgroundColor: 'var(--appColor)',
                             padding: '0.5rem',
                             borderRadius: '5px',
                             display: 'flex',
                             alignItems: 'center',
                             justifyContent: 'center'
                             }}
                    onClick = {() => setMenuOpened(true)}
                >
                    <img src={Bars} alt="icon bars"
                        style = {{width: '1.5rem', height: '1.5rem'}}
                     />
                </div>
            ) : <ul className="header__menu">
                    <li className="header__menu-item">
                        <Link
                            to="home"
                            spy={true}
                            smooth={true}
                            onClick={() => setMenuOpened(false)}
                            activeClass='active'
                        >Home</Link>
                    </li>
                    <li  className="header__menu-item">
                        <Link
                            onClick={() => setMenuOpened(false)}
                            to="programs"
                            spy={true}
                            smooth={true}
                        >Programs</Link>
                    </li>
                    <li  className="header__menu-item">
                        <Link
                            onClick={() => setMenuOpened(false)}
                            to="reasons"
                            spy={true}
                            smooth={true}
                        >Why us</Link>
                    </li>
                    <li  className="header__menu-item">
                        <Link
                            onClick={() => setMenuOpened(false)}
                            to="plans"
                            spy={true}
                            smooth={true}
                        >Plans</Link>
                    </li>
                    <li className="header__menu-item">
                        <Link 
                            onClick={() => setMenuOpened(false)} 
                            to="testimonials"
                            spy={true}
                            smooth={true}
                        >Testimonials</Link>
                    </li>
                </ul> }

            
        </div>
    )
}

export default Header;
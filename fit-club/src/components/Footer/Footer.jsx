import React from "react";

import './Footer.css';

import Github from '../../assets/github.png';
import Instagram from '../../assets/instagram.png';
import LinkedIn from '../../assets/linkedin.png';
import Logo from '../../assets/logo.png';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__conteiner">
                <div className="footer__social-links">
                    <img src={Github} alt="icon Github" />
                    <img src={Instagram} alt="icon Instagram" />
                    <img src={LinkedIn} alt="icon LinkedIn" />
                </div>
                <div className="footer__logo">
                    <img src={Logo} alt="logo Fit club" />
                </div>
            </div>

            <div className="blur footer-blur__one"></div>
            <div className="blur footer-blur__second"></div>
        </div>
    )
}

export default Footer;
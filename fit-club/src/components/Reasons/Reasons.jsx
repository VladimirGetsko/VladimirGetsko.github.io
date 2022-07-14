import React from "react";

import './Reasons.css';
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';
import image4 from '../../assets/image4.png';
import nb from '../../assets/nb.png';
import adidas from '../../assets/adidas.png';
import nike from '../../assets/nike.png';
import tick from '../../assets/tick.png';

const Reasons = () => {
    return (
        <div className="reasons" id="reasons">
            <div className="reasons__box">
                <div className="reasons-image">
                    <div className="reasons-image__item-1">
                        <img src={image1} alt="sport man" />
                    </div>
                    <div className="reasons-image__item-2">
                        <img src={image2} alt="sport man" />
                    </div>
                    <div className="reasons-image__item-3">
                        <img src={image3} alt="sport man" />
                    </div>
                    <div className="reasons-image__item-4">
                        <img src={image4} alt="sport man" />
                    </div>
                </div>
            </div>
            <div className="reasons__box">
                <div className="reasons-content">
                    <span className="reasons-content__subquestion">some reasons</span>
                    <div className="reasons-content__question">
                        <span className="stroke-text">Why </span>
                        <span>choose us?</span>
                    </div>
                    <ul className="reasons-content__list">
                        <li className="reasons-content__item">
                            <img src={tick} alt="list icon" />
                            <span>over 140+ expert coachs</span>
                        </li>
                        <li className="reasons-content__item">
                            <img src={tick} alt="list icon" />
                            <span>train smarter and faster than before</span>
                        </li>
                        <li className="reasons-content__item">
                            <img src={tick} alt="list icon" />
                            <span>1 free program for new member</span>
                        </li>
                        <li className="reasons-content__item">
                            <img src={tick} alt="list icon" />
                            <span>reliable partners</span>
                        </li>
                    </ul>
                    <div className="reasons-content__partners partners">
                        <span className="partners__title">our partners</span>
                        <ul className="partners__list">
                            <li className="partners__item">
                                <img src={nb} alt="nb icon logo" />
                            </li>
                            <li className="partners__item">
                                <img src={adidas} alt="adidas icon logo" />
                            </li>
                            <li className="partners__item">
                                <img src={nike} alt="nike icon logo" />
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Reasons;
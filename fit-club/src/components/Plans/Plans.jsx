import React from "react";

import {plansData} from '../../data/plansData';
import './Plans.css';

import whiteTick from '../../assets/whiteTick.png';
import RightArrow from '../../assets/rightArrow.png';

const Plans = () => {
    return (
        <div className="plans" id="plans">
            <div className="blur plans-blur__one"></div>
            <div className="blur plans-blur__second"></div>
            <div className="plans__header">
                <span className="stroke-text">Ready to Start</span>
                <span>Your Journey</span>
                <span className="stroke-text">now withus</span>
            </div>
            <div className="plans__content plan-card">
                {plansData.map((plan, i) => (
                    <div className="plan-card__item" key={i}>
                        {plan.icon}
                        <span className="plan-card__item-name">{plan.name}</span>
                        <span className="plan-card__item-price">$ {plan.price}</span>

                        <ul className="plan-card__item-list">
                            {plan.features.map((feature, i) => (
                                <li className="plan-card__item-feature" key={i}>
                                    <img src={whiteTick} alt="tick icon" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="plan-card__item-link">
                            <span>See more benefits</span>
                            <img src={RightArrow} alt="icon arrow right" />
                        </div>

                        <button className="plan-card__item-btn btn-white">Join now</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Plans;
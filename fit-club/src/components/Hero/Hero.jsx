import React from "react";
import Header from "../Header/Header";
import './Hero.css';

import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import Heart from '../../assets/heart.png';
import Calories from '../../assets/calories.png';

import NumberCounter from 'number-counter';

import {motion} from 'framer-motion';

const Hero = () => {
    const transition = {type: 'spring', duration: 3};
    const mobile = window.innerWidth <= 768 ? true : false;
    return (
        <div className="hero"  id="home">
            <div className="blur blur-hero"></div>
            <div className="left-h">
                <Header/>

                <div className="hero__subtitle">
                    <motion.span
                        initial = {{left: mobile ? '175px' : '238px'}}
                        whileInView = {{left: '8px'}}
                        transition = {{...transition, type: 'tween'}}
                        className="hero__subtitle-decor"
                    ></motion.span>
                    <span className="hero__subtitle-text">the best fitness clib in the town</span>
                </div>
                <div className="hero__title">
                    <div>
                        <span className="stroke-text">Shape </span>
                        <span>Your</span>
                    </div>
                    <div>
                        <span>Ideal body</span>
                    </div>
                </div>
                <div className="hero__text">In here we will help you to shape and build your ideal body and live up your life to fullest</div>
                
                <div className="hero__statistics statistics">
                    <div className="statistics__box">
                        <span className="statistics__box-num">
                            <NumberCounter end={140} start={100} delay='4' preFix='+' />
                        </span>
                        <span className="statistics__box-name">Expert coaches</span>
                    </div>
                    <div className="statistics__box">
                        <span className="statistics__box-num">
                            <NumberCounter end={978} start={800} delay='4' preFix='+' />
                        </span>
                        <span className="statistics__box-name">Members joined</span>
                    </div>
                    <div className="statistics__box">
                        <span className="statistics__box-num">
                            <NumberCounter end={50} start={10} delay='4' preFix='+' />
                        </span>
                        <span className="statistics__box-name">Fitness programs</span>
                    </div>
                </div>

                <div className="hero__buttons buttons-hero">
                    <button className="btn-orange buttons-hero__btn">Get Started</button>
                    <button className="btn-outline buttons-hero__btn">Learn More</button>
                </div>
            </div>
            
            <div className="right-h">
                <button className="btn-white buttons-hero__btn">Join Now</button>
                <motion.div 
                    className="heart-rate"
                    transition = {transition}
                    initial = {{right: '-1rem'}}
                    whileInView = {{right: '4rem'}}
                    >
                    <img src={Heart} alt="icon heart" className="heart-rate__img" />
                    <span className="heart-rate__text">Heart Rate</span>
                    <span className="heart-rate__param">116 bpm</span>
                </motion.div>

                <img src={hero_image} alt="sport man" className="hero__bg" />
                <motion.img
                    initial = {{right: '11rem'}}
                    whileInView = {{right: '20rem'}}
                    transition = {transition}
                    src={hero_image_back} alt="img decoration" className="hero__decor" />

                <motion.div 
                    className="calories"
                    transition = {transition}
                    initial = {{right: '37rem'}}
                    whileInView = {{right: '28rem'}}
                    >
                    <img src={Calories} alt="calories scale" />
                    <div className="calories__inner">
                        <span className="calories__text">Calories burned</span>
                        <span className="calories__param">220 kcal</span>  
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Hero;
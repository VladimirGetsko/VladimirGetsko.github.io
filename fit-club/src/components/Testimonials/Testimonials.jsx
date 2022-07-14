import React from "react";
import { useState } from "react";

import './Testimonials.css';
import {testimonialsData} from '../../data/testimonialsData';
import leftArrow from '../../assets/leftArrow.png';
import rightArrow from '../../assets/rightArrow.png';

import {motion} from 'framer-motion';

const Testimonials = () => {

    const [selected, setSelected] = useState(0);
    const testLength = testimonialsData.length;

    const transition = {type: 'spring', duration: 3};

    return (
        <div className="testimonials">
            <div className="testimonials__content">
                <span className="testimonials__content-subtitle">Testimonials</span>
                <div className="testimonials__content-title">
                    <span className="stroke-text">What they</span>
                    <span>say about us</span>
                </div>
                <motion.span 
                    className="testimonials__content-review"
                    key={selected}
                    initial = {{opacity: 0, x: -100}}
                    animate = {{opacity: 1, x: 0}}
                    exit = {{opacity: 0, x: 100}}
                    transition = {transition}
                    >
                    {testimonialsData[selected].review}
                </motion.span>
                <div>
                    <span className="testimonials__content-name">{testimonialsData[selected].name}</span>
                    <span> - {testimonialsData[selected].status}</span>
                </div>
            </div>
            <div className="testimonials__slide">
                <motion.div
                    className="testimonials__slide-strock"
                    transition = {{...transition, duration: 2}}
                    initial = {{opacity: 0, x: -100}}
                    whileInView = {{opacity: 1, x: 0}}
                    ></motion.div>
                <motion.div
                    className="testimonials__slide-bg"
                    transition = {{...transition, duration: 2}}
                    initial = {{opacity: 0, x: 100}}
                    whileInView = {{opacity: 1, x: 0}}
                    ></motion.div>

                <motion.img
                    key={selected}
                    initial = {{opacity: 0, x: 100}}
                    animate = {{opacity: 1, x: 0}}
                    exit = {{opacity: 0, x: -100}}
                    transition = {transition}
                    className="testimonials__slide-img" src={testimonialsData[selected].image} alt="user photo" />

                <div className="testimonials__slide-arrows">
                    <img
                        onClick={() => {
                            selected === 0 ? setSelected(testLength - 1) : setSelected(prev => prev - 1);
                        }}
                        src={leftArrow} alt="icon arrow" className="arrow-left" />
                    <img
                        onClick={() => {
                            selected === testLength - 1 ? setSelected(0) : setSelected(prev => prev + 1);
                        }}
                        src={rightArrow} alt="icon arrow" className="arrow-right" />
                </div>
            </div>
        </div>
    )
}

export default Testimonials;
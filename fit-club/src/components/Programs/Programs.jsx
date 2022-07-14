import React from "react";

import './Programs.css';
import {programsData} from '../../data/programsData';
import RightArrow from '../../assets/rightArrow.png';

const Programs = () => {
    return (
        <div className="programs" id="programs">
            <div className="programs__header header-programs">
                <span className="stroke-text">Explore our</span>
                <span>Programs</span>
                <span className="stroke-text">To shape you</span>
            </div>

            <div className="programs__categories">
                {programsData.map((program, i) => (
                    <div className="category" key={i}>
                        {program.image}
                        <span className="category__title">{program.heading}</span>
                        <span className="category__text">{program.details}</span>
                        <div className="category__link">
                            <span>Join Now</span>
                            <img src={RightArrow} alt="arrow img" />
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default Programs;
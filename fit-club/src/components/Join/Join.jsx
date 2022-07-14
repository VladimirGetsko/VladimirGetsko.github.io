import React, { useRef } from "react";

import './Join.css';

import emailjs from '@emailjs/browser';

const Join = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="join" id="join-us">
            <div className="join__content">
                <div className="join__inner join__content-decor">
                    <span className="stroke-text">Ready to</span>
                    <span> level up</span>
                </div>
                <div className="join__inner">
                    <span>your body</span>
                    <span className="stroke-text">with us?</span>
                </div>
            </div>
            <div className="join__form form-join">
                <form ref={form} className="form-join__email" onSubmit={sendEmail} >
                    <input type="email" name="user-email" placeholder="Enter your Email Address here..." />
                    <button className="btn-orange form-join__btn" type="submit" >Join now</button>
                </form>
            </div>
        </div>
    )
}

export default Join;
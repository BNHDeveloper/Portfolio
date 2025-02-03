import React, { useRef } from 'react'
import './ConcatPortfolio.css';
import emailjs from '@emailjs/browser';

export const ConcatPortfolio = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm('service_3sl4oy6', 'template_qosdru3', form.current, {
                publicKey: '3C4cD3Lpq6aVcECXy',
            })
            .then(
                () => {
                    return (
                        <div>
                            Your email send successfuly
                        </div>)
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
        e.target.reset();
    };
    return (
        <>
            <iframe className='portfolioPage' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.0268968773103!2d6.904734525259797!3d36.86577501325386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f1c5199857512b%3A0xaa857f1e4198281a!2z2YPYp9mF2Yo!5e0!3m2!1sen!2sdz!4v1710966053852!5m2!1sen!2sdz"
                width="300" height="300"
                allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
            </iframe>
            <form ref={form} onSubmit={sendEmail} id='concat'>
                <div>
                    <label>Name</label>
                    <input type="text" name="user_name" />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" name="user_email" />
                </div>
                <div>
                    <label>Message</label>
                    <textarea name="message" />
                </div>
                <input type="submit" value="Send" />
            </form>
        </>
    );
}
export default ConcatPortfolio;
import React from 'react';
import './HomePortfolio.css';
import SlideCarousel from '../SlideCarousel/SlideCarousel';
export const HomePortfolio = () => {
    return (
        <div id='about-me'>
            <p className='description'>
                I'm Creative Director and UI/UX Designer
                from Sydney, Australia, working in web
                development and print media. I enjoy
                turning complex problems into simple,
                beautiful and intuitive designs.
                My job is to build your website so
                that it is functional and user-friendly
                but at the same time attractive.
                Moreover, I add personal touch to
                your product and make sure that is
                eye-catching and easy to use. My
                aim is to bring across your message
                and identity in the most creative way. I created
                web design for many famous brand companies.
            </p>
            <h3 className='sous-title'>
                What I'm Doing
            </h3>
            <div className='job'>
                <div className='box flex'>
                    <div className='image'><i className="ti-layout"></i></div>
                    <div className='info'>
                        <h4>web developer</h4>
                        <p>High-quality development of sites at the professional level</p>
                    </div>
                </div>
                <div className='box flex'>
                    <div className='image'><i className="ti-mobile"></i></div>
                    <div className='info'>
                        <h4>mobile apps</h4>
                        <p>Professional development of applications for iOS and Android</p>
                    </div>
                </div>
                <div className='box flex'>
                    <div className='image'><i className="ti-write"></i></div>
                    <div className='info'>
                        <h4>writer</h4>
                        <p>i write a books in diffrents failed such as programming</p>
                    </div>
                </div>
                <div className='box flex'>
                    <div className='image'><i className="ti-eye"></i></div>
                    <div className='info'>
                        <h4>photography</h4>
                        <p>I make high-quality photos of any category at a professional level</p>
                    </div>
                </div>
            </div>
            <h3 className='sous-title'>
                Testimonials
            </h3>
            <div className='Testimonials flex'>
                <SlideCarousel/>
            </div>
        </div>
    )
}
export default HomePortfolio;
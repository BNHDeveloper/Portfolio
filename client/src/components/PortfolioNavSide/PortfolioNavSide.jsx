import React, { useState } from 'react'
import './portfolioNav.css';
import portfolio from '../../static/avatar-2.png';

export const PortfolioNav = () => {
    let [infoShow, setInfoShow] = useState(true);
    return (
        <div className='PortfolioNav'>
            <div className='info flex'>
                <div className='image'>
                    <img src={portfolio} alt="myImage" />
                </div>
                <div className='content flex'>
                    <span className='yourName'>
                        boumelha nour el-houda
                    </span>
                    <span className='work'>full stack</span>
                </div>
            </div>
            {infoShow?
                (<>
                    <button id='angle' className='flex' onClick={()=>setInfoShow(!infoShow)}>
                        <i className='ti-angle-down'></i>
                    </button>
                    <div id='portfolio-info'>
                        <div className='contact flex'>
                            <div className='box flex'>
                                <a href="mailto:boumelhanourelhouda@gmail.com"><i className="ti-email bg-w"></i></a>
                                <div className='flex'>
                                    <span>email</span>
                                    <span>boumelhanourelhouda@gmail.com</span>
                                </div>
                            </div>
                            <div className='box flex'>
                                <i className="ti-mobile bg-w"></i>
                                <div className='flex'>
                                    <span>phone</span>
                                    <span>
                                        +213 796 946 654
                                    </span>
                                </div>
                            </div>
                            <div className='box flex'>
                                <a href="/"><i className="ti-location-pin bg-w"></i></a>
                                <div className='flex'>
                                    <span>location</span>
                                    <span>algeria , skikda </span>
                                </div>
                            </div>
                        </div>
                        <div className="socials flex">
                            <a className="social-item" href="https://www.facebook.com/profile.php?id=100094468737676"><i className="ti-facebook bg-w"></i></a>
                            <a className="social-item" href="https://www.instagram.com/easy_code_dz/"><i className="ti-instagram bg-w"></i></a>
                            <a className="social-item" href="https://github.com/BNHDeveloper"><i className="ti-github bg-w"></i></a>
                            <a className="social-item" href="https://www.linkedin.com/in/boumelha-nour-el-houda/"><i className="ti-linkedin bg-w"></i></a>
                        </div>
                    </div>
                    </>) :<>
                    <button id='angle' className='flex' onClick={()=>setInfoShow(!infoShow)}>
                        <i className='ti-angle-down'></i>
                    </button>
                    <div id='portfolio-info' className='unvisible'>
                        <div className='contact flex'>
                            <div className='box flex'>
                                <a href="mailto:boumelhanourelhouda@gmail.com"><i className="ti-email bg-w"></i></a>
                                <div className='flex'>
                                    <span>email</span>
                                    <span>boumelhanourelhouda@gmail.com</span>
                                </div>
                            </div>
                            <div className='box flex'>
                                <i className="ti-mobile bg-w"></i>
                                <div className='flex'>
                                    <span>phone</span>
                                    <span>
                                        +213 796 946 654
                                    </span>
                                </div>
                            </div>
                            <div className='box flex'>
                                <a href="/"><i className="ti-location-pin bg-w"></i></a>
                                <div className='flex'>
                                    <span>location</span>
                                    <span>algeria , skikda </span>
                                </div>
                            </div>
                        </div>
                        <div className="socials flex">
                            <a className="social-item" href="https://www.facebook.com/profile.php?id=100094468737676"><i className="ti-facebook bg-w"></i></a>
                            <a className="social-item" href="https://www.instagram.com/easy_code_dz/"><i className="ti-instagram bg-w"></i></a>
                            <a className="social-item" href="https://github.com/BNHDeveloper"><i className="ti-github bg-w"></i></a>
                            <a className="social-item" href="https://www.linkedin.com/in/boumelha-nour-el-houda/"><i className="ti-linkedin bg-w"></i></a>
                        </div>
                    </div>
                </>}
        </div>
    )
}


export default PortfolioNav;
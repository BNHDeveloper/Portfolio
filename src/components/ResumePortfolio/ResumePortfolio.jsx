import React from 'react'
import './ResumePortfolio.css';
import Circle from '../circleParcentage/Circle';

export const ResumePortfolio = () => {
    return (
        <>
            <div id='resume'>
                <div className='flex ligne'>
                    <div className='flex'>
                        <i className="ti-write"></i>
                        <h3 className='sous-title'>education</h3>
                    </div>
                    <div className='box'>
                        <p className='univ'>University Of skikda</p>
                        <div>
                            <span className='year'>2020 — 2023</span>
                            <span className='failed'>computer seciece</span>
                        </div>
                        <p className='description'>
                            Nemo enims ipsam voluptatem, blanditiis praesentium voluptum
                            delenit atque corrupti, quos dolores et quas molestias exceptur.
                        </p>
                    </div>
                    <div className='box'>
                        <p className='univ'>University School Of The Arts</p>
                        <div>
                            <span className='year'>2023 — 2025</span>
                            <span className='failed'>software enginering</span>
                        </div>
                        <p className='description'>
                            Nemo enims ipsam voluptatem, blanditiis praesentium voluptum
                            delenit atque corrupti, quos dolores et quas molestias exceptur.
                        </p>
                    </div>
                </div>
                <div className='flex ligne'>
                    <div className='flex'>
                        <i className="ti-more"></i>
                        <h3 className='sous-title'>Experience</h3>
                    </div>
                    <div className='box'>
                        <p className='univ'>club skikda i-tech</p>
                        <div>
                            <span className='year'>2022 — 2023</span>
                            <span className='failed'>secritary general</span>
                        </div>
                        <p className='description'>
                            Nemo enims ipsam voluptatem, blanditiis praesentium voluptum
                            delenit atque corrupti, quos dolores et quas molestias exceptur.
                        </p>
                    </div>
                    <div className='box'>
                        <p className='univ'>Eco mind club</p>
                        <div>
                            <span className='year'>2023 — 2024</span>
                            <span className='failed'>secientific research</span>
                        </div>
                        <p className='description'>
                            Nemo enims ipsam voluptatem, blanditiis praesentium voluptum
                            delenit atque corrupti, quos dolores et quas molestias exceptur.
                        </p>
                    </div>
                </div>
                <h3 className='sous-title'>my skills</h3>
                <div className='skills'>
                    <Circle value='55' name='java'/>
                    <Circle value='75' name='javaScript'/>
                    <Circle value='80' name='css'/>
                    <Circle value='85' name='html'/>
                    <Circle value='80' name='boostrap'/>
                    <Circle value='60' name='sass'/>
                </div>
                <h3 className='sous-title'>tools</h3>
                <div className='tools'>
                    <Circle value='50' name='github'/>
                    <Circle value='60' name='Studio Code'/>
                    <Circle value='70' name='google tools'/>
                </div>
                <h3 className='sous-title'>language</h3>
                <div className='language flex'>
                    <div className='box'>
                        <div>
                            <span>arabic</span>
                            <span>100%</span>
                        </div>
                        <div className='percentage'>
                            <div style={{width:'100%'}}></div>
                        </div>
                    </div>
                    <div className='box'>
                        <div>
                            <span>english</span>
                            <span>60%</span>
                        </div>
                        <div className='percentage'>
                            <div style={{width:'60%'}}></div>
                        </div>
                    </div>
                    <div className='box'>
                        <div>
                            <span>frensh</span>
                            <span>40%</span>
                        </div>
                        <div className='percentage'>
                            <div style={{width:'40%'}}></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ResumePortfolio;
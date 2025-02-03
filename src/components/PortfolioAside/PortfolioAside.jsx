import React, { useState } from 'react'
import './PortfolioAside.css';
import HomePortfolio from '../HomePortfolio/HomePortfolio';
import ResumePortfolio from '../ResumePortfolio/ResumePortfolio';
import PortfolioPortfolio from '../PortfolioPortfolio/PortfolioPortfolio';
import BlogPortfolio from '../BlogPortfolio/BlogPortfolio';
import ConcatPortfolio from '../ConcatPortfolio/ConcatPortfolio';
//https://www.linkedin.com/developers/apps/verification/7e094f11-677e-4543-bf33-da3bf8e69aa4
export const PortfolioAside = () => {
    let [namePage, setNamePage] = useState('About Me');
    let navLink = (element) => {
        let nav = document.querySelectorAll("#navAside button");
        setNamePage(element.target.innerText);
        nav.forEach(e => {
            e.className = '';
        });
        element.target.className='active';
    }
    return (
        <>
            <nav className='navAside flex' id='navAside'>
                <button onClick={e => {navLink(e)}} className='active'>about me</button>
                <button onClick={e => {navLink(e)}}>resume</button>
                <button onClick={e => {navLink(e)}}>portfolio</button>
                <button onClick={e => {navLink(e)}}>blog</button>
                <button onClick={e => {navLink(e)}}>contact</button>
            </nav>
            <header>
                <h2 className='title-portfolio'>{namePage}</h2>
            </header>
            {namePage==='About Me'?<HomePortfolio/>:''}
            {namePage==='Resume'?<ResumePortfolio/>:''}
            {namePage==='Portfolio'?<PortfolioPortfolio/>:''}
            {namePage==='Blog'?<BlogPortfolio/>:''}
            {namePage==='Contact'?<ConcatPortfolio/>:''}
        </>
    )
}

export default PortfolioAside;
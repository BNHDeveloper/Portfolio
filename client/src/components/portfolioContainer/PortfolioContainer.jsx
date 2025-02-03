import React from 'react'
import './PortfolioContainer.css';
import PortfolioNav from '../PortfolioNavSide/PortfolioNavSide.jsx';
import PortfolioAside from '../PortfolioAside/PortfolioAside.jsx';

export const PortfolioContainer = () => {
    return (
        <div id='portfolio'>
            <div className='container flex'>
                <nav className='nav br-r10 bg-b'><PortfolioNav/></nav>
                <aside className='br-r10 bg-b' id='asidePortfolio'><PortfolioAside/></aside>
            </div>
        </div>
    )
}

export default PortfolioContainer;
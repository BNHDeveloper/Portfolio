import React, { useState } from 'react'
import './PortfolioPortfolio.css';

export const PortfolioPortfolio = () => {
    let [category, setCategory] = useState('All'),
        project = [{ name: 'nour', category: 'web development', image: require('../../asset/project1.jpg') },
        { name: 'houda', category: 'web development', image: require('../../asset/project2.jpg') },
        { name: 'arabic', category: 'challange', image: require('../../asset/project3.jpg') },
        { name: 'store', category: 'project', image: require('../../asset/project4.jpg') },
        { name: 'zara', category: 'project', image: require('../../asset/project5.jpg') },
    ],
        activeFilter = (e) => {
        !e.target.className ? e.target.className = 'active' : e.target.className = '';
    }
    let activeNavFilter = (e, category) => {
        let liFilter = document.querySelectorAll('.Portfolio ul li button');
        liFilter.forEach(e => {e.className='' });
        setCategory(category);
        !e.target.className ? e.target.className = 'active' : e.target.className = '';
    }
    return (
        <div className='Portfolio'>
            <div className='filter'>
                <button className='' onClick={(e)=>activeFilter(e)}>{category}</button>
                <ul className='flex'>
                    <li><button onClick={(element)=>activeNavFilter(element,'All')} className='active'>All</button></li>
                    <li><button onClick={(element)=>activeNavFilter(element,'web development')}>web development</button></li>
                    <li><button onClick={(element)=>activeNavFilter(element,'project')}>project</button></li>
                    <li><button onClick={(element)=>activeNavFilter(element,'challange')}>challange</button></li>
                </ul>
            </div>
            <div className='flex work'>
                {category === 'All' ? project.map((e,index) => {
                    return (
                    <div className='box' key={index}>
                        <div className='image'>
                            <img src={e.image} alt={e.name} />
                        </div>
                        <div>
                            <span>{e.name}</span>
                            <span>{e.category}</span>
                        </div>
                    </div>
                    )
                }): ''}
                {category === 'web development' ?project.map((e,index) => {
                    return e.category === 'web development' ?
                        <div className='box' key={index}>
                            <div className='image'>
                                <img src={e.image} alt={e.name} />
                            </div>
                            <div>
                                <span>{e.name}</span>
                                <span>{e.category}</span>
                            </div>
                        </div> : '';
                }) : ''}
                {category === 'project'? project.map((e,index) => {
                    return e.category === 'project' ?
                        <div className='box' key={index}>
                            <div className='image'>
                                <img src={e.image} alt={e.name} />
                            </div>
                            <div>
                                <span>{e.name}</span>
                                <span>{e.category}</span>
                            </div>
                        </div> : '';
                }): ''}
                {category === 'challange' ?project.map((e,index) => {
                    return e.category === 'challange' ?
                        <div className='box' key={index}>
                            <div className='image'>
                                <img src={e.image} alt={e.name} />
                            </div>
                            <div>
                                <span>{e.name}</span>
                                <span>{e.category}</span>
                            </div>
                        </div> : '';
                }):''}
            </div>
        </div>
    )
}
export default PortfolioPortfolio;

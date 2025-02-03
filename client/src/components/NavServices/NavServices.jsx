import React, { useState } from 'react'
import './NavService.css'
import img from '../../static/logo template.svg'
import { Link } from 'react-router-dom'

export const NavServices = (props) => {
    let [navShow, setNavShow] = useState(false);
    return (
        <nav className={navShow?'active':''}>
            <div className='nav services'>
                <div className="logo flex">
                    <a href='/'><img src={img} alt="logo"/></a>
                    <span>easy learn</span>
                </div>
                <ul>
                    <li className={props.page === "cours" ? "active" : ''}>
                        <Link to='/cours' className="social-item" href="/cours">cours</Link>
                    </li>
                    <li className={props.page === "programmes" ? "active" : ''}>
                        <Link to='/programmes' className="social-item" href="/programmes">programmes</Link>
                    </li>                
                    <li className={props.page==="consultive"?"active":''}>
                        <Link to='/consultive' className="social-item" href="/consultive">consultive</Link>
                    </li>
                    <li className={props.page==="formation"?"active":''}>
                        <Link to='/formation' className="social-item" href="/formation">
                                formation online
                        </Link>
                    </li>
                    <li className={props.page==="books"?"active":''}>
                        <Link to='/books' className="social-item" href="/books">
                                books
                        </Link>
                    </li>
                    <li className={props.page==="review"?"active":''}>
                        <Link to='/review' className="social-item" href="/review">
                                review code
                        </Link>
                    </li>
                </ul>
                <button onClick={()=>setNavShow(!navShow)}>
                    <i className="ti-arrow-right"></i>
                </button>
            </div>
        </nav>
    )
}
export default NavServices;
import React, { useState } from 'react'
import "./navDashboard.css"
import img from '../../static/logo template.svg'
import { Link } from 'react-router-dom'

export const NavDashboard  = (props) => {
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
                        <Link to={props.admin === true ?'/login/dashboard/cours':'/cours'} className="social-item" href="/cours">cours</Link>
                    </li>
                    <li className={props.page === "programmes" ? "active" : ''}>
                        <Link to='/login/dashboard/programmes' className="social-item" href="/programmes">programmes</Link>
                    </li>                
                    <li className={props.page==="consultive"?"active":''}>
                        <Link to={props.admin === true ?'/login/dashboard/consultive':'/consultive'} className="social-item" href="/consultive">consultive</Link>
                    </li>
                    <li className={props.page==="formation"?"active":''}>
                        <Link to={props.admin === true ?'/login/dashboard/formationOnlin':'/formation'} className="social-item" href="/formationOnlin">
                            formation online
                        </Link>
                    </li>
                    <li className={props.page==="books"?"active":''}>
                        <Link to={props.admin === true ?'/login/dashboard/books':'/books'} className="social-item" href="/books">
                                books
                        </Link>
                    </li>
                    <li className={props.page==="review"?"active":''}>
                        <Link to={props.admin === true ?'/login/dashboard/review':'/review'} className="social-item" href="/ReviewCode">
                                review code
                        </Link>
                    </li>
                    {props.admin === true ?
                        <li className={props.page === "users" ? "active" : ''}>
                            <Link to='/login/dashboard/users' className="social-item" href="/ReviewCode">
                                users
                            </Link>
                        </li> : ''}
                </ul>
                <button onClick={()=>setNavShow(!navShow)}>
                    <i className="ti-arrow-right"></i>
                </button>
                {props.admin === true ?<a className='logout' href='http://localhost:8800/logout/'>logout</a>:""}
            </div>
        </nav>
    )
}
export default NavDashboard ;
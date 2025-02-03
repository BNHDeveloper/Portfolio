import "../../roles/GlobalRoles.css";
import "./home.css";
import down from '../../static/scroll.gif';
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="section home">
            <div className="container home" id="home">
                <div className="content">
                    <h1>
                        discover with us our
                    </h1>
                    <p>
                        <span className="one">services</span>
                    </p>
                    <div className="components">
                        <Link to="/portfolio"><button>about me</button></Link>
                        <Link to="/cours"><button className="cv">cours</button></Link>
                    </div>
                    <div className="socials">
                        <a className="social-item" href="https://www.facebook.com/profile.php?id=100094468737676"><i className="ti-facebook"></i></a>
                        <a className="social-item" href="https://www.instagram.com/easy_code_dz/"><i className="ti-instagram"></i></a>
                        <a className="social-item" href="https://github.com/BNHDeveloper"><i className="ti-github"></i></a>
                        <a className="social-item" href="https://www.linkedin.com/in/boumelha-nour-el-houda/"><i className="ti-linkedin"></i></a>
                        <a className="social-item" href="mailto:boumelhanourelhouda@gmail.com"><i className="ti-email"></i></a>
                    </div>
                </div>
                <div className="image"></div>
                <div className="down">
                    <a href="/#welcome"><img src={down} alt="down"/></a>
                </div>
            </div>
        </div>
    )
}

export default Home
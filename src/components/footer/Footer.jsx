import React from 'react'
import './footer.css';
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='flex'>
                    <span>easy Learn</span>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Voluptas accusamus culpa, voluptatibus
                        cupiditate quia eaque, neque mollitia id,
                    </p>
                </div>
                <div className='flex'>
                    <span>contact</span>
                    <ul>
                        <li><a href="mailto:boumelhanourelhouda@gmail.com">boumelhanourelhouda@gmail.com</a></li>
                        <li>+2130796946666</li>
                        <li><a href="https://www.linkedin.com/in/boumelha-nour-el-houda/">linked in</a></li>
                        <li><a href="https://www.instagram.com/easy_code_dz/">instagram</a></li>
                    </ul>
                </div>
                <div className='flex'>
                    <span>links</span>
                    <ul>
                        <li><Link to='/cours'>cours</Link></li>
                        <li><Link to='/books'>books</Link></li>
                        <li><Link to='/programmes'>programmes</Link></li>
                        <li><Link to='/Consultive'>Consultive</Link></li>
                    </ul>
                </div>
            </div>
            <div className='copyRight flex'>
                <p>Copyright &copy; {new Date().getFullYear()} easyCodeDz</p>
                <div className="socials">
                    <a className="social-item" href="https://www.facebook.com/profile.php?id=100094468737676"><i className="ti-facebook"></i></a>
                    <a className="social-item" href="https://www.instagram.com/easy_code_dz/"><i className="ti-instagram"></i></a>
                    <a className="social-item" href="https://github.com/BNHDeveloper"><i className="ti-github"></i></a>
                    <a className="social-item" href="https://www.linkedin.com/in/boumelha-nour-el-houda/"><i className="ti-linkedin"></i></a>
                    <a className="social-item" href="mailto:boumelhanourelhouda@gmail.com"><i className="ti-email"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Footer;
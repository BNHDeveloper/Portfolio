import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
    return (<div className="section services">
        <h1 className="title" id='service'>
            our services
        </h1>
        <div className='services container'>
                <div className='box'>
                    <Link to='/cours' className="social-item" href="/cours"><i className="ti-bag"></i></Link>
                    <span>cours</span>
                </div>
                <div className='box'>
                    <Link to='/programmes' className="social-item" href="/programmes"><i className="ti-layout"></i></Link> 
                    <span>programmes</span>
                </div>
                <div className='box'>
                    <Link to='/consultive' className="social-item" href="/consultive"><i className="ti-help"></i></Link>
                    <span>consultive</span>
                </div>
                <div className='box'>
                    <Link to='/formation' className="social-item" href="/formationOnline"><i className="ti-comments"></i></Link>
                    <span>formation online</span>
                </div>
                <div className='box'>
                    <Link to='/books' className="social-item" href="/books"><i className="ti-book"></i></Link>
                    <span>books</span>
                </div>
                <div className='box'>
                    <Link to='/Review' className="social-item" href="/reviewCode"><i className="ti-eye"></i></Link>
                    <span>Review Code</span>
                </div>
        </div>
    </div>
    );
}

export default Services;

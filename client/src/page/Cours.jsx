import React from 'react'
import NavServices from '../components/NavServices/NavServices';
import Filter from '../components/filter/filter';
import CoursBox from '../components/coursBox/CoursBox';

export const Cours = () => {
    return (
        <div id='services' className='container'>
            <NavServices page={'cours'} />
            <Filter />
            <CoursBox/>
        </div>
    )
}

export default Cours;
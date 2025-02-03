import React from 'react'
import NavServices from '../components/NavServices/NavServices';
import ProgrammesBox from '../components/ProgrammesBox/ProgrammesBox';

export const Programmes = () => {
    return (
        <div id='services' className='container'>
            <NavServices page={'programmes'} />
            <div>
                <ProgrammesBox/>
            </div>
        </div>
    )
}

export default Programmes;
import React from 'react'
import NavServices from '../components/NavServices/NavServices';
import BoxConsultive from '../components/BoxConsultive/BoxConsultive';

export const Consultive = () => {
    return (
        <div id='services' className='container'>
            <NavServices page={'consultive'} />
            <h1 className='serviceTitle'>consultive</h1>
            <BoxConsultive/>
        </div>
    )
}

export default Consultive;
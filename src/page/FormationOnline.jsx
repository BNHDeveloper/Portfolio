import React from 'react'
import NavServices from '../components/NavServices/NavServices';
import BoxFormation from '../components/boxFormation/BoxFormation';

export const FormationOnline = () => {
    return (
        <div id='services' className='container'>
            <NavServices page={'formation'} />
            <h1 className='serviceTitle'>formation</h1>
            <BoxFormation/>
        </div>
    )
}

export default FormationOnline;
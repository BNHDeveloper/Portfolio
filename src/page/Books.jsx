import React from 'react'
import NavServices from '../components/NavServices/NavServices';
import BoxBooks from '../components/boxBooks/BoxBooks';

export const Books = () => {
    return (
        <div id='services' className='container'>
            <NavServices page={'books'} />
            <h1 className='serviceTitle'>books</h1>
            <BoxBooks/>
        </div>
    )
}

export default Books;
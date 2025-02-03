import React from 'react'
import NavServices from '../components/NavServices/NavServices';
import BoxReview from '../components/boxReview/BoxReview';

export const ReviewCode = () => {
    return (
        <div id='services' className='container'>
            <NavServices page={'review'} />
            <h1 className='serviceTitle'>review</h1>
            <BoxReview/>
        </div>
    )
}

export default ReviewCode;
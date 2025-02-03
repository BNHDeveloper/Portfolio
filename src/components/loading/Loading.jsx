import React from 'react'
import './loading.css'
import loading from '../../static/load.gif'

const Loading = () => {
    return (
        <>
        <div className='loading'></div>
        <img src={loading} alt="loading" />
        </>
    )
}

export default Loading
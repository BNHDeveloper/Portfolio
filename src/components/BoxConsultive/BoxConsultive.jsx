import React from 'react'
import "./BoxConsultive.css"
import useFetch from '../../hooks/useFetch';
import Loading from '../loading/Loading';

const BoxConsultive = () => {
    const { data, loading, error } = useFetch("http://localhost:8800/api/consultive/");
    return (
        <div className='list'>
            {loading && !error?
                <Loading/> :
                data.map((element, key) => {
                return <div className='box h-6' key={key}>
                        <div className="image">
                        <img src={require(`../../../../api/uploads/consultive/${element.photo}`)} alt="" />
                        </div>
                        <div className='content'>
                            <span><b>titl : </b>{element.title}</span>
                            <span><b>author : </b>{element.author}</span>
                            <span><b>hour : </b>{element.hour} h</span>
                            <span><b>price : </b>{element.price==="0"?<span className={element.price==="free"?"free":""}>free</span>:element.price+" $"}</span>
                            <span>
                                <b>type : </b>
                            <span className='mr-5'>{ element?.type }</span>
                            </span>
                        </div>
                        <div className='flex'>
                        <button className='order br-r5'>order now</button>
                        <a href={`/Consultive/${element._id}`}> <button className='read br-r5'>read more</button>  </a>
                        </div>
                </div>;
            })
            }
        </div>
    )
}

export default BoxConsultive
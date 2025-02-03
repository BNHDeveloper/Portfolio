import React from 'react'
import "./boxReview.css"
import useFetch from '../../hooks/useFetch';
import Loading from '../loading/Loading';

const BoxReview = () => {
    const { data, loading, error } = useFetch("http://localhost:8800/api/review/");
    return (
        <div className='list'>
            {loading && !error?
                <Loading/> :
                data.map((element, key) => {
                return <div className='box' key={key}>
                        <div className="image">
                        <img src={require(`../../../../api/uploads/review/${element.photo}`)} alt="" />
                        </div>
                        <div className='content'>
                            <span><b>title : </b>{element.title}</span>
                            <span><b>author : </b>{element.author}</span>
                            <span><b>type : </b>{element.type}</span>
                            <span><b>price : </b>{element.price==="free"?<span className={element.price==="free"?"free":""}>free</span>:element.price+" $"}</span>
                        </div>
                        <div className='flex'>
                            <button className='order br-r5'>send now</button>
                            <a href={`/review/${element._id}`}><button className='read br-r5'>read more</button></a>     
                        </div>
                </div>;
            })
            }
        </div>
    )
}

export default BoxReview
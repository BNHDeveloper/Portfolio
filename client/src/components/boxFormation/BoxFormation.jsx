import React from 'react'
import "./boxFormation.css"
import useFetch from '../../hooks/useFetch';
import Loading from '../loading/Loading';

const BoxFormation = () => {
    const { data, loading, error } = useFetch("http://localhost:8800/api/formation/");
    return (
        <div className='list'>
            {loading && !error?
                <Loading/> :
                data.map((element, key) => {
                return <div className='box' key={key}>
                        <div className="image">
                        <img src={require(`../../../../api/uploads/formation/${element.photo}`)} alt="" />
                        </div>
                        <div className='content'>
                            <span><b>titl : </b>{element.title}</span>
                            <span><b>formateur : </b>{element.author}</span>
                            <span><b>hour : </b>{element.date} h</span>
                            <span><b>price : </b>{element.price==="free"?<span className={element.price==="free"?"free":""}>free</span>:element.price+" $"}</span>
                        </div>
                        <div className='flex'>
                            <button className='order br-r5'>join now</button>
                            <a href={`/formation/${element._id}`}> <button className='read br-r5'>read more</button>  </a>   
                        </div>
                </div>;
            })
            }
        </div>
    )
}

export default BoxFormation
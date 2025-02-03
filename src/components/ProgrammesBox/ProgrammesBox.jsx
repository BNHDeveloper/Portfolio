import React from 'react'
import "./ProgrammesBox.css"
import useFetch from '../../hooks/useFetch';
import Loading from '../loading/Loading';

const ProgrammesBox = () => {
    const { data, loading, error } = useFetch("http://localhost:8800/api/programmes/");
    return (
        <>
            <h1 className='serviceTitle'>Programmes</h1>
            <div className='list'>
            {loading && !error?
                <Loading/> :
                data?.map((element, key) => {
                return <div className='box' key={key}>
                        <div className="image">
                        <img src={require(`../../../../api/uploads/programmes/${element.photo}`)} alt="" />
                        </div>
                        <div className='content'>
                            <span><b>titl :</b> {element.title}</span>
                            <span><b>author : </b> {element.author}</span>
                            <span>
                                <b>language : </b>
                                {element.language}
                            </span>
                            <span><b>price : </b>{element.price==="0"?<span className={element.price==="free"?"free":""}>free</span>:element.price+" $"}</span>
                        </div>
                        <div className='flex'>
                            <button className='order br-r5'>order now</button>
                            <a href={`/programmes/${element._id}`}><button className='read br-r5'>read more</button></a>    
                        </div>
                </div>;
            })
            }
            </div>
        </>
    )
}

export default ProgrammesBox
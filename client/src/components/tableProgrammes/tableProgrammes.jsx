import React, { useState } from 'react'
import AddService from '../AddService/AddService';
import useFetch from '../../hooks/useFetch';
import Loading from '../loading/Loading';
import DeleteServiceItem from '../DeleteServiceItem/DeleteServiceItem';

const TableProgrammes = (props) => {
    const { data, loading, error } = useFetch("http://localhost:8800/api/programmes/");
    let [add, setAdd] = useState(false);
    const handleAdd = (data) =>{
        setAdd(data);
    }
    let [deleteItem, setDeleteItem] = useState(false);
    const handleDelete = (data) =>{
        setDeleteItem(data);
    }
    return (
        <div className='dashboard mr-5'> 
            <h1 className='serviceTitle'>{props.page}</h1>
            {add ? <AddService page={props.page} setAdd={handleAdd} close={true}/>:''}
            <div className="action">
                <i className="ti-plus" onClick={e=>setAdd(true)}></i>
                <i className="ti-trash"></i>
            </div>
            <div className='list'>
            {loading && !error?
                <Loading/> :
                data?.map((element, key) => {
                return <div className='box' key={key}>
                        <div className="image">
                        <img src={require(`../../../../api/uploads/programmes/${element.photo}`)} alt="" />
                        </div>
                        <div className='content'>
                            <span><b>title : </b>{element.title}</span>
                            <span><b>author : </b>{element.author}</span>
                            <span><b>price : </b>{element.price==="free"?<span className={element.price==="free"?"free":""}>free</span>:element.price+" $"}</span>
                        </div>
                        <div className='flex'>
                            {deleteItem ? <DeleteServiceItem page={props.page} setDelete={handleDelete} id={element._id} close={true}/>:<button className='order br-r5' onClick={()=>setDeleteItem(!deleteItem)}>delete</button>}
                            <a href={`/login/dashboard/programmes/uppdate/${element._id}`}><button className='read br-r5'>uppdate</button></a>    
                        </div>
                </div>;
            })
            }
            </div>
        </div>
    )
}

export default TableProgrammes
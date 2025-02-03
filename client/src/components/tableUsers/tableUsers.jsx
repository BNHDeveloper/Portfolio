import React, { useState } from 'react'
import AddService from '../AddService/AddService';
import useFetch from '../../hooks/useFetch';
import Loading from '../loading/Loading';
import DeleteServiceItem from '../DeleteServiceItem/DeleteServiceItem';

const TableUsers = (props) => {
    const { data, loading, error } = useFetch("http://localhost:8800/api/users/");
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
            <h1 className='serviceTitle'>users</h1>
            {add ? <AddService page={props.page} setAdd={handleAdd} register={props.register}  close={true}/>:''}
            <div className="action">
                <i className="ti-plus" onClick={()=>setAdd(true)}></i>
                <i className="ti-trash"></i>
            </div>
            <div className='list users'>
            {loading && !error?
                <Loading/> :
                data?.map((element, key) => {
                return <div className='box' key={key}>
                        <div className='content'>
                            <span><b>user name : </b>{element.userName}</span>
                            <span><b>email : </b>{element.email}</span>
                            <span><b>admin : </b>{element.isAdmin?"true":"false"}</span>
                        </div>
                        <div className='flex'>
                            {deleteItem ? <DeleteServiceItem page={props.page} setDelete={handleDelete} id={element._id} close={true}/>:<button className='order br-r5' onClick={()=>setDeleteItem(!deleteItem)}>delete</button>}
                            <a href={`/login/dashboard/users/uppdate/${element._id}`}><button className='read br-r5'>uppdate</button></a>    
                        </div>
                </div>;
            })
            }
            </div>
        </div>
    )
}

export default TableUsers
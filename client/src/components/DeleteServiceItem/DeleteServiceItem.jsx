import React from 'react';
import "./DeleteServiceItem.css";
import axios from 'axios';

export const DeleteServiceItem = (props) => {
    const handlChange = () => {
        props?.setDelete(false)
    }
    const handleSubmit = () => {
        //`http://localhost:8800/api/${props.page}/delete/${props.id}`
        axios.delete(`http://localhost:8800/api/${props.page}/delete/${props.id}`,{ headers: { 'Content-Type': 'application/json' } })
            .then(data => { console.log(data); handlChange() })
            .catch(err => { console.log(err)})
    }
    return (
        <div className='wrapping deleteForm'>
            <div className='form'>
                <form className="FormFields" onSubmit={handleSubmit}>
                    {props?.close === true && <i className="ti-close" onClick={handlChange}></i>}
                    <div className='fill'><i className='ti-check' ></i></div>
                    <div className='flex'>
                        <input type="submit" name="send" value="delete" className='delete'/>
                        <input type="button"  value="cancel" onClick={handlChange} className='cancel'/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default DeleteServiceItem;

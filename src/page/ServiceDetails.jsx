import React, { useState } from 'react'
import useFetch from '../hooks/useFetch';
import { useParams } from 'react-router-dom';
import Loading from '../components/loading/Loading';
import axios from 'axios'
import NavDashboard from '../components/NavDashboard/NavDashboard';

const ServiceDetails = (props) => {
    let params = useParams();
    const { data, loading, error } = useFetch(`http://localhost:8800/api/${props.page}/${params.id}`);
    let [name, setName] = useState(data.author||data.userName),
        [price, setPrice] = useState(data.price),
        [hour, setHour] = useState(data.hour),
        [title, setTitle] = useState(data.title),
        [email, setEmail] = useState(data.email),
        [desc, setDesc] = useState(data.desc),
        [type, setType] = useState(data.type),
        [photo, setPhoto] = useState(data.photo),
        [admin, setAdmin] = useState(data.isAdmin),
        [password, setPassword] = useState(data.password),
        [language, setLanguage] = useState(data.language);
    let handleSubmit = (e) => {
        e.preventDefault();
        setName(!name?data.author:name);
        setHour(!hour?data.hour:hour);
        setPrice(price?price:data.price);
        setTitle(title?title:data.title);
        setEmail(email?email:data.email);
        setDesc(desc?desc:data.desc);
        setType(type?type:data.type);
        setAdmin(admin?admin:data.isAdmin);
        setPassword(password?password:data.password);
        setPhoto(photo?photo:data.photo);
        setLanguage(language?language:data.language);
        let dataSend = photo !== data?.photo ? { author:name, price, hour, title, desc, type, language,userName:name,isAdmin:admin, photo } : { author:name, userName:name, price, hour, title, desc, type, language,isAdmin:admin };
        axios.put(`http://localhost:8800/api/${props.page}/${params.id}`, dataSend, { headers: { 'Content-Type': 'application/json' } })
            .then(data => { console.log(data) })
            .catch(err => { console.log(err)})
    }
    return (
        <div id='services' className='container'>
            <NavDashboard page={props.page} admin={props.admin}/>
            <form className="FormFields uppdate" onSubmit={e=>handleSubmit(e)} encType="multipart/form-data" action={`http://localhost:8800/api/${props.page}/${params.id}`}>
            {props.page!=="users"&& data.title && props.action!=="uppdate" ?<h1 className='serviceTitle'>{data.title}</h1>:props.page!=="users"&& props.action==="uppdate"?<h1 className='serviceTitle uppdatePage'><input type="text" className='uppdate title' defaultValue={data?.title} onChange={e=>setTitle(e.target.value)}/></h1>:""}
            {loading && !error?
                <Loading/> :
                <>
                <div className="image details">
                    {props.page!=="users"&& data.photo&&<img src={require(`../../../api/uploads/${props.page}/${data.photo}`)} alt="" />}
                </div>
                    {props.page==="users"&& data.userName && props.action!=="uppdate" ? <div><b>userName</b> : {data?.userName}</div>:props.page==="users"&& props.action==="uppdate"?<div><b>userName</b> : <input type="text" name='userName' className='uppdate' defaultValue={data?.userName} onChange={e=>setName(e.target.value)}/></div>:""}
                    {props.page==="users"&& data.email && props.action!=="uppdate" ? <div><b>email</b> : {data?.email}</div>:props.page==="users"&& props.action==="uppdate"?<div><b>email</b> : <input type="text"className='uppdate' name="email" defaultValue={data?.email} onChange={e=>setEmail(e.target.value)}/></div>:""}
                    {props.page==="users"&& props.action==="uppdate"?<div><b>Admin</b> : <input type="text"className='uppdate' defaultValue={data?.isAdmin} onChange={e=>setAdmin(e.target.value)}/></div>:""}
                <div className='flex details'>
                    {props.page!=="users"&& data.price && props.action!=="uppdate" ? <div><b>price</b> : {data?.price}</div>:props.page!=="users"&& props.action==="uppdate"?<div><b>price</b> : <input type="number" name='title' className='uppdate' defaultValue={data?.price} onChange={e=>setPrice(e.target.value)}/></div>:""}
                    {props.page!=="users"&& data.author && props.action!=="uppdate" ? <div><b>author</b> : {data?.author}</div>:props.page!=="users"&& props.action==="uppdate"?<div><b>author</b> : <input type="text"className='uppdate' name="author" defaultValue={data?.author} onChange={e=>setName(e.target.value)}/></div>:""}
                </div>
                <div className='flex details'>
                    {data.hour && props.page!=="users" && props.action!=="uppdate" ? <div><b>hour</b> : {data?.hour}</div>:data.hour && props.page!=="users" && props.action==="uppdate"?<div><b>hour</b> : <input type="number" name='hour' className='uppdate' defaultValue={data?.hour} onChange={e=>setHour(e.target.value)}/></div>:""}
                    {data.language && props.page!=="users" && props.action!=="uppdate" ? <div><b>language</b> : {data?.language}</div>:data.language && props.page!=="users" && props.action==="uppdate"?<div><b>language</b> : <input type="text" name='language' className='uppdate' defaultValue={data?.language} onChange={e=>setLanguage(e.target.value)}/></div>:""}
                    {data.type && props.page!=="users" && props.action!=="uppdate" ? <div><b>type</b> : {data?.type}</div>:data.type && props.page!=="users" && props.action==="uppdate"?<div><b>type</b> : <input type="text" className='uppdate' name='type' defaultValue={data?.type} onChange={e=>setType(e.target.value)}/></div>:""}
                </div>
                {data.desc && props.page!=="users" && props.action!=="uppdate" ? <div>{data?.desc}</div>:props.page!=="users"&& props.action==="uppdate"?<textarea desc="text" name='desc' className='uppdate' onChange={e=>setDesc(e.target.value)}>{data?.desc}</textarea>:""}
                </>}
                {props.action==="uppdate"?<input type="submit" name="uppdate" value="uppdate" className='submit br-r5'/>:""}    
                </form>
        </div>
    )
}

export default ServiceDetails
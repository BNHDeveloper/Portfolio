import React from 'react'
import "./AddService.css"

const AddService = (props) => {
    const handlChange = () => {
        props?.setAdd(false)
    }
    return (
        <div className='wrapping addForm'>
            <div className='form'>
                <form className="FormFields" method="POST" action={props.page!=='users'?`http://localhost:8800/api/${props.page}/`:props?.close===true?`http://localhost:8800/register/`:`http://localhost:8800/login/`} encType="multipart/form-data">
                    {props?.close===true &&<i className="ti-close" onClick={handlChange}></i>}
                    {props.page==='users'&&
                    <div className="FormField">
                        <label htmlFor="name">Username</label>
                        <input type="text" id="name" placeholder="Enter your username" name="userName"/>
                    </div>}
                    {props.page==='users'&&
                    <div className="FormField">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" placeholder="Enter your password" name="password"/>
                    </div>}
                    {props.page==='users'&& props.register===true&&
                    <div className="FormField">
                        <label htmlFor="email">E-Mail Address</label>
                        <input type="email" id="email" placeholder="Enter your email" name="email"/>
                    </div>}
                    {props.page!=="users"&&
                    <div className="FormField">
                        <label htmlFor="title">title</label>
                        <input type="text" id="title" placeholder="Enter your title" name="title"/>
                    </div>}
                    {props.page!=="users"&&
                    <div className="FormField">
                        <label htmlFor="author">author</label>
                        <input type="text" id="author" placeholder="Enter your author" name="author"/>
                    </div>}
                    {props.page!=="users"&&
                    <div className="FormField">
                        <label htmlFor="price">price</label>
                        <input type="number" id="price" placeholder="Enter your price" name="price"/>
                    </div>    
                    }
                    {props.page!=="users"&&props.page!=="books"&&props.page!=="review"&&props.page!=="programmes"&&
                    <div className="FormField">
                        <label htmlFor="hour">hour</label>
                        <input type="number" id="hour" placeholder="Enter your hour" name="hour" />
                    </div>}
                    {props.page === "programmes" &&
                    <div className="FormField">
                        <label htmlFor="language">language</label>
                        <input type="text" id="language" placeholder="Enter your language" name="language"/>
                    </div>}
                    {(props.page ==="review" || props.page === "consultive") &&
                    <div className="FormField">
                        <label htmlFor="type">type</label>
                        <input type="text" id="type" placeholder="Enter your type" name="type" />
                    </div>}
                    {props.page !== "users" &&
                    <div className="FormField flex">
                            <input type="file" name="file" />
                    </div>}
                    {props.page!=="users"&&
                    <div className="FormField">
                        <label htmlFor="desc">description</label>
                        <textarea  id="desc" placeholder="Enter your desc" name="desc" />
                    </div>}
                    <input type="submit" name="send" value="send" />
                </form>
            </div>
        </div>
    )
}

export default AddService

/*

    let handleSubmit = async () => {
        console.log(file)
        // collectData()
    }
    let collectData = async (e) => {
        e.preventDefault();
        data.userName = userName?userName:'';
        data.password = password?password:'';
        data.email = email?email:'';
        data.title = title?title:'';
        data.price = price?price:0;
        data.desc = desc?desc:'';
        data.author = author?author:'';
        data.hour = hour ? hour : 0;
        data.language = language ? language : '';
        // data.photo = photo ? photo : '';
        // console.log(photo)
        if(props.page === "consultive") {
            if(typeMsg && typeVoice) {
                data.type = ["msg", "voice"];
            } else if(typeMsg){
                data.type = ["msg"];
            } else if(typeVoice){
                data.type = ["voice"];
            } else {
                data.type = [];
            }
            setTypeMsg(false);
            setTypeVoice(false);
        }else if(props.page === "review") {
            data.type = type;
        }
        // fetchDataPost(data);
    }
    const fetchDataPost = async (data) => {
        console.log(file)
        if(props.page !== 'users') {
            console.log(data);
            await axios.post(`http://localhost:8800/api/${props.page}`,data, { headers: { 'Content-Type': 'application/json' } })
            .then(data => { console.log(data) })
            .catch(err => { console.log(err.response.data)});
            } else {
                if(email !== '') {
                        await axios.post(`http://localhost:8800/api/register`,data)
                        .then(data => { console.log(data) })
                        .catch(err => { console.log(err)});
                    } else {
                        await axios.post(`http://localhost:8800/api/login`, data)
                            .then(data => {
                                console.log(data);
                            })
                        .catch(err => { console.log(err)});
                    }
                }
    }

*/
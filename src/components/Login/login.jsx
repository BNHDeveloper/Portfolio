import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import AddService from '../AddService/AddService';

const Login = () => {
    const navigate = useNavigate();
    // useEffect(() => {
    //     async function autoLogin() {
    //         let response = null;
    //         try {
    //             response = await fetch("http://localhost:8800/authoLogin/", {
    //             method: "GET",
    //             credentials: 'include'
    //         });
    //         } catch (error) {
    //             console.log(error.message);
    //         }
    //         if(response?.status === 200) {
    //             localStorage.setItem("token-info", JSON.stringify(true));
    //             navigate("/login/dashboard/books");
    //         } else {
    //             navigate("/login");
    //         }
    //     }
    //     autoLogin();
    // });
    return (
        <AddService page="users" close={false}/>   
    )
}

export default Login;
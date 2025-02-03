// import React, { Fragment, useState } from 'react'
import './Upload.css'
// import axios from 'axios';

const Upload = () => {
    // let [file, setFile] = useState();
    // let [fileName, setFileName] = useState();
    // let [fileUpload, setFileUpload] = useState();
    // let handleChange = e => {
    //     setFile(e.target.files[0]);
    //     setFileName(e.target.files[0].name)
    //     console.log(e.target.files[0])
    //     console.log(file)
    //     console.log(fileName)
    // }
    // let handleSubmit = async e => {
    //     e.preveltDefault();
    //     const formData = new FormData();
    //     formData.append('file', file);
    //     try {
    //         const res = await axios.post('http://localhost:8800/api/upload', formData,
    //             { headers: { 'Content-Type': 'multipart/form-data' } });
    //         const {fileName,filePath} = res.data;
    //         setFileUpload({ fileName, filePath })
    //         console.log(fileUpload);
    //     } catch (error) {
    //         console.log(error.response);
    //     }
    // }
    //method="post" encType="multipart/form-data" onSubmit={handleSubmit}
    return (
        <>
            you are not authorized to see this page
        </>
        // <form action='http://localhost:8800/upload/' method='post' encType="multipart/form-data">
        //     <input type="file" name="file" onChange={handleChange} required/>
        //     <button type="submit">upload</button>
        // </form>
    )
}

export default Upload
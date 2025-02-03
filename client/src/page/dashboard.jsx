import React, { useEffect } from 'react'
import NavDashboard from '../components/NavDashboard/NavDashboard'
import TableCours from '../components/tableCours/tableCours'
import TableUsers from '../components/tableUsers/tableUsers'
import TableBooks from '../components/tableBooks/tableBooks'
import TableProgrammes from '../components/tableProgrammes/tableProgrammes'
import TableConsultive from '../components/tableConsultive/tableCOnsultive'
import TableFormation from '../components/tableFormation/tableFormation'
import TableReview from '../components/tableReview/tableReview'
import { useNavigate } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

const Dashboard = (props) => {
    const navigate = useNavigate();
    // const { data, loading, error } = useFetch("http://localhost:8800/authoLogin/");
    // console.log(error,data,loading);
    // if(error) {
    //     navigate("/");
    // }
    return (
        <div id='dashboard' className='container'>
            {
            <>
            <NavDashboard page={props.page} admin={true} />
            {props.page === "cours" ? <TableCours page={props.page} />:'' }
            {props.page === "users" ? <TableUsers page={props.page} register={true}/>:'' }
            {props.page === "books" ? <TableBooks page={props.page} />:'' }
            {props.page === "programmes" ? <TableProgrammes page={props.page} />:'' }
            {props.page === "consultive" ? <TableConsultive page={props.page} />:'' }
            {props.page === "formation" ? <TableFormation page={props.page} />:'' }
            {props.page === "review" ? <TableReview page={props.page} />:'' }
            </>}
        </div>
    )
}

export default Dashboard
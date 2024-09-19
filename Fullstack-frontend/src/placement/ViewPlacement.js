import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from "axios"

export default function ViewPlacement() {

    const [placement,setPlacement]=useState({
        companyname: "",
    jobtitle: "",
    placementdate: "",
    studentid: ""
    })

    const {id}=useParams();

    useEffect(()=>{
        loadPlacement()
    },[])

    
    const loadPlacement=async ()=>{
        const result=await axios.get(`http://localhost:8080/user/${id}`)
        setPlacement(result.data)
    }
  return (
    <div>
      <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register Placement Details</h2>


          <div className='card'>
            <div className='cardheader'>
                Details of placemtns id:
                <ul className='List-group list-group-flush'>
                    <li className='list-group-item'>
                        <b>CompanyName:</b>
                        {placement.companyname}
                    </li>
                    <li className='list-group-item'>
                        <b>jobtitle:</b>
                        {placement.jobtitle}
                    </li>
                    <li className='list-group-item'>
                        <b>Date:</b>
                        {placement.placementdate}
                    </li>
                    <li className='list-group-item'>
                        <b>Student id:</b>
                        {placement.studentid}
                    </li>
                </ul>
            </div>
          </div>

          <Link className="btn btn-primary my-2" to={"/"}>Back to Home</Link> 
    </div>
    </div>
    </div>
    </div>
  )
}

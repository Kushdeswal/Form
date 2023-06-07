import React from 'react'
import '../DashBoard/Dashboard.css'
import { useNavigate } from 'react-router-dom'



function Dashboard() {
  const Navigate=useNavigate()


  return (
    <>
     
    <div className="header ">
    
      <h1>DashBoard </h1>
       <button  onClick={() =>Navigate("/")} >
        LogOut
       </button >
    </div>
       
     </>
  )
}

export default Dashboard
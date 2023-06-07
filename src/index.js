import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Ragister from './RagisterForm/Ragister';
import Login from './LoginForm/Login';
import Dashboard from './DashBoard/Dashboard';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
         <Route exact path='/ragister' element={ <Ragister/>} />
         <Route exact path='/' element={ <Login/>} />
         <Route exact path='/dashboard' element={ <Dashboard/>} />


      </Routes>
    </Router>
   <>
     {/* <Dashboard/> */}
   
   </>
  </React.StrictMode>
);


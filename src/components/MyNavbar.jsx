import React from "react";
// import {Nav} from "react-bootstrap";
import { withRouter } from "react-router";


const SideBar = props => {
   

    return (
        <>
     <div className="fixed-side
              justify-content-between bg-dark"
          
          id="sidebar">
     
        <div className="logo">
          <a href="/image/logo.jpg">
            
          </a>
        </div>
        <ul className="nav nav-pills flex-column mb-auto fixed-side">
          <li className="nav-item">
            <a href="/" className="nav-link d-flex" aria-current="page"><i className="text-center"></i>
              <h2>Home</h2>
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link d-flex"><i className="text-center"></i> 
              <h2>Search</h2>
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link d-flex"><i className=" text-center"></i>
              <h2>Your Library</h2>
            </a>
          </li>
        </ul>  
        <a className="d-flex justify-content-center" href="./login-page/login.html"><button type="button" className="btn rounded-pill btn-sign-up" >SIGN UP</button></a>
        <a className="d-flex justify-content-center" href="./login-page/login.html"><button type="button" className="btn rounded-pill btn-log-in" >LOGIN</button></a>
        <div className='mx-auto d-flex flex-column nav-text-block'>
          <p className="nav-text-bottom m-0">Cookie</p>

          <p className="nav-text-bottom mb-o"> Privacy Policy </p>  
        </div>
      </div>
            
        </>
        );
  };
  
  export default withRouter(SideBar)



  
  
  
import React from 'react';
import { Link, Router } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link a className="navbar-brand" to ="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            
              <li className="nav-item">
                <Link a className="nav-link active" aria-current="page" to ="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link a className="nav-link" to = "/about"> {props.temp} </Link>
              </li> 
                      
            </ul>                       
          </div>          
        </div>   
        <div className={`form-check form-switch text-${props.mode==='dark'?'light':'dark'}`}>
          <input className="form-check-input" onClick = {props.switchmode} type="checkbox" role="switch"  id="switchMode"/>
          <label className="form-check-label" htmlFor="switchMode">{`enable ${props.mode==='dark'?'light':'dark'} mode`}</label>
        </div>
      </nav>

  )
}

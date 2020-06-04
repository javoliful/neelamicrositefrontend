import React, { Component } from 'react';
import logo from '../assets/img/logo.png';
import {Link as NavLink } from "gatsby";

export default class Header extends Component {
 
  render() {
    
    return (
   <nav className="navbar navbar-expand-lg" id="mainNav">
          <NavLink className="navbar-brand" to="/"><img src={logo} alt="logo" /></NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                      <NavLink className="nav-link" to="/media">Media</NavLink></li>
                      <li className="nav-item">
                      <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>    
            </ul>
          </div>
      </nav>
    );
  }
}
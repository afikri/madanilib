import React from 'react'
import { NavLink } from "react-router-dom";

const Sidebar = () => {

  return (
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
      <ul className="nav">
        <li className="nav-item nav-category">Data</li>

        <li className="nav-item">
          <NavLink to='' className="nav-link" data-bs-toggle="collapse" aria-expanded="false"
            aria-controls="form-elements">
            <i className="menu-icon mdi mdi-card-text-outline"></i>
            <span className="menu-title">Data Tabular</span>
          </NavLink>

        </li>
        <li className="nav-item">
          <NavLink to='/spatial' className="nav-link" data-bs-toggle="collapse"  
          aria-expanded="false" aria-controls="charts">
            <i className="menu-icon mdi mdi-chart-line"></i>
            <span className="menu-title">Analisis Spasial</span>
          </NavLink>

        </li>

        <li className="nav-item">
          <NavLink to="/publication" className="nav-link" data-bs-toggle="collapse"
            aria-expanded="false" aria-controls="tables">
            <i className="menu-icon mdi mdi-update"></i>
            <span className="menu-title">Publikasi Madani</span>
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink to='/press' className="nav-link" data-bs-toggle="collapse"  
          aria-expanded="false" aria-controls="icons">
            <i className="menu-icon mdi mdi-presentation"></i>
            <span className="menu-title">Siaran Pers</span>
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink to='/literature' className="nav-link" data-bs-toggle="collapse" 
           aria-expanded="false" aria-controls="icons">
            <i className="menu-icon mdi mdi-library"></i>
            <span className="menu-title">Literature Eksternal</span>
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink to='/internal' className="nav-link" data-bs-toggle="collapse" 
           aria-expanded="false" aria-controls="icons">
            <i className="menu-icon mdi mdi-import"></i>
            <span className="menu-title">Kegiatan Internal</span>
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink to='/external' className="nav-link" data-bs-toggle="collapse"  
          aria-expanded="false" aria-controls="icons">
            <i className="menu-icon mdi mdi-export"></i>
            <span className="menu-title">Kegiatan Eksternal</span>
          </NavLink>
        </li>

        {/* <li className="nav-item">
        <a className="nav-link" data-bs-toggle="collapse" href="#icons" aria-expanded="false" aria-controls="icons">
          <i className="menu-icon mdi mdi-account"></i>
          <span className="menu-title">Admin Program</span>
        </a>
      </li> */}

        {/* <li className="nav-item">
          <a className="nav-link" data-bs-toggle="collapse" href="#icons" aria-expanded="false" aria-controls="icons">
            <i className="menu-icon mdi mdi-cloud-upload"></i>
            <span className="menu-title">Form Upload Data</span>
          </a>
        </li> */}
      </ul>
    </nav>
  )
}

export default Sidebar
import React from 'react'
import logo from '../images/logo.png'
import user from '../images/fikri.jpg'

const Nav = () => {
    return (
        <nav className="navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex align-items-top flex-row">
            <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-start">
                <div className="me-3">
                    <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-bs-toggle="minimize">
                        <img src={logo} width="100%" height="100%" alt="madani" />
                    </button>
                </div>
                <div>
                    <a className="navbar-brand brand-logo" href="#">
                        MadaniLib
                    </a>
                    <a className="navbar-brand brand-logo-mini" href="#">
                        MadaniLib
                    </a>
                </div>
            </div>
            <div className="navbar-menu-wrapper d-flex align-items-top">
                <ul className="navbar-nav">
                    <li className="nav-item font-weight-semibold d-none d-lg-block ms-0">
                        <h5 className="welcome-text">Hi, <span className="text-black fw-bold">Fikri Abdul</span></h5>
                    </li>
                </ul>

                <ul className="navbar-nav ms-auto">
                    <li className="nav-item dropdown d-none d-lg-block user-dropdown">
                        <a className="nav-link" id="UserDropdown" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                            <img style={{ height: "50px", width: "40px" }}
                                src={user}
                                alt="Profile image" /> </a>
                        <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="UserDropdown">
                            <div className="dropdown-header text-center">
                                <img className="img-md rounded-circle" src="images/faces/face8.jpg" alt="Profile image" />
                                <p className="mb-1 mt-3 font-weight-semibold">Fikri Abdul</p>
                                <p className="fw-light text-muted mb-0">fikri@madaniberkelanjutan.com</p>
                            </div>
                            <a className="dropdown-item"><i className="dropdown-item-icon mdi mdi-power text-primary me-2"></i>Sign Out</a>
                        </div>
                    </li>
                    <li className="nav-item dropdown d-none d-lg-block">
                        Log out
                    </li>
                </ul>
                <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button"
                    data-bs-toggle="offcanvas">
                    <span className="mdi mdi-menu"></span>
                </button>
            </div>
        </nav>

    )
}

export default Nav
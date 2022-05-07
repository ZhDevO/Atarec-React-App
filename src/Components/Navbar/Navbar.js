import React from 'react';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
    return (
        <div>
            <nav className="navbar sticky-top navbar-expand-lg navbar-dark" id='navbar-color'>
            <div className="container">
                <a className="navbar-brand me-2" href="https://mdbgo.com/">
                </a>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" id='logo-size' href="#">ATAREC</a>
                    </li>
                </ul>
                <ul className="d-flex align-items-center flex-row">
                    <li type="button" id='homebtn' className="btn btn-link px-3 me-2 active ">
                    <a style={{ color: 'white', textDecoration: 'none', color: '#57a5d3' }} href="#">Home</a>
                    </li>
                    <li type="button" id='otherbtn'  className="btn btn-link px-3 me-2 active text-white">
                    <a style={{ color: 'white', textDecoration: 'none' }} href="#">About</a>
                    </li>
                    <li type="button" id='otherbtn' className="btn btn-link px-3 me-2 active text-white">
                    <a style={{ color: 'white', textDecoration: 'none' }} href="#">Services</a>
                    </li>
                    <li type="button" id='otherbtn' className="btn btn-link px-3 me-2 active text-white">
                    <a style={{ color: 'white', textDecoration: 'none' }} href="#">Team</a>
                    </li>
                    <li type="button" id='otherbtn' className="btn btn-link px-3 me-2 active text-white">
                    <a style={{ color: 'white', textDecoration: 'none' }} href="#">Contact</a>
                    </li>
                    <li type="button"  id='otherbtn' className="btn btn-link px-3 me-2 active text-white">
                    <a style={{ color: 'white', textDecoration: 'none' }} href="#">Actualité</a>
                    </li>
                    <li type="button" id='btn1' className="btn  me-3">
                    <a style={{ color: 'white', textDecoration: 'none' }} href="#">Get Started</a>
                    </li>
                </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
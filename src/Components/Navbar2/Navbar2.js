import React from 'react';
import './Navbar2.css';
import MobileNavigation from './MobileNavigation';
import Navigation from './Navigation';

function Navbar2() {
    return (
        <div>
            <div className="container-fluid">
                <div className="logo">ATAREC</div>
                <Navigation />
                <MobileNavigation />
            </div>
        </div>
    )
}

export default Navbar2;
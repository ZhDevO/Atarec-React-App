import React from 'react';
import logoos from './logo ATAREC.jpeg';
import './Footer2.css';

function Footer2() {
    return (
        <div>
            <footer className='footer2'>
                <img src={logoos} id="logoos" />
                <p>Technopark de Tanger, T106 <b>Email:</b> contact@atarec.com</p>
            </footer>
        </div>
    )
}

export default Footer2;
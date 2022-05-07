import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Wavebeat.css';
import wavebeatlogo from './logWave Beat1.jpg';
import 'font-awesome/css/font-awesome.min.css';
import { BsFillPlayFill } from 'react-icons/bs';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

class Wavebeat extends Component {
    render() {
        return (
        <div id='home'>
            <div className="containeur"   id='section-color'>
                <div className="row">
                    <div className="col-lg-12 mx-auto" id='flex-two-sections'>
                        <div className="wave-beat" data-aos="fade-left">
                            <h2 style={{ color: 'white', fontWeight: '700', fontSize: '4rem' }}>Wave Beat</h2>
                            <p style={{ fontWeight: '700', fontSize: '2rem' }}>Du rêve à la réalité</p>
                            <ul className='flexbtn'>
                                <li type="button" id='btn2' className="btn  me-3">
                                <a style={{ color: 'white', textDecoration: 'none' }} href="#">Get Started</a>
                                </li>
                                <li>
                                    <a style={{ color: 'white', textDecoration: 'none', fontFamily: 'Open Sans', letterSpacing: '0.05cm' }} href="https://youtu.be/wd_USGBF-Yc">
                                        <BsFillPlayFill id='playhover' />Watch Video
                                        </a>
                                </li>
                            </ul>
                        </div>
                        <div className="image-section">
                            <img src={wavebeatlogo} className="logomodi" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
export default Wavebeat;
import React, { Component } from 'react';
import './Contact.css';
import { IoLocationSharp } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';

class Contact extends Component {
    render() {
        return (
        <div>
            <section id="contact" className="contact">
                    <div className="container" data-aos="fade-up">
                        <div className="section-title">
                        <h2>Contact</h2>
                        </div>
                        <div className="row" id='contact-section'>
                        <div className="col-lg-12 d-flex align-items-stretch">
                            <div className="info">
                            <div className="address">
                                <IoLocationSharp className='locationlogo'/>
                                <div className="locationinfo">
                                    <h4>Location:</h4>
                                    <p>Technopark de Tanger, T106</p>
                                </div>
                            </div>
                            <div className="email">
                                <MdEmail className='emaillogo'/>
                                <div className="emailinfo">
                                    <h4>Email:</h4>
                                    <p>contact@atarec.com</p>
                                </div>
                            </div>
                <iframe className='mapah' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3236.9809587653153!2d-5.8052708858662125!3d35.775844080172334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0c7f580f56224f%3A0x10633cdbe9d95d5b!2sTechnopark!5e0!3m2!1sfr!2sma!4v1626767114710!5m2!1sfr!2sma" width="600" height="450" loading="lazy"></iframe>
                    </div>
            </div>
            </div>
        </div>
    </section>
        </div>
        )
    }
}
export default Contact;
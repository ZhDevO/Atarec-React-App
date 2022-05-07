import React, { Component } from 'react';
import './Team.css';
import TahaPic from './taha.jpg';
import { BsLinkedin } from 'react-icons/bs';
import OussasmaPic from './oussama.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

class Teams extends Component {
    render() {
        return (
        <div>
            <section  className="team" id='team'>
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                    <h2>Team</h2>
                    </div>

                    <div className="row content">
                    <div className="col-lg-12">
                        <p className="text-justify">
                        Mohamed Taha El Ouaryachi et Oussama Nour, deux ingénieurs marocains, sur les pas de leurs ancêtres, main dans la main avec Tanger Med, et par le biais de Wave Beat, apportent leur pierre à l’édifice du Maroc de demain, derrière Sa Majesté le Roi Mohammed VI que Dieu l’assiste. Les deux fondateurs d’ATAREC sont assistés dans leur mission par des experts techniques et des profils expérimentés et reconnus dans leurs domaines de compétence.
                        </p>
                        <div className="gridinfo">
                        <div className="cocard1" data-aos="fade-right">
                            <img src={TahaPic} className="picmodi" />
                            <div className="tahainfo">
                                <h5>Mohamed Taha El Ouaryachi</h5>
                                <p>Co-fondateur chez ATAREC</p>
                                <div className="borderinfo"></div>
                                <div className="linkedinbackground">
                                <BsLinkedin className='linkedin'/>
                                </div>
                            </div>
                            
                        </div>
                        <div className="cocard2">
                            <img src={OussasmaPic} className="picmodi2" data-aos="fade-left"/>
                            <div className="oussamainfo">
                                <h5>Oussama Nour</h5>
                                <p>Co-fondateur chez ATAREC</p>
                                <div className="borderinfo"></div>
                                <div className="linkedinbackground">
                                <BsLinkedin className='linkedin'/>
                                </div>
                            </div>
                            
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </div>
        )
    }
}
export default Teams;
import React, { Component } from 'react';
import './Services.css';
import { BsSearch } from 'react-icons/bs';
import { BiDiamond } from 'react-icons/bi';
import { BiLike } from 'react-icons/bi';
import { BsLightbulb } from 'react-icons/bs';
import { GiFlowerEmblem } from 'react-icons/gi';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

class Services extends Component {
    render() {
        return (
        <div>
            <section  className="services" id='services'>
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                    <h2>Services</h2>
                    </div>

                    <div className="row content">
                    <div className="col-lg-12">
                        <p className="text-justify">
                        La palette de service d’ATAREC couvre toute la chaine de valeurs pour la mise en place des solutions innovantes des énergies renouvelables, conçu ‘sur-mesure’ pour chaque client, cette chaine est extensible à toutes ses applications subordonnées écologiquement à forte valeur ajoutée, et forte demande énergétique. Les clients d’ATAREC ont le choix de bénéficier des prestations spécifiques et ponctuelles ou des prestations couvrant toute la chaine de valeur proposée par ATAREC.
                        </p>
                        <div className="grid-cards">
                        <div className="card1" data-aos="fade-left">
                            <BsSearch className='aqua' style={{ fontSize: '2rem', marginBottom: '1rem' }}/>
                            <h3 className='aqua'>EVALUATION DE POTENTIEL</h3>
                            <p>Simulation numérique des conditions environnementales du site, audit et évaluation du potentiel énergétique des différentes sources disponibles</p>
                        </div>
                        <div className="card2" data-aos="fade-up">
                            <BiDiamond className='aqua' style={{ fontSize: '2rem', marginBottom: '1rem' }}/>
                            <h3 className='aqua'>CONCEPTION DE LA SOLUTION</h3>
                            <p>Simulation numérique des conditions environnementales du site, audit et évaluation du potentiel énergétique des différentes sources disponibles</p>
                        </div>
                        <div className="card3" data-aos="fade-up">
                            <BsLightbulb className='aqua' style={{ fontSize: '2rem', marginBottom: '1rem' }}/>
                            <h3 className='aqua'>PRODUCTION ET FOURNITURE</h3>
                            <p>Simulation numérique des conditions environnementales du site, audit et évaluation du potentiel énergétique des différentes sources disponibles</p>
                        </div>
                        <div className="card4" data-aos="fade-up">
                            <BiLike className='aqua' style={{ fontSize: '2rem', marginBottom: '1rem' }}/>
                            <h3 className='aqua'>INSTALLATION ET COMMISSIONING</h3>
                            <p>Simulation numérique des conditions environnementales du site, audit et évaluation du potentiel énergétique des différentes sources disponibles</p>
                        </div>
                        <div className="card5" data-aos="fade-right">
                            <GiFlowerEmblem className='aqua' style={{ fontSize: '2rem', marginBottom: '1rem' }}/>
                            <h3 className='aqua'>EXPLOITATION ET MAINTENANCE</h3>
                            <p>Simulation numérique des conditions environnementales du site, audit et évaluation du potentiel énergétique des différentes sources disponibles</p>
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
export default Services;
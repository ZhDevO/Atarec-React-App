import React, { Component } from 'react';
import './Aboutus.css';
import { BsCheckAll } from 'react-icons/bs'

class Aboutus extends Component {
    render() {
        return (
        <div>
            <section id="about" className="about">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                    <h2>About Us</h2>
                    </div>

                    <div className="row content">
                    <div className="col-lg-12">
                        <p className="text-justify">
                        Advanced Third Age Renewable Energies Company (ATAREC) est une startup marocaine qui veut se positionner en tant que leader des solutions innovantes d’énergies renouvelables de troisième génération et ses applications dans le but d’assurer une autonomie en énergie verte. ATAREC est distinguée par sa solution pilote brevetée Wave Beat. 
                        Dans un monde qui connait une forte dérive vers des solutions et des services écoresponsables, ATAREC profite pleinement de ses atouts favorisant sa propulsion :
                        
                        </p>
                        <ul>
                        <li> <p className="text-justify" ><BsCheckAll style={{ color: 'rgb(31, 178, 236)', fontSize: '1.75rem' }} /> Wave Beat (solution pilote brevetée d’ATAREC) bénéficie du soutien moral et financier de l’Agence Spéciale Tanger Méditerranée (TMSA). Le port Tanger Med est le premier port africain à obtenir le label « EcoPorts », délivré par « The European Sea Ports Organisation ESPO». Ce label est accordé aux ports respectant les normes environnementales </p></li>
                        <li> <p className="text-justify" ><BsCheckAll style={{ color: 'rgb(31, 178, 236)', fontSize: '1.75rem' }} /> ATAREC est lauréate du concours Ecostart. C’est un programme porté par le programme Taahil Al Mokawalat (TAM III) de la GIZ, en partenariat avec l’Agence Nationale pour la Promotion de la Petite et Moyenne Entreprise (Maroc PME) et l’Agence Marocaine pour l’Efficacité Energétique (AMEE) et dans le cadre du programme de coopération Maroc-Union européenne pour la “compétitivité et la croissance verte” (PACC), vise à encourager, accompagner et valoriser les projets verts portés par les auto-entrepreneurs, micro-entreprises, start-up et chercheurs</p></li>
                        <li> <p className="text-justify" ><BsCheckAll style={{ color: 'rgb(31, 178, 236)', fontSize: '1.75rem' }} /> ATAREC est retenue par le programme U-Founders. C’est une structure d’incubation de startups, rattachée à l’université Mohammed VI Polytechnique, ayant pour objet d’accompagner et de soutenir les entrepreneurs à haut potentiel pour la concrétisation de projets innovants </p></li>
                        <li> <p className="text-justify" ><BsCheckAll style={{ color: 'rgb(31, 178, 236)', fontSize: '1.75rem' }} /> ATAREC a conclu un partenariat scientifique avec les deux prestigieuses écoles d’ingéneirie au Maroc, à savoir : l’Ecole Mohammadia d’Ingénieurs (EMI) et l’Ecole Hassania des Travaux Publics (EHTP) </p></li>
                        <li> <p className="text-justify" ><BsCheckAll style={{ color: 'rgb(31, 178, 236)', fontSize: '1.75rem' }} /> ATAREC a conclu un protocole d’accord avec l’Agence Marocaine pour l’Efficacité Energétique pour objet de valoriser les concepts et solutions innovantes d’énergies renouvelables, notamment l’énergie marine </p></li>
                        </ul>
                    </div>
            
                    </div>

                </div>
            </section>
        </div>
        )
    }
}
export default Aboutus;
import React, { Component } from 'react';
import img1 from './portfolio-2.jpg';
import img2 from './portfolio-3.jpg';
import img3 from './portfolio-4.jpg';
import './Actualite.css';

class Actualite extends Component {
    render() {
        return (
        <div>
            <section id="actualite" className="actualite">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                    <h2>Actualité</h2>
                    </div>
                    <div className="actualites">
                    <div className="actualite1">
                        <img src={img1} className="img1" alt="" />
                        <h4>Actualité 1</h4>
                        <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                    </div>
                    <div className="actualite2">
                        <img src={img2} className="img2" alt="" />
                        <h4>Actualité 2</h4>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                    </div>
                    <div className="actualite3">
                        <img src={img3} className="img3" alt="" />
                        <h4>Actualité 3</h4>
                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
                    </div>
                    </div>
                </div>
            </section>    
        </div>
        )
    }
}
export default Actualite;
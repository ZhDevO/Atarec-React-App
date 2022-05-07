import logo from './logo.svg';
import Navbar from './Components/Navbar/Navbar';
import Wavebeat from './Components/WaveBeat-Section/Wavebeat';
import Aboutus from './Components/AboutUs/Aboutus';
import Services from './Components/Services/Services';
import Teams from './Components/Teams/Teams';
import Contact from './Components/Contact/Contact';
import Navbar2 from './Components/Navbar2/Navbar2';
import './App.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useState, useEffect } from 'react';
import BounceLoader from "react-spinners/BounceLoader";
import Actualite from './Components/Actualite/Actualite';
import Footer from './Components/Footer1/Footer';
import Footer2 from './Components/Footer2/Footer2';


function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  useEffect(() => {
    Aos.init({duration: 1500});
  }, [])
  return (
    <div className="App">
      {
        loading ? 
        <div id="loadings">
        <BounceLoader  color={"#1FB2EC"} loading={loading}  size={130} />
        </div>
        :
      <div>
      <Navbar2 />
      <Wavebeat />
      <Aboutus />
      <Services data-aos="fade-up"/>
      <Teams data-aos="fade-right"/>
      <Contact />
      <Actualite />
      <Footer2 />
      <Footer />
      </div>
      }
      {/* <Navbar /> */}
      
    </div>
  );
}

export default App;

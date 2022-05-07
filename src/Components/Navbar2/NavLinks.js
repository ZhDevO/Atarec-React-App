const NavLinks = () => {
    return ( 
        <ul className="nav-links">
            <li><a href="#home" className='active'>Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#team">Team</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#actualite">Actualite</a></li>
            <li><a target="_blank" href="https://www.linkedin.com/posts/atarec_internship-atarec-dataanalytics-activity-6905851146192461825-SSLx/">Watch</a></li>
            <li id='btnna2'><a style={{ color: 'white', textDecoration: 'none' }} href="#about">Get Started</a></li>
        </ul>
        );
}

export default NavLinks;
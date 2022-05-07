import NavLinks from "./NavLinks";
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from "react";
import { GrClose } from 'react-icons/gr';

const MobileNavigation = () => {

    const [open, setOpen] = useState(false);
    const hamburgerIcon = <GiHamburgerMenu className="Hamburger" 
                            size="40px" color="white"
                            onClick={() => {
                                setOpen(!open)
                            }}
                            />
    const closeIcon = <GrClose className="Hamburger" 
                            size="40px" color="white"
                            onClick={() => {
                                setOpen(!open)
                            }}
                            />

    return ( 
        <nav className="MobileNavigation">
        { open ? closeIcon : hamburgerIcon }
        { open && <NavLinks /> }
        </nav>
        );
}

export default MobileNavigation;
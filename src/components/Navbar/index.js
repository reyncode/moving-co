import React, { useState, useEffect } from 'react'
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink
} from './NavbarElements';
import { FaBars } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll'

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        }
        else {
            setScrollNav(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome}>Convenience Transportation HFX</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='about'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                            >About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='services'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                            >Services</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to='/contact'>Contact</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar

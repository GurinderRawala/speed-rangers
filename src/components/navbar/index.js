import logo from '../../media/transparent-logo.png'
import React from 'react'
import NavbarContainer from "./navbar-container";
import { Link } from 'react-router-dom';
import './styles-navbar.css';
import './scroll-effect'
import NavbarLogo from './navbar-logo';
const Navbar = () =>{
    return(
        <NavbarContainer
            title={<NavbarLogo img={logo}/>}
        >
            <Link to="/">SERVICES</Link>
            <Link to="/contact">CONTACT</Link>
            <Link to="/about">ABOUT</Link>
            <Link to="/career">CAREER</Link>
        </NavbarContainer>
    )
}

export default Navbar
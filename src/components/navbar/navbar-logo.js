import React from "react";
import { Link } from "react-router-dom";
const NavbarLogo = ({img}) =>{
    return(
        <Link to="/" style={{textDecoration: 'none'}}>
            <img src={img} alt="logo app" style={{maxWidth: '100%', height: 70}}/>
        </Link>
    )
}
export default NavbarLogo
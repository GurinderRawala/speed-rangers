import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
const SocialLinks = () =>{
    return(
        <>
            <Link to="#" >
                <FaFacebook size={24}/>
            </Link>
            <Link to="/contact" >
                <FaInstagram size={24}/>
            </Link>
            <Link to="#" >
                <FaTwitter size={24}/>
            </Link>
            <Link to="#" >
                <FaLinkedinIn size={24}/>
            </Link>
        </>
    )
}
export default SocialLinks
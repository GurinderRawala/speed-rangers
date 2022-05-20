import logo from '../../media/transparent-logo.png'
import React from "react";
import { ClientInfo } from "../../client-information";
import FooterLogo from "./footer-logo";
import SocialMedia from '../social-media';
import Copyrights from './copyright';
import { FaBuilding, FaTruck } from 'react-icons/fa'

const Footer = () =>{
    return(
        <div className="main-container bg-dark pt-5 text-white myContainer">
            <div className='container-fluid'>
            <div className="row">
                <div className="col-sm-4">
                    <h2>Contact</h2>
                    <hr />
                    <h3>Call Us</h3>
                    <p>{ClientInfo.phone}</p>
                    <br/>
                    <h3>Email</h3>
                    <p>{ClientInfo.email}</p>
                </div>
                <div className="col-sm-4">
                    <FooterLogo logo={logo} logoStyle={{ maxWidth: '100%', height: 120}}/>
                </div>
                <div className='col-sm-4 App-links'>
                    <h2>Visit Us</h2>
                    <hr />
                    <h3>Address</h3>
                    <p>
                    <FaBuilding /> &nbsp;{ClientInfo.address}
                    </p>
                    <p>
                    <FaTruck /> &nbsp;{ ClientInfo.yardAddress }
                    </p>
                    <br/>
                    <div style={{marginTop: 55, marginBottom: 55}}>
                    <SocialMedia />
                    </div>
                </div>
                <hr />
                <div className='col-sm-12'>
                    <Copyrights />
                </div>
            </div>
            </div>
        </div>
    )
}
export default Footer
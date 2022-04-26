import React from "react";
import { ClientInfo } from "../client-information";
import ContactForm from "../components/contact-form";
import ScreenHeading from "../components/screen-heading";
import OfficeAddressMap from '../components/office-address-map';
import { FaPhoneAlt, FaMap } from 'react-icons/fa';
import {MdEmail} from 'react-icons/md'
const img = 'https://images.pexels.com/photos/8867433/pexels-photo-8867433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
const ContactScreen = () =>{
    return(
        <>
        <ScreenHeading 
        title={"CONTACT"} 
        img="https://static.wixstatic.com/media/8e5b03_247d4616cff646978975b2d339ca28bf~mv2.jpg/v1/fill/w_867,h_504,al_c,q_85,usm_0.66_1.00_0.01/8e5b03_247d4616cff646978975b2d339ca28bf~mv2.jpg"
        />
        <div className="row justify-content-center pt-5">
            <div data-aos="fade-right" className="col-sm-6 App-header" style={{minHeight: 550}}>
                <ContactForm />
            </div>
            <div data-aos="fade-up" className="col-sm-4 App-header Lg-link">
                <img src={img} className="img-fluid" alt="customer-care"/>
            </div>
        </div>
        <div className="container my-container pt-5 my-3 bg-dark text-white">
            <h1>Contact</h1>
            <hr />
            <p>
               <FaPhoneAlt size={18}/> {ClientInfo.phone}<br/>
               <MdEmail size={18}/>  {ClientInfo.email}<br />
               <FaMap size={18}/>  {ClientInfo.address}
            </p>
        </div>
        <OfficeAddressMap />
        </>
    )
}
export default ContactScreen
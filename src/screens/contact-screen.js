import React from "react";
import { ClientInfo } from "../client-information";
import ContactForm from "../components/contact-form";
import ScreenHeading from "../components/screen-heading";
import OfficeAddressMap from '../components/office-address-map';
import { FaPhoneAlt } from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';
const addressUrl = {
    office: `https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2883.1880520234135!2d-79.62664348460741!3d43.727420155646385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s%20Visit%20Us%20%2033%20upper%20humber%20drive%2C%20Etobicoke%2C%20ON%20M9W%207B2!5e0!3m2!1sen!2sca!4v1650585007528!5m2!1sen!2sca`,
    yard:`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2879.429367456113!2d-79.74662328460506!3d43.80545255059017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b180b4bdc227f%3A0x135a99a3183eb228!2s6734%20Mayfield%20Rd%2C%20Brampton%2C%20ON%20L6P%200H8!5e0!3m2!1sen!2sca!4v1652248706599!5m2!1sen!2sca`
}
const img = 'https://images.pexels.com/photos/8867433/pexels-photo-8867433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
const ContactScreen = () =>{
    return(
        <>
            <ScreenHeading 
                title={"CONTACT"} 
                img="https://static.wixstatic.com/media/8e5b03_247d4616cff646978975b2d339ca28bf~mv2.jpg/v1/fill/w_867,h_504,al_c,q_85,usm_0.66_1.00_0.01/8e5b03_247d4616cff646978975b2d339ca28bf~mv2.jpg"
            />
            <div className="row justify-content-center pt-5 row-reverse-phone">
                <div data-aos="fade-right" className="col-sm-12 col-lg-6 App-header" style={{minHeight: 550}}>
                    <h1 className="my-3">CONTACT US</h1>
                    <ContactForm />
                </div>
                <div data-aos="fade-up" className="col-sm-12 col-lg-4 App-header text-center contact-page-photo">
                    <img src={img} className="img-fluid" alt="customer-care"/>
                </div>
            </div>
            <div className="my-container pt-5 my-3 bg-dark text-white" style={{padding: 35}}>
                <h1>Contact</h1>
                <hr />
                <p>
                    <FaPhoneAlt size={18}/> {ClientInfo.phone}<br/>
                    <MdEmail size={18}/>  {ClientInfo.email}<br />
                </p>
                <div className="row">
                    <div className="col-sm-6">
                        <OfficeAddressMap url={addressUrl.office}/>
                        <div className="text-center">
                    Office Address
                            <hr />
                            <a 
                                target={'_blank'} 
                                href={`https://www.google.com/maps/place/${ClientInfo.address}`}
                                rel="noreferrer"
                            >
                                {ClientInfo.address}
                            </a>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <OfficeAddressMap url={addressUrl.yard}/>
                        <div className="text-center">
                    Yard Address
                            <hr />
                            <a 
                                target={'_blank'} 
                                href={`https://www.google.com/maps/place/${ClientInfo.yardAddress}`}
                                rel="noreferrer"
                            >
                                {ClientInfo.yardAddress}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ContactScreen
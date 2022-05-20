import React from "react";
import { Content } from "./content";
import ServiceSection from "./service-section";
const Services = () =>{
    return(
        <div className="pt-5">
            <div data-aos="fade-down" className="container-fluid text-center">
                <h1>{Content.title}</h1>
                <div>{Content.punchLine}</div>
                <div className="row">
                    <ServiceSection data={Content.sectionOne}/>
                    <ServiceSection data={Content.sectionTwo}/>
                    <ServiceSection data={Content.sectionThree}/>
                </div>
            </div>
        </div>
    )
}
export default Services
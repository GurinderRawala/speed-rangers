import React from "react";
import { Content } from "./content";
import SectionOne from "./sectionOne";
import TopNotchServices from "./top-notch-services";
const About = () =>{
    return(
        <>
        <SectionOne
        Content={Content.sectionOne} 
        />
        <TopNotchServices 
        title={"TOP NOTCH SERVICES"} 
        services={Content.services}
        img={Content.trailer}
        />
        </>
    )
}
export default About
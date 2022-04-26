import React from "react";
import PhotoViewer from "../../photo-viewer";
import { Content } from "./content";
import SectionOne from "./sectionOne";
const About = () =>{
    return(
        <>
        <SectionOne
        Content={Content.sectionOne} 
        />
        <PhotoViewer heading={"MEET OUR TEAM"}/>
        </>
    )
}
export default About
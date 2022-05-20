import React from "react";
import ExperienceOverYears from "../components/home/experience-over-years";
import Introduction from "../components/home/introduction";
import Services from "../components/home/services";
import WhyChooseUs from "../components/home/why-choose-us";
import OriginalPhotoSection from "../components/original-photo-section";
import SlideShow from "../components/slideshow";
const HomeScreen = () =>{
    return(
        <>
        <div style={{marginTop: -100, zIndex: 1, position: 'relative'}}>
            <SlideShow />
        </div>
        <Introduction />
        <Services />
        <OriginalPhotoSection />
        <WhyChooseUs />
        <ExperienceOverYears />
        </>
    )
}
export default HomeScreen
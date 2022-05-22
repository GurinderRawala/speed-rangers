import React from "react";
import About from "../components/about";
import ScreenHeading from "../components/screen-heading";
const headingImg = `https://moneyqanda.com/wp-content/uploads/2017/05/better-trucking-finance.jpg`
const AboutScreen = () =>{
    return(
        <>
            <ScreenHeading 
                title={"ABOUT"} 
                img={headingImg}
            />
            <About />
        </>
    )
}
export default AboutScreen
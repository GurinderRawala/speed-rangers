import React from "react";
import CareerForm from "../components/career-form";
import ScreenHeading from "../components/screen-heading";
const CareersScreen = () =>{
    return(
        <>
            <ScreenHeading 
                title={"CAREER"} 
                img="https://lh3.googleusercontent.com/_CZ5NtPFOQ9eNvMpiKjLqJbJ4INuPkWUisCJTPaR8Iv7XKKtaTIH-KaN2YPLiaIBtviQXlUW=w1080-h608-p-no-v0"
            />
            <CareerForm />
        </>
    )
}
export default CareersScreen
import React from 'react';
import { Link } from "react-router-dom";
const ServiceSection = ({ data }) =>{
    return(
        <div className="col-sm-4 text-center App-header" style={{minHeight: 650, justifyContent: 'space-evenly'}}>
        <img src={data.img} className="rounded img-fluid" alt="sectionImg"/>
        <p>{data.body}</p>
        <Link to="/about" className="App-button">Learn More</Link>
    </div>
    )
}
export default ServiceSection
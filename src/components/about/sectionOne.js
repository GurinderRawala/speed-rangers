import React from "react";
import { Row } from "react-bootstrap";
const SectionOne = ({Content}) =>{
    return(
        <div className="container">
            <Row>
            <div className="col-sm-6 my-2 pt-5 App-header" style={{minHeight: 500, justifyContent: 'space-evenly'}}>
            <div 
            className="app-heading" 
            style={
                {
                    backgroundImage: `url('${Content.headingImg}')`, 
                    fontSize: '3.25vw',
                }
            }
            >
                {Content.heading}
            </div>
            <p>{Content.paragraphOne}</p>
            <p>{Content.paragraphTwo}</p>
            </div>
            <div data="fade-left" className="col-sm-6 my-2 pt-5">
                <img src={Content.img} className="img-fluid" alt="vertical" />
            </div>
            </Row>
        </div>
    )
}
export default SectionOne
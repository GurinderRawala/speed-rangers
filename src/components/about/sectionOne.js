import React from "react";
import { Row } from "react-bootstrap";
const SectionOne = ({Content}) =>{
    return(
        <div className="container">
            <Row className="row-reverse-phone">
                <div className="col-sm-12 col-lg-6 my-2 pt-5 App-header" style={{minHeight: 500, justifyContent: 'space-evenly'}}>
                    <div 
                        className="app-heading my-3" 
                        style={
                            {
                                backgroundImage: `url('${Content.headingImg}')`
                            }
                        }
                    >
                        {Content.heading}
                    </div>
                    <div>{Content.paragraphOne}</div>
                    <div>{Content.paragraphTwo}</div>
                </div>
                <div data="fade-left" className="col-sm-12 col-lg-6 my-2 pt-5">
                    <img src={Content.img} className="img-fluid" alt="vertical" />
                </div>
            </Row>
        </div>
    )
}
export default SectionOne
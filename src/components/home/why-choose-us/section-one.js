import React from "react";
const SectionOne = ({ data, title }) =>{
    return(
        <div className="my-container">
        <div className="row">
        <div data-aos="flip-right" className="col-sm-1 bg-dark Lg-link" style={{minHeight: 500}}></div>
        <div data-aos="fade-up" className="col-sm-12 col-lg-6 pt-5 App-header" style={{ justifyContent: 'space-evenly', alignItems: 'self-start' }}>
            {title}
            <p>{data.body}</p>
        </div>
        <div data-aos="fade-up" className="col-sm-12 col-lg-5 pt-5 text-center">
            <img src={data.img} className="img-thumbnail" alt="sec-pp" style={{height: '100%'}}/>
        </div>
        </div>
        </div>
    )
}
export default SectionOne
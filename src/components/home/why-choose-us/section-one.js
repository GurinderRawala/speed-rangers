import React from "react";
const SectionOne = ({ data, title }) =>{
    return(
        <div className="my-container container-fluid" style={{padding: 0}}>
            <div className="row justify-content-center">
                <div data-aos="flip-right" className="col-sm-1 bg-dark Lg-link" style={{minHeight: 500}}></div>
                <div data-aos="fade-up" className="col-sm-12 col-lg-6 App-header pt-5" style={{ justifyContent: 'space-evenly', alignItems: 'self-start' }}>
                    {title}
                    <p style={{padding: 25}}>{data.body}</p>
                </div>
                <div data-aos="fade-up" className="col-xs-5 col-lg-5 text-center App-header my-4">
                    <img src={data.img} className="img-fluid" alt="sec-pp"/>
                </div>
            </div>
        </div>
    )
}
export default SectionOne
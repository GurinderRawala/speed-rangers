import React from "react";
import {FaUser, FaTruck, FaClock} from 'react-icons/fa'
const backImg = `https://www.shell.us/business-customers/lubricants-for-business/sector-expertise/fleet/trucking/_jcr_content/pagePromo/image.img.960.jpeg/1558719967198/cs14757-25-sh-tmc-fleetheader-1920-1080-aem-r1-1.jpeg?imwidth=960`
const ExperienceOverYears = () =>{
    return(
        <div className="container-fluid" style={{padding: 0}}>
            <div className="row">
                <div className="col-sm-12" style={{padding: 0}}>
                <div 
                className="backimg App-header" 
                style={{backgroundImage: `url("${backImg}")`, minHeight: 550, padding: 35}}>
                <div 
                data-aos="fade-up"
                className="container my-container pt-5 my-5" 
                style={{borderLeftStyle: 'solid', borderLeftWidth: 35, borderLeftColor: '#333'}}
                >
                <div className='row'>
                    <div className="col-sm-4 social text-center">
                        <FaUser className="circle-around" size={35}/>
                        <h1>10K&#43;</h1>
                        <p style={{fontSize: 18}}>Happy Customers</p>
                    </div>
                
                
                    <div className="col-sm-4 social text-center">
                        <FaTruck className="circle-around" size={35} />
                        <h1>5K&#43;</h1>
                        <p style={{ fontSize: 18}}>On-time deliveries</p>
                    </div>
                    <div className="col-sm-4 social text-center">
                        <FaClock className="circle-around" size={35}/>
                        <h1>5Years&#43;</h1>
                        <p style={{fontSize: 18}}>Experience</p>
                    </div>
                </div>
                </div>
                </div>
                </div>
            </div>
        </div>
        
    )
}
export default ExperienceOverYears
import React from 'react';
import { Content } from './content';
const Introduction = () =>{
    return(
        <div className='container my-5 my-container' style={{padding: 0}}>
            <div className='row'>
                <div data-aos="fade-up" className='col-sm-12 col-lg-6' style={{padding: 0, position: 'relative'}}>
                    <img src={Content.img} alt='into-Im' className='img-fluid'/>
                    <div className='shade'></div>
                </div>
                <div data-aos="fade-up" className='col-sm-12 col-lg-6 pt-3 my-container' style={{padding: 25}}>
                
                    <div className='app-heading' style={Content.backImg}>{Content.title}</div>
                    <div className='my-2'>{Content.paragraph}</div>
            
                </div>
            </div>
        </div>
    )
}
export default Introduction
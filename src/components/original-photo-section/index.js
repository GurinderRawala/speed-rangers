import React from "react";
import { data } from "./data";
const OriginalPhotoSection = () =>{
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-6 App-header" style={{justifyContent: 'space-evenly', minHeight: 350}}>
                    <img data-aos="fade-down" src={data.img} className="img-fluid rounded" alt="speed rangers truck"/>
                </div>
                <div className="col-sm-6 App-header" style={{justifyContent: 'space-evenly', minHeight: 350}}>
                    <div className="text-center my-2" data-aos="fade-up">
                        <img src={data.logo} 
                        style={{height: 100}}
                        className="img-fluid rounded" 
                        alt="speed rangers logo"/>
                    </div>
                    <p style={{padding: 25}} data-aos="fade-up">
                        {data.content}
                    </p>
                </div>
            </div>
        </div>
    )
}
export default OriginalPhotoSection
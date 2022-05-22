import React from "react";
import { s } from "./styles";
const ScreenHeading = ({ img, title }) =>{
    return(
        
        <div 
            className="backimg App-header text-white" 
            style={{ ...s.container, backgroundImage: `url('${img}')`, minHeight: 400}}>
            <h1>{title}</h1>
        </div>
    
    )
}
export default ScreenHeading
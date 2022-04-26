import React from "react";
import { s } from "./styles";
const StaticBackground = ({img}) =>{
    return(
        <div 
        className="backimg sticky" 
        style={{backgroundImage: `url('${img}')`, ...s.staticBackground}}
        >
        </div>
    )
}
export default StaticBackground
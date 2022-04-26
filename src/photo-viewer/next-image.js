import React from "react";
import { Style } from "./viewer-styles";
const NextImage = ({image, lastImg}) =>{
    return(
        <div className={lastImg?"pt-5 Lg-link text-end": "pt-5 Lg-link text-left"}>
            <img src={image} alt='next-img' style={{ maxWidth: '100%', height: 300}} />
        </div>
    )
}
export default NextImage
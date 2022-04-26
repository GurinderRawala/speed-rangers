import React from "react"
import { Style } from "./viewer-styles"
const CurrentImage = ({image}) =>{
    return(
            <div style={Style.curImg}>
            <div className="text-center" style={{padding: 0}}>
            <img src={image} alt='cur-pic' style={{maxWidth: '100%', height: 400}} />
            </div>
            </div>
    )
}
export default CurrentImage
import React from "react"
import { Slide } from "./slide"
import SlideShowContainer from "./slideshow-container"

const SlideShow = () =>{
    const { Image, Text } = Slide()
    return(
            <div className="main-container">
                <SlideShowContainer 
                Image={Image}
                Text={Text}
                />
            </div>
     
    )
}

export default SlideShow
import { useEffect, useState } from "react"
import { slideShowData } from "./slideshow-data"
import RicaSlideText from "./slideshow-plugins/rica-slide-text"
export const Slide = () =>{
     const [imageIndex, setIndex] = useState(0)
     useEffect(()=>{
     const timer = setTimeout(() =>{
             if(imageIndex === slideShowData.length - 1){
                 setIndex(0)
             }else{
                 setIndex(imageIndex + 1)
             }
         },5000)
         return () =>{
             clearTimeout(timer)
         }
     },[imageIndex])
    
     return { 
         Image: () => <div style={{backgroundImage: `url('${slideShowData[imageIndex].img}')`}} className='slide-image fade backimg' alt="slide-Pic"/>,
         Text: () => <RicaSlideText  
                        title={ slideShowData[imageIndex].title } 
                        body={ slideShowData[imageIndex].body}
                        linkPath= { slideShowData[imageIndex].linkPath }
                        linkName={ slideShowData[imageIndex].linkName }
                    />
        }
}
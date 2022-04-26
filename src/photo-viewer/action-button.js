import { useState } from "react"

export const Action = (data, inital) =>{
    const [counter, setCounter] = useState(inital)   
    const changeSlide = (event) =>{
        setCounter(
            {
                currentIndex: CheckIndex(counter.currentIndex + event),
                nextIndex: CheckIndex(counter.nextIndex + event),
                lastIndex: CheckIndex(counter.lastIndex + event)
            }
            )
    }    
        const CheckIndex = (current) =>{
            if(data.indexOf(data[current]) === -1){ 
                if(current > data.length - 1 ){
                   return 0
                }
                return data.length - 1
            }
            return current
        }
    return{
        currentImage: data[counter.currentIndex],
        nextImage: data[counter.nextIndex],
        lastImage: data[counter.lastIndex],
        changeSlide
    }
}
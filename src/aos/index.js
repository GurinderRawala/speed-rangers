import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";

export const AosInit = () =>{
    useEffect(() =>{
        Aos.init({duration: 1000})
    },[])
}
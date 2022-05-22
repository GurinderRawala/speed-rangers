import { useEffect } from "react";
const KeypressControlls = ({actionButton}) =>{
    useEffect(() =>{
        function keyPressFunc(e) {
            switch(e.key){
            case 'ArrowLeft':
                actionButton(1)
                break
            case 'ArrowRight':
                actionButton(-1)
                break
            default:
                break
            }
        }
        document.addEventListener("keydown", keyPressFunc, false)
        return () => document.removeEventListener("keydown", keyPressFunc, false)
    })
}
export default KeypressControlls
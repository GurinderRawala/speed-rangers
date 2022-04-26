import React from "react";
const IconWithDetail = ({icon, detail}) =>{
    return(
        <div className="App-row-flex" style={{justifContent: 'space-evenly', width: '100%'}}>
            <div className="circle-around">{icon}</div>
            <div style={{fontSize: 22, fontWeight: 900}}>{detail}</div>
        </div>
    )
}
export default IconWithDetail
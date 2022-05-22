import React from "react";
const FooterLogo = ({logo, logoStyle}) =>{
    return(
        <div className="App-header" style={{minHeight: 300}}>
            <img src={logo} 
                className="img-fluid" 
                alt="Cinque Terre" 
                style={logoStyle} />
        </div>
    )
}
export default FooterLogo
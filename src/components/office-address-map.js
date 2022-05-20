import React from "react";
const OfficeAddressMap = ({ url }) =>{
    return(
        <iframe src={url}
        style={{width: '100%', height: 350, border: 0}}
        title="Office Address Map"
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade" />
    )
}
export default OfficeAddressMap

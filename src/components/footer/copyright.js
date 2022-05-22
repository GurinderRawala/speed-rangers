import React from "react";
const Copyrights = () =>{
    const year = new Date().getFullYear()
    return(
        <div className="row">
            <div className="col-sm-6">&copy; {year} Speed Ranger Inc. All rights Reserved</div>
            <div className="col-sm-6 text-end">Website desgined by Gurinder Rawala</div>
        </div>
    )
}
export default Copyrights
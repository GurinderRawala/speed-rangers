import React from "react";
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
const ViewerControlls = ({actionButton}) =>{
    return(
        <div className="App-row-flex slide-text" style={{justifyContent: 'space-between', top: '48%'}}>
                <div
                onClick={() => actionButton(-1)}
                className='viewer-button'
                > 
                <FiChevronLeft  size={55}/>
                </div>
                <div
                onClick={() => actionButton(1)}
                className='viewer-button'
                > 
                <FiChevronRight size={55}  />
                </div>
        </div>
    )
}
export default ViewerControlls
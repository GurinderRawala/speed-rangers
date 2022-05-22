import React from 'react';
import { Link } from 'react-router-dom';
const RicaSlideText = ({title, body, linkPath, linkName}) =>{
    return(
        <div className='slide-text'>
            <h5>{title}</h5>
            <h4>{body}</h4>
            <br/>
            <Link className='App-button' to={linkPath}>{ linkName }</Link>
        </div>
    )
}
export default RicaSlideText
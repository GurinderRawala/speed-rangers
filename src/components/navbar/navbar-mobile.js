import React from 'react';
import { useDispatch } from 'react-redux';
import { updateSignal } from '../../redux/signal-slice';
import SocialMedia from '../social-media'
const NavBarMobile = ({children}) =>{
    const dispatch = useDispatch()
    return(
        <div className='dropdown-shade'>
         <div 
         className='dropdown-links theme App-links shadow pt-3' 
         onClick={() => dispatch(updateSignal(false))} 
         style={{backgroundColor: '#000000'}}>
              { children }
              <br />
              <SocialMedia />
        </div>
        </div>
    )
}

export default NavBarMobile
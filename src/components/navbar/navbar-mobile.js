import React from 'react';
import SocialMedia from '../social-media'
const NavBarMobile = ({children}) =>{
    return(
        <div className='dropdown-shade'>
         <div className='dropdown-links theme App-links shadow pt-3' style={{backgroundColor: '#000000'}}>
              { children }
              <br />
              <SocialMedia />
        </div>
        </div>
    )
}

export default NavBarMobile
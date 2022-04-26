import React, { useState } from 'react';
import { FaBars }  from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import NavBarMobile from './navbar-mobile';
const NavbarContainer = ({children, title}) =>{
    const[show, setShow] = useState(false)
    const ShowMenu = () =>{
        setShow(!show)
    }
    return(
      <div className='theme shadow sticky navbar-fixed-top main-container'>
        <div className='App-row-flex' style={{justifyContent: 'space-between'}}>
            {title}
            <div className='App-links App-row-flex Lg-link' style={{width: '60%'}}>
                {children}
            </div>
            <div className='Mobile-link'>
              <button className='btn btn-Link' onClick={ShowMenu} style={{backgroundColor: '#000000'}}>
                  {
                      show?<AiOutlineClose color='#fff' size={24}  />:<FaBars color='#fff' size={24} />
                  }
              </button>
            </div>
        </div>
        {
            show? <NavBarMobile>{children}</NavBarMobile>: null
        }
      </div>
    )
}

export default NavbarContainer
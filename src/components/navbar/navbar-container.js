import React from 'react';
import { FaBars }  from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import NavBarMobile from './navbar-mobile';
import { useDispatch, useSelector } from 'react-redux';
import { updateSignal } from '../../redux/signal-slice';
const NavbarContainer = ({children, title}) =>{
    const { show } = useSelector(state => state.signal)
    const dispatch = useDispatch()
    const ShowMenu = () =>{
        dispatch(updateSignal( !show ))
    }
    return(
        <div className='theme shadow sticky navbar-fixed-top container-fluid'>
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
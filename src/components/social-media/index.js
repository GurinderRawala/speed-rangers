import React from 'react';
import SocialLinks from './social-links';
const SocialMedia = ({socialStyle, socialForFooter}) =>{
    return(
      <div className={socialForFooter?'App-link App-row-flex' :'social-link App-row-flex'} style={socialStyle?socialStyle: { justifyContent: 'space-evenly'}}>
          <SocialLinks />
      </div>
    )
}
export default SocialMedia
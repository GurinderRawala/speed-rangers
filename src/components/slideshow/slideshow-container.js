import React from 'react';

const SlideShowContainer = ({ Image, Text }) =>{
    return(
      <div style={{position: 'relative'}}>
        <div className='darkCover'></div>
        <Text />
        <Image />
      </div>
    )
}

export default SlideShowContainer
import React from 'react'

const SlideText = ({title, body}) =>{
    return(
       <div className='slide-text'>
           <h1>{title}</h1>
           <h5>{body}</h5>
       </div>
    )
}

export default SlideText
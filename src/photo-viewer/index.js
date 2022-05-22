import React from 'react';
import { Action } from './action-button';
import CurrentImage from './current-image';
import NextImage from './next-image';
import ViewerControlls from './viewer-controlls';
import viewerData from './viewer-data';
import { Style } from './viewer-styles';
import './photo-viewer.css'
const inital = { currentIndex: 0, nextIndex: 1, lastIndex:  2}
const PhotoViewer = ({heading}) =>{
    const { nextImage, currentImage, changeSlide, lastImage } = Action(viewerData, inital)
    return(
        <div data-aos="fade-down" style={{position: 'relative'}}>
            <div className='shade' style={{zIndex: -1}}></div>
            <div style={Style.nextImage}>
                <div className='App-row-flex ' 
                    style={{justifyContent: 'space-between', width: '100%'}}>
                    <NextImage image={lastImage.url}/>
                    <NextImage image={nextImage.url}/>
                </div>
            </div>
            <div className="App-header" 
                style={{position: 'relative', minHeight: 700, justifyContent: 'space-evenly'}}>
                <div className="text-center text-white">
                    <h1>{heading}</h1>
                </div>
                <CurrentImage image={currentImage.url}/>
                <div className="bg-dark text-white" style={{padding: 25}}>
                    <p>{currentImage.title.body}</p>
                    <p style={{fontSize: 22, color: '#b12'}}>{currentImage.title.name}</p>
                    <p>{currentImage.title.title}</p>
                </div>
                <ViewerControlls 
                    actionButton={(e) => changeSlide(e)}
                />
            </div>
        </div>
    )
}

export default PhotoViewer
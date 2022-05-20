import React from 'react';
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPG", "PDF", "DOCS", "PNG", "SVG"];

const FileUploadInput = ({ change, name, classes, label, data, single }) =>{
    const DisplayFiles = () =>{
    if(!single){
        return data.length === 1
               ?data[0].name
               :`${data.length} files are selected`
        }else{
            return data.name
        }
    }
    return(
        <>
           <FileUploader 
           label={label}
           classes={classes}
           handleChange={change} 
           name={name} 
           multiple={single? false: true} 
           types={fileTypes} 
           />
           <p className='successful'>{ data? DisplayFiles():null}</p>
        </>
     
    )
}

export default FileUploadInput;
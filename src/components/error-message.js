import React, { useEffect } from "react";
import * as $ from 'jquery';
import { ImSpinner3 } from 'react-icons/im'

const ErrorMessage = ({ response, isLoading, err }) =>{

    useEffect(() =>{
        $(`input, select, textarea`).css({ "border-left": "1px solid #33333355" })
        if(err?.errors){
            const keys = Object.keys(err?.errors)
            for(const xx in keys){
                Object.values(err?.errors)
                    .map(() => $(`[name="${keys[xx]}"]`)
                        .css({ "border-left": "8px solid #b12" }))
            }
        }
        return()=>{}
    }, [err])

    const CreateErrorMsg = () =>{
        return(
            <ul className="list-group" style={{width: '70%', margin: 'auto'}}> 
                <li
                    className="list-group-item bg-dark text-white" 
                    style={{ fontSize: 14 }}>
                    { err?.message }
                </li>
                {
                    Object.values(err?.errors)
                        .map((value, i) => 
                            value.map((errMsg, i) =>{
                                return(
                                    <li key={i} 
                                        className="list-group-item text-left" 
                                        style={{ fontSize: 14, color: '#b12'  }}>
                                        { errMsg }
                                    </li>
                                )
                            })
                        )
                }
            </ul>
        )
    }

    
    return(
        <div className="container my-3 text-center">
            {
                isLoading
                    ? <ImSpinner3 className="App-logo" size={28}/>
                    : null
            }

            {
                response
                    ? <div className="alert alert-success text-center" style={{borderRadius: 0}}>
                        {response.message}
                    </div>
                    : null
            }
            {
                err?.errors
                    ?<CreateErrorMsg />
                    :null
            }
            {
                err?.message && !err?.errors
                    ?<div className="alert alert-danger text-center" style={{borderRadius: 0}}>
            Something went wrong. Contact Admin for support.
                    </div>
                    :null
            }

        </div>
    )
}
export default ErrorMessage
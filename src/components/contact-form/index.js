import React, { useEffect } from "react";
import { CollectInput } from "../../collect-input";
import ErrorMessage from "../error-message";
import { s } from "./contact-styles";
import { submitForm } from "./submit-form";
const ContactForm = () =>{
    const {collection, collect} = CollectInput({})
    const { submit, res } = submitForm({ collection })
    useEffect(() =>{
        if(res?.res) collect({type: 'clear', payload: {}})
        return () => {}
    }, [collect, res])
    return(
        <>
            <ErrorMessage response={res?.res} isLoading={res?.isLoading} err={res?.err}/>
            <form onSubmit={submit}>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 contact-spacer">
                            <input 
                                type={'text'} 
                                className='form-control my-2' 
                                placeholder='First Name' 
                                name="firstname"
                                style={s.input} 
                                value={collection.firstname || ''}
                                onChange={(e) => collect({type: 'firstname', payload: e.target.value})}
                            />
                        </div>
                        <div className="col-sm-6 contact-spacer">
                            <input 
                                type={'text'} 
                                className='form-control my-2' 
                                placeholder='Last Name' 
                                style={s.input} 
                                name="lastname"
                                value={collection.lastname || ''}
                                onChange={(e) => collect({type: 'lastname', payload: e.target.value})}
                            />
                        </div>
                        <div className="col-sm-6 contact-spacer">
                            <input 
                                type={'text'} 
                                className='form-control my-2' 
                                placeholder='Phone' 
                                name="phone"
                                style={s.input} 
                                value={collection.phone || ''}
                                onChange={(e) => collect({type: 'phone', payload: e.target.value})}
                            />
                        </div>
                        <div className="col-sm-6 contact-spacer">
                            <input 
                                type={'text'} 
                                className='form-control my-2' 
                                placeholder='Email' 
                                name="email"
                                style={s.input} 
                                value={collection.email || ''}
                                onChange={(e) => collect({type: 'email', payload: e.target.value})}
                            />
                        </div>
                        <div className="col-sm-12 contact-spacer">
                            <textarea 
                                className="form-control" 
                                style={s.input} 
                                placeholder="Your Message"
                                value={collection.message || ''}
                                onChange={(e) => collect({type: 'message', payload: e.target.value})}
                            />
                        </div>
                        <div className="col-sm-12 contact-spacer">
                            <br />
                            <button className="App-button">Submit</button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}
export default ContactForm
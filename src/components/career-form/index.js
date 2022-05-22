import React, { useEffect } from 'react'
import { Row } from 'react-bootstrap'
import FileUploadInput from '../file-upload-input'
import { CollectInput } from '../../collect-input' 
import ErrorMessage from '../error-message'
import { CountryCodes } from './country-code'
import { Submit } from './form-submit'
import { s } from './style'
const CareerForm = () =>{
    const {collection, collect} = CollectInput({})
    const { submit, res } = Submit({collection})
    const handleChange = (event) =>{
        const name = event.target.name;
        const value = event.target.value || event.target.files[0];
        collect({type: name, payload: value})
    }
    useEffect(() =>{
        CountryCodes()
    },[])
    return(
        <div className='container text-center pt-5 my-3'>
            <h3>APPLICATION FORM</h3>
            <br />
            <form onSubmit={submit} method='post' encType="multipart/form-data">

                <input style={s.input} 
                    className='form-control my-1' 
                    type="text" 
                    name="firstname" 
                    placeholder="First Name *" 
                    value={collection.firstname || ''}
                    onChange={handleChange}/>

                <input style={s.input} 
                    className='form-control my-1' 
                    type="text" 
                    name="lastname" 
                    placeholder="Last Name *"
                    value={collection.lastname || ''}
                    onChange={handleChange}/>

                <input style={s.input} 
                    className='form-control my-1' 
                    type="text" 
                    name="email" 
                    placeholder="Email *" 
                    value={collection.email || ''}
                    onChange={handleChange}/>

                <select style={s.input}
                    className="country_codes form-control my-1"  
                    name="country_codes" 
                    value ={collection.country_codes || ''}
                    onChange={handleChange}></select>

                <input style={s.input} 
                    className='form-control my-1' 
                    type="text" 
                    name="phone" 
                    placeholder="Phone *" 
                    value ={ collection.phone || ''}
                    onChange={handleChange}/>

                <input style={s.input} 
                    className='form-control my-1' 
                    type="text" 
                    name="street" 
                    placeholder="Address *" 
                    value={collection.street || ''}
                    onChange={handleChange}/>

                <input style={s.input} 
                    className='form-control' 
                    type="text" 
                    name="city" 
                    placeholder="City *" 
                    value={collection.city || ''}
                    onChange={handleChange}/>
                <input style={s.input} 
                    className='form-control my-1' 
                    type="text" 
                    name="state" 
                    placeholder="State/Province *" 
                    value={collection.state || ''}
                    onChange={handleChange}/>

                <input 
                    style={s.input} 
                    className='form-control my-1' 
                    type="text" 
                    name="postal" 
                    placeholder="Postal Code" 
                    value={collection.postal || ''}
                    onChange={handleChange}/>
                <Row>
                    <div className="col-sm-6 my-1">
                        <select style={s.input} 
                            className='form-control' 
                            name="position" 
                            value={collection.position || ''}
                            onChange={handleChange}>
                            <option value=" ">Please Select</option>
                            <option value="Owner Operator">Owner Operator</option>
                            <option value="Company Driver">Company Driver</option>
                            <option value="Lease Purchase Program">Lease Purchase Program</option>
                            <option value="Dispatcher">Dispatcher</option>
                            <option value="Accountant">Accountant</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className="col-sm-6 my-1">
                        <select name="equipment" 
                            className='form-control' 
                            style={s.input} 
                            value={collection.equipment}
                            onChange={handleChange}>
                            <option value=" ">Please Select</option>
                            <option value="Reefer">Reefer</option>
                            <option value="Dry Van">Dry Van</option>
                            <option value="Dry Van/Reefer">Dry Van/Reefer</option>
                        </select>
                    </div>
                </Row>
                <textarea 
                    className='form-control' 
                    style={s.input}  
                    name="message" 
                    placeholder="Write your Message"
                    onChange={handleChange} 
                    value={collection.message || ''}
                ></textarea>
                <center>
                    <FileUploadInput 
                        name={'file'}
                        change={(e) => collect({type: 'file', payload: e})}
                        label='Upload Resume'
                        classes='text-center form-control my-2'
                        data={collection.file}
                        single
                    />
                </center>
                <button className="App-button">Submit</button>
            </form>
            <ErrorMessage response={res?.res} isLoading={res?.isLoading} err={res?.err}/>
        </div>
    )
}
export default CareerForm
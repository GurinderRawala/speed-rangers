import React, { useEffect } from 'react'
import { Row } from 'react-bootstrap'
import { CollectInput } from '../../collect-input' 
import { CountryCodes } from './country-code'
import { Submit } from './form-submit'
import { s } from './style'
const CareerForm = () =>{
    const {collection, collect} = CollectInput({})
    const { Submitted } = Submit({collection, collect})
    const handleChange = (event) =>{
        const name = event.target.name;
        const value = event.target.value || event.target.files;
        collect({type: name, payload: value})
    }
    useEffect(() =>{
        CountryCodes()
    },[])
    return(
        <div className='container text-center pt-5 my-3'>
            <h3>APPLICATION FORM</h3>
            <br />
            <form onSubmit={Submitted}  method="POST" encType="multipart/form-data">
        <input style={s.input} className='form-control' type="text" name="firstname" placeholder="First Name *" value={collection.firstname || ''}
         required onChange={handleChange}/><br/><br/>
        <input style={s.input} className='form-control' type="text" name="lastname" placeholder="Last Name *" value={collection.lastname || ''}
        required onChange={handleChange}/><br/><br/>
        <input style={s.input} className='form-control' type="text" name="email_" placeholder="Email *" value={collection.email_ || ''}
         required onChange={handleChange}/><br/><br/>
        <select className="country_codes form-control" style={s.input} name="country_codes" value ={collection.country_codes || ''}
         onChange={handleChange}></select><br/><br/>
        <input style={s.input} className='form-control' type="text" name="phone" placeholder="Phone *" value ={ collection.phone || ''}
         required onChange={handleChange}/><br/><br/>
        <input style={s.input} className='form-control' type="text" name="street" placeholder="Address *" value={collection.street || ''}
        onChange={handleChange}/><br/><br/>
        <input style={s.input} className='form-control' type="text" name="city" placeholder="City *" value={collection.city || ''}
         onChange={handleChange}/><br/><br/>
        <input style={s.input} className='form-control' type="text" name="state" placeholder="State/Province *" value={collection.state || ''}
        onChange={handleChange}/><br/><br/>
        <input style={s.input} className='form-control' type="text" name="postal" placeholder="Postal Code" value={collection.postal || ''}
         onChange={handleChange}/><br/><br/>
<Row>
<div className="col-sm-6 my-1">
        <select name="position" style={s.input} className='form-control' required value={collection.position || ''}
        onChange={handleChange}>
            <option value="">Please Select</option>
            <option value="Owner Operator">Owner Operator</option>
            <option value="Company Driver">Company Driver</option>
            <option value="Lease Purchase Program">Lease Purchase Program</option>
            <option value="Dispatcher">Dispatcher</option>
            <option value="Accountant">Accountant</option>
            <option value="Other">Other</option>
        </select>
</div>
<div className="col-sm-6 my-1">
   <select name="equipment" className='form-control' style={s.input} value={collection.equipment}
   onChange={handleChange}>
            <option value="">Please Select</option>
            <option value="Reefer">Reefer</option>
            <option value="Dry Van">Dry Van</option>
           <option value="Dry Van/Reefer">Dry Van/Reefer</option>
        </select>
</div>
</Row>
        <center><input style={s.input} className='form-control' type="file" name="files" files={collection.files || ""}
         onChange={handleChange}/></center><br/>
        <textarea className='form-control' style={s.input}  name="Request" placeholder="Write your Message"
        onChange={handleChange} value={collection.Request || ''}
        ></textarea><br/><br/>

        <button className="App-button">Submit</button>
</form>
</div>
    )
}
export default CareerForm
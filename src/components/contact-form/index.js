import React from 'react';
import { CollectInput } from '../../collect-input';
import { Submit } from './form-submit';
import { s } from './style';
const img = `https://images.pexels.com/photos/41951/solar-system-emergence-spitzer-telescope-telescope-41951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`
const ContactForm = () =>{
    const {collection, collect} = CollectInput({})
    const { Submitted } = Submit({collection, collect})
    return(
        <>
            {/* <ErrorMessage response={res?.response} isLoading={res?.isLoading} /> */}
            <form onSubmit={Submitted}>
            <div className="container pt-5" 
            style={{backgroundColor: '#fff'}}
            >
                <div className='text-left app-heading' style={{ backgroundImage: `url('${img}')`, fontSize: '3.25vw'}}>
                    CONTACT US
                </div>
            <div className="row">
                <div className="col-sm-6 my-2"> 
                <input 
                     className='form-control' 
                    placeholder='First Name' 
                    name="firstname"
                    style={s.input} 
                    value={collection.firstname || ''}
                    onChange={(e) => collect({payload: e.target.value, type:'firstname'}) }
                    />
                </div>
                <div className="col-sm-6 my-2">
                <input 
                    className='form-control' 
                    placeholder='Last Name' 
                    style={s.input} 
                    name="lastname"
                    value={collection.lastname || ''}
                    onChange={(e) => collect({payload: e.target.value, type:'lastname'})}
                    />
                </div>
                <div className="col-sm-6 my-2">
                <input 
                    className='form-control' 
                    placeholder='Phone' 
                    name="phone"
                    style={s.input} 
                    value={collection.phone || ''}
                    onChange={(e) => collect({payload: e.target.value, type:'phone'}) }
                    />
                </div>
                <div className="col-sm-6 my-2">
                <input 
                    className='form-control' 
                    placeholder='Email' 
                    name="email"
                    style={s.input} 
                    value={collection.email || ''}
                    onChange={(e) => collect({payload: e.target.value, type:'email'})}
                    />
                </div>
            <div className="col-sm-12 my-2">
                <textarea 
                className="form-control" 
                style={s.input} 
                placeholder="Your Message"
                value={collection.message || ''}
                onChange={(e) => collect({payload: e.target.value, type:'message'})}
                />
            </div>
            <div className="col-sm-12 my-2">
                <br />
                <button className='App-button'>Submit</button>
            </div>
            </div>
            </div>
        </form>
        </>
    )
}

export default ContactForm
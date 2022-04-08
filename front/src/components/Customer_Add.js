import { useEffect, useState, useReducer} from 'react'
import '../App.css';
import Navbar from './Navbar';
const axios = require('axios')

const Customer_Add = () => {
    
    const [customer, setCustomer] = useState({ first: '', last: '', email: '', phone: '', address: [] });
    const [address, setAddress] = useState({stNum:'',stName:'',apt:'',city:'',state:'',zip:''})
    let base_url = window.location.origin;
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setCustomer({ ...customer, [name]:value})

    }

    const handleChangeAddress = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setAddress({ ...address, [name]:value})

    }

    const wtf = (e) => {
        e.preventDefault();

        axios
            .post(base_url+'/customer-add');

    }
    
    const handleBtn = (e) => {
        e.preventDefault();
        
        if (customer.first && customer.last && customer.email && customer.phone && address){
            
            let addr = Object.values(address);

            let finalCustomer = {...customer,address:addr}
            axios
            .post(base_url+'/customer-add', finalCustomer)
            .then(res => {
                console.log(`status code: ${res.status}`);
                console.log(res);
            })
            .catch(error => {
                console.error(error);
            })

        }
        
        
        setCustomer({ first: '', last: '', email: '', phone: '' });
        setAddress({stNum:'',stName:'',apt:'',city:'',state:'',zip:''})
    }
    useEffect(() => {
        //console.log(customer)
    })
    return (<>
        <form>
        
            <div className="formDiv">
                <h2>Add Customer To Database</h2>
                <div>

                    <label>first</label>
                <input type="text"
                    name='first'
                    value={customer.first}
                    onChange={handleChange}></input>
                <label>last</label>
                <input type="text"
                    name='last'
                    value={customer.last}
                    onChange={handleChange}></input>
                <label>email</label>
                <input type="text"
                    name='email'
                    value={customer.email}
                    onChange={handleChange}></input>
                <label>phone</label>
                <input type="text"
                    name='phone'
                    value={customer.phone}
                    onChange={handleChange}></input>
                
                </div>
                
                <div>
                    <label>St #</label>
                <input type="text"
                    name='stNum'
                    value={address.stNum}
                    onChange={handleChangeAddress}></input>
                <label>St Name</label>
                <input type="text"
                    name='stName'
                    value={address.stName}
                    onChange={handleChangeAddress}></input>
                <label>Apt</label>
                <input type="text"
                    name='apt'
                    value={address.apt}
                        onChange={handleChangeAddress}></input>
                    <label>City</label>
                <input type="text"
                    name='city'
                    value={address.city}
                        onChange={handleChangeAddress}></input>
                <label>State</label>
                <input type="text"
                    name='state'
                    value={address.state}
                        onChange={handleChangeAddress}></input>
                <label>Zip</label>
                <input type="text"
                    name='zip'
                    value={address.zip}
                    onChange={handleChangeAddress}></input>

                </div>
                
                <button type="submit" onClick ={(e) =>handleBtn(e)}>Submit</button>
            </div>
            
        </form>
    
    </>)
}

export default Customer_Add;
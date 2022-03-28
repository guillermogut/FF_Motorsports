import { useEffect, useState, useReducer} from 'react'
import '../App.css';
import Navbar from './Navbar';
const axios = require('axios')

const Customer_Add = () => {
    
    const [customer, setCustomer] = useState({first:'',last:'',email:'',phone:''});

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setCustomer({ ...customer, [name]:value})

    }

    const wtf = (e) => {
        e.preventDefault();

        axios
            .post('http://localhost:5000/customer-add');

    }
    
    const handleBtn = (e) => {
        e.preventDefault();
        
        if (customer.first && customer.last && customer.email && customer.phone){
            
            axios
            .post('http://localhost:5000/customer-add', customer)
            .then(res => {
                console.log(`status code: ${res.status}`);
                console.log(res);
            })
            .catch(error => {
                console.error(error);
            })

        }
        
        
        setCustomer({ first:'',last:'',email:'',phone:''});
    }
    useEffect(() => {
        //console.log(customer)
    })
    return (<>
        <form>
        
            <div className="formDiv">
                
                <h2>Add Customer To Database</h2>
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
                <button type="submit" onClick ={(e) =>handleBtn(e)}>Submit</button>
            </div>
            
        </form>
    
    </>)
}

export default Customer_Add;
import Error from './Error';
import { useEffect, useState, useReducer } from 'react'
import { Link, useLocation } from 'react-router-dom';
import '../App.css';
import Navbar from './Navbar';
const axios = require('axios')


const Order_Add = () => {
    const customer = useLocation().state;
    const [order, setOrder] = useState({ make: '', model: '', year: '', vin: '', plate: '', mileage:'',description:'',id:''})
    let base_url = window.location.origin;
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setOrder({ ...order, [name]:value})

    }

    const wtf = (e) => {
        e.preventDefault();

        axios
            .post(base_url+'/order-add');

    }
    
    const handleBtn = (e) => {
        e.preventDefault();
        console.log("in order add")
        
        
        
        if (true){//validate fields here with checkFields()
            
            axios
            .post(base_url+'/order-add', {...order, id: customer.id})
            .then(res => {
                console.log(`status code: ${res.status}`);
                console.log(res);
            })
            .catch(error => {
                console.error(error);
            })

        }
        
        
        setOrder({ make: '', model: '', year: '', vin: '', plate: '', mileage:'',description:'',id:''});
    }

    const checkFields = (order) => {
        
        // let notEmpty = true;

        // customer.foreach((field) => {
        //     if (field) {
        //         notEmpty = true;
        //     }
        //     else {
        //         notEmpty = false;
        //     }
        // })

        // return notEmpty
    }
    useEffect(() => {
        //console.log(customer)
    },[])
    return (<>
        <form>
        
            <div className="formDiv">
                
                <h2>Add Order To Database</h2>
                <h3>Customer: {customer.last_name}, {customer.first_name}</h3>
                

                <label>Make</label>
                <input type="text"
                    name='make'
                    value={order.make}
                    onChange={handleChange}>
                </input>
                <label>Model</label>
                <input type="text"
                    name='model'
                    value={order.model}
                    onChange={handleChange}>
                </input>
                <label>Year</label>
                <input type="text"
                    name='year'
                    value={order.year}
                    onChange={handleChange}>
                </input>
                <label>Mileage</label>
                <input type="text"
                    name='mileage'
                    value={order.mileage}
                    onChange={handleChange}>
                </input>
                <label>vin</label>
                <input type="text"
                    name='vin'
                    value={order.vin}
                    onChange={handleChange}>
                </input>
                <label>plate</label>
                <input type="text"
                    name='plate'
                    value={order.plate}
                    onChange={handleChange}>
                </input>
                <label>Description</label>
                <input type="text"
                    name='description'
                    value={order.description}
                    onChange={handleChange}>
                </input>
                <button type="submit" onClick ={(e) =>handleBtn(e)}>Submit</button>
            </div>
            
        </form>
    
    </>)
}

export default Order_Add;
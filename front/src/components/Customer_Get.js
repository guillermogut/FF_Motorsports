import { useEffect, useState, useReducer} from 'react'
import '../App.css';
import { Link } from 'react-router-dom';
const axios = require('axios')



const defaultCustomer = {
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    id:''

}
const Customer_Get = () => {
    
    let [customers, setCustomers] = useState([])
    const [customer, setCustomer] = useState(defaultCustomer)
    //const [searchOption, setSearchOption] = useState([false,false,false,true])
    let base_url = window.location.origin;
    //console.log(customer.first);
    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post(base_url+'/customer-get', customer)
            .then(res => {
                console.log(`status code: ${res.status}`);
                console.log(res.data);
                //setCustomer(res); 

                
                setCustomers([...customers,...res.data]);
            })
            .catch((error) =>
            {
                console.error(error);
                
            })
    }

    const handleClear = () => {
        setCustomers([]);

        setCustomer(defaultCustomer);
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setCustomer({ ...customer, [name]:value})

    }
    useEffect(() => {
        

    },[customers])

    return (<>
        <form>

            <div className="formDiv">
                <h2>Get Customer From Database</h2>
                <label>first</label>
                <input type="text"
                    name='first_name'
                    value={customer.first_name}
                    onChange={handleChange}></input>
                <label>last</label>
                <input type="text"
                    name='last_name'
                    value={customer.last_name}
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
                <label>id</label>
                <input type="text"
                    name='id'
                    value={customer.id}
                    onChange={handleChange}></input>
                <button type="submit" onClick={(e) => handleSubmit(e)}>Submit</button>
                <button type='button' onClick={handleClear}>Clear</button>
                

                <div className="colContainer">
            {
                
                customers.map((person, i) => {
                    
                    const first = person.first_name;
                    const last = person.last_name;
                    const email = person.email;
                    const phone = person.phone;
                    const address = person.address;
                    const id = person.id;

                    

                    return (
                        
                        <div className="listItem" key={i}>
                            <div><p>{first + " " + last}</p> <p> {email}</p><p>id# {id }</p></div>
                            <div> <p> {phone}</p></div>
                            <div > <p>{address[0] + " " + address[1]}{address[2] != " " ? `Apt ` + address[2] : ` `}</p><p>{address[3]+', '+address[4]+" "+address[5] }</p></div>
                            <div className = "customerOrderLinks">
                                <Link className='linkOrder' to={{ pathname: '/orders', state: { ...person } }}>Go to Orders</Link>
                                <Link className='linkOrder' to={{ pathname:'/order-add', state:{...person} } }>Add Order</Link>
                            </div>
                            
                        </div>
                        
                    )
                })
            }
        </div>
            </div>
           
        </form>
        
    </>)
}

export default Customer_Get;
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useReducer } from 'react';
import Order from './Order'
const axios = require('axios')


const Orders = () => {
  const info = useLocation().state;//information from previous component
  
  const [orders, setOrders] = useState([]);
  const [customer, setCustomer] = useState({});
  const [cust_orders, setCust_orders] = useState({ orders: {}
    , customer: {}
})
  let base_url = window.location.origin;

  let customerTemp = null;
  let ordersTemp = null;
  //orderid is from quick search and info.orderId is from get customer
  const callBackendAPI = async () => {
      
    
    //get order then get customer information for name and email/////////////////////////////////////////////////////////
    if (info.orderId) {
     
       
      
      axios.post(base_url+'/orders', info )
            .then(res => {
              ordersTemp = [...res.data];
              setOrders(res.data);              
              return axios.post(base_url+'/customer-get', res.data[0]);
            })
        .then(res => {
          customerTemp = { ...res.data[0] };
          //newCustomer = {...newCustomer}
          
          setCustomer(customerTemp);

          
        })
        .catch(error => {
        console.error(error)
      })
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
     
    }
    //get customer name and email and then all orders they have
    else if (info.id) {
      axios.post(base_url+'/orders', info )
            .then(res => {
              
              setCustomer({...info})
              setOrders(res.data);
                
            })
            .catch((error) =>
            {
                console.error(error);
                
            })

    }

        
  };
  //callBackendAPI();
  
    useEffect(() => {
       //callBackendAPI();
      //console.log(customer)
      
      callBackendAPI();
      

        //setCust_orders({order:{...ordersTemp},customer:{...customerTemp}})
       
        //setOrders(ordersTemp)
      
    }, [])
  
  useEffect(() => {
      //console.log('rerendering')
    },[customer.address,orders])
    
  
  return (
    
    <div className='formDiv'>
     
      <div className='orderCustInfoL'>
          <p>ORDERS FOR:</p>
          <p style={{ fontSize: '30px' }}><b>{customer.first_name + " " + customer.last_name}</b></p>
          <p style={{ fontSize: '20px' }}>Mobile: {customer.phone}</p>
          <p style={{ fontSize: '20px' }}>{customer.email}</p>
          
          { customer.address? <p style={{ fontSize: '20px' }}>{customer.address[0] + ' ' + customer.address[1]}{customer.address[2] ? customer.address[2] : ' '}</p>: <></> }
          { customer.address? <p style={{ fontSize: '20px' }}>{customer.address[3] + ", " + customer.address[4] + " " + customer.address[5]}</p>: <></>}
        </div>
          <div className = "orderList">
        {

              orders.map((order,i) => {
                
                return (
                  
                  <Order parentToChild={order} customer={customer} key={i}></Order>
                  //<div key = {i}>{order.orderid}{"  " +customer.first_name}</div>
                  )
                })
            }


          </div>
          
    </div>
  );
};

export default Orders;

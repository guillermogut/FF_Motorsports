import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useReducer } from 'react';
import Order from './Order'
const axios = require('axios')


const Orders = () => {
  const info = useLocation().state;//information from previous component
    
  const [orders, setOrders] = useState([]);
  const [customer, setCustomer] = useState({});
  
  const callBackendAPI = async () => {
      

    //get order then get customer information for name and email/////////////////////////////////////////////////////////
    if (info.orderId) {
      console.log("order id")
      console.log(info)
      axios.post('http://localhost:5000/orders', info )
            .then(res => {
              console.log(`status code: ${res.status}`);
              
              let ree = res.data;

              //console.log(ree[0]);
              setOrders(res.data);
                
              console.log(orders)
              
              return axios.post('http://localhost:5000/customer-get', ree[0]);
            })
        .then(res => {
              console.log(`status code: ${res.status}`);
                console.log(res.data);
                
                
                setCustomer(res.data[0]);
                //console.log(orders);


        })
        .catch(error => {
        console.error(error)
      })
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      
      

    }
    //get customer name and email and then all orders they have
    else if (info.id) {
      setCustomer(info);
      axios
            .post('http://localhost:5000/orders', customer )
            .then(res => {
                console.log(`status code: ${res.status}`);
                
                setOrders(res.data);
                console.log(orders);
            })
            .catch((error) =>
            {
                console.error(error);
                
            })

    }

        
  };
    useEffect(() => {
        console.log("in orders n stuff")
        console.log(customer);
      
        callBackendAPI();
        
        
    },[])

    
  return (
    <div className='formDiv'>
     
      
          <h2>Orders for {customer.last_name}, {customer.first_name}: {customer.email}</h2>

          
          <div className = "orderList">
            {
              orders.map((order,i) => {
                  console.log(order)
                  return (
                      <Order parentToChild ={order} key = {i}></Order>
                  )
                })
            }


          </div>
          
    </div>
  );
};

export default Orders;

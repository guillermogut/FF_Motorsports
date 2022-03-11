import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useReducer } from 'react';
import Order from './Order'
const axios = require('axios')


const Orders = () => {
    const customer = useLocation().state;
    const [orders, setOrders] = useState([]);


    const callBackendAPI = async () => {
        axios
            .post('http://localhost:5000/orders', customer )
            .then(res => {
                console.log(`status code: ${res.status}`);
                console.log(res.data);
                
                
                setOrders(res.data);
                console.log(orders);
            })
            .catch((error) =>
            {
                console.error(error);
                
            })
  };
    useEffect(() => {
        console.log("in orders n stuff")
        console.log(customer);
        
        callBackendAPI();
        
    },[])


  return (
    <div className = 'formDiv'>
          <h2>Orders for {customer.last_name}, {customer.first_name}: {customer.email}</h2>

          
          <div className = "orderList">
            {
              orders.map((order,i) => {
                  
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

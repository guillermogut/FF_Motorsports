import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Quick_Search from './Quick_Search';
import { fetchOrders } from './uiSlice';
import Order from './Order'
import Customer from './Customer'
const axios = require('axios')
let base_url = 'http://localhost:5000'
let arr = new Array(4).fill(1);
const SearchResults = (props) => {

  //const readCookie = props.readCookie;
  //const nav = useHistory();
  const orders = useSelector((state) =>state.ui.orders)
  const dispatch = useDispatch();
  
  useEffect(() => {

    dispatch(fetchOrders())
  }, [dispatch])
  
  return (
    <div className='searchResults'>
      {
              orders.map((thing, i) => {
                  return (
                      
                      <Customer key = {i} {...thing}></Customer>
                      
                  )
              })
          }
          
    </div>
  );
};

export default SearchResults;

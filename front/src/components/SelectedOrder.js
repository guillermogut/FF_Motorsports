import React, { useEffect } from 'react';
import Quick_Search from './Quick_Search';
import SearchResults from './SearchResults';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
const SelectedOrder = (props) => {

  //const readCookie = props.readCookie;
  
  const selectedOrder = useSelector((state) => state.ui.selectedOrder)
  
  useEffect(() => {
    
  }, [props.user])
  
  return (
    <div className='formDiv'>
      
      {/* <h2>Hello, { props.user}</h2>
      <h1>Home Page</h1>
      {props.user ==="Alda"? <Quick_Search></Quick_Search>:<></>}
      {!(props.user === "Alda") ? <button type="button" onClick={() => nav.push('/login')}>To Login</button>:<></>}
       */}
      <div className='orderCustInfoR'>
          
          {/* <div className='colContainer'>
            <p style={{ fontSize: '30px' }}>{car.year + ' ' + car.make + ' ' + car.model}</p>
            <p style={{ fontSize: '20px' }}>{props.parentToChild.engine}</p>
          </div>
          <div className='colContainer'>
            <p style={{ fontSize: '20px' }}>vin: {props.parentToChild.vin}</p>
            <p style={{ fontSize: '20px' }}>License Plate: {props.parentToChild.plate}</p>
            <p style={{ fontSize: '20px' }}>Mileage: {props.parentToChild.mileage}</p>
          </div> */}
        {/* <div className='colContainer'>
            <p style={{ fontSize: '30px' }}>{2022 + ' ' + "KIA" + ' ' + "Optima"}</p>
            <p style={{ fontSize: '20px' }}>{'v8 splash'}</p>
          </div>
          <div className='colContainer'>
            <p style={{ fontSize: '20px' }}>vin: {"ytufbognhlg56490h"}</p>
            <p style={{ fontSize: '20px' }}>License Plate: {'123abc'}</p>
            <p style={{ fontSize: '20px' }}>Mileage: {'9999'}</p>
          </div>
          
           */}
        <div>{ selectedOrder.first_name? selectedOrder.first_name:"ree"}</div>
        </div>
      
    </div>
  );
};

export default SelectedOrder;

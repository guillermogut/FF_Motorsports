import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect, useReducer } from 'react';


const defOrder = {
  
  date: '',
  model:'',
  make:'',
  plate: '',
  vin: '',
  mileage: '',
  year: '',
  description: ''
}
const hereGoesNothing = (props,showNotes) => {
  props.parentToChild.notes.map((note, i) => {
            return (
              <div key = {i}>
                {showNotes?< div className='orderItems' key={i} style={{ fontSize: '20px' }} > {props.parentToChild.note_type[i] + ': ' + note} </div>:<></> }
              </div>
              
          )
        })
}
const Order = (props) => {

  //const [order, setOrder] = useState(props);
  const [car, setCar] = useState(props.parentToChild);
  const [customer, setCustomer] = useState(props.cust)
  const [desc, setDesc] = useState(true);
  const [showNotes, setShowNotes] = useState(false);
  
  useEffect(() => { }, [props])
  return (
    
    <div className="order">
      
      <div className="orderCustomerInfo">
        { }
        {/* <div className='orderCustInfoL'>
          
          <p style={{ fontSize: '30px' }}><b>{props.customer.first_name + " " + props.customer.last_name}</b></p>
          <p style={{ fontSize: '20px' }}>Mobile: {props.customer.phone}</p>
          <p style={{ fontSize: '20px' }}>{props.customer.email}</p>
          {console.log(props.customer)}
          { props.customer.address? <p style={{ fontSize: '20px' }}>{props.customer.address[0] + ' ' + props.customer.address[1]}{props.customer.address[2] ? props.customer.address[2] : ' '}</p>: <></> }
          { props.customer.address? <p style={{ fontSize: '20px' }}>{props.customer.address[3] + ", " + props.customer.address[4] + " " + props.customer.address[5]}</p>: <></>}
        </div> */}
        <div className='orderCustInfoR'>
          <p style={{ fontSize: '30px' }}>{car.year + ' ' + car.make + ' ' + car.model}</p>
          <p style={{ fontSize: '20px' }}>{props.parentToChild.engine}</p>
          <p style={{ fontSize: '20px' }}>vin: {props.parentToChild.vin}</p>
          <p style={{ fontSize: '20px' }}>License Plate: {props.parentToChild.plate}</p>
          <p style={{ fontSize: '20px' }}>Mileage: {props.parentToChild.mileage}</p>
          {console.log(props.parentToChild.note_type)}
        </div>
      </div>

      <div className='orderItemContainer'>
        <div>Notes< button type = 'button' onClick ={()=>{setShowNotes(!showNotes)}}> { showNotes? `Less`:`More`}</button></div>
        {
          props.parentToChild.notes? hereGoesNothing(): <></>
          
        }
      </div>
    </div>
  );
};

export default Order;

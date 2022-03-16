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
const Order = ({parentToChild}) => {

  //const [order, setOrder] = useState(props);
  const [car, setCar] = useState(parentToChild);
  //console.log(props.year);
  return (
    
    <div className = "card">
      <p> MAKE: {car.make} Model: {car.model} YEAR: {car.year}</p>
      <p className = "desc">{car.description}</p>
    </div>
  );
};

export default Order;

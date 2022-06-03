import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import SelectedOrder from './SelectedOrder';
import selectOrder from './uiSlice'
export default function Customer(props) {

    const [cust,setCust] = useState({...props})
    const dispatch = useDispatch();
    
  return (
      <div className='customerCard' onClick={() => dispatch(selectOrder())}>
          <div style ={{display:'flex',flexDirection:'row'}}>
            <p>{cust.first_name}</p>
            <p>{cust.last_name}</p>
          </div>
          
          <p>{cust.email}</p>
      </div>
  )
}

import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'
import {useEffect } from 'react'
import { useHistory } from 'react-router-dom'

const Navbar = (props) => {
  
  const nav = useHistory();

  // //console.log(user)
  // useEffect(() => {
  //   //readCookie();
  // }, [])
  const reset = () => {
    //props.handleChangeUser('')
    props.clearCookie();
    props.toggleNavBar();
    nav.push('/')
    
    // //readCookie();
  }
  useEffect(() => {
    //console.log('props.user changed')
    //console.log(props.user)
  },[props.navBar])
  return (
    <nav>
     
      <div className='navbar'>
        <div>
          <Link to='/'>Home</Link>
          
        </div>
        <div>
           <Link to = '/login' onClick = {() =>reset()}> LogOut</Link>
          
        </div>
        
        <div>
          <Link to='/customer-get'>Get Cust</Link>
          
        </div>
        
        <div>
          <Link to='/customer-add'>Add Cust</Link>
          
        </div>
        <div>
          
        </div>
      </div>
         
     
    </nav>
  );
};

export default Navbar;

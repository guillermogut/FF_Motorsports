import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'
const Navbar = () => {
  return (
    <nav>
     
      <div className='navbar'>
        <div>
          <Link to='/'>Home</Link>
        </div>
        <div>
          <Link to='/login'>Login</Link>
        </div>
        
        <div>
          <Link to='/customer-get'>Get Customer</Link>
        </div>
        
        <div>
          <Link to='/customer-add'>Add Customer</Link>
        </div>
        <div>
          <Link to='/orders'> Temp orders</Link>
        </div>
        <div>
          <Link to='/order-add'> Temp add orders</Link>
        </div>
      </div>
         
     
    </nav>
  );
};

export default Navbar;

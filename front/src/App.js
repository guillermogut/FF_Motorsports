import './App.css';
import {useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Error from './components/Error';
import Customer_Add from './components/Customer_Add';
import Customer_Get from './components/Customer_Get';
import Orders from './components/Orders';
import Login from './components/Login';
import Order_Add from './components/Order_Add';

const axios = require('axios')

export function App() {

  const [user, setUser] = useState('');
  const [navBar,setNavBar] = useState(false)
  const handleChangeUser = (userObj) => {

    const name = userObj
    console.log("in change user")
    setUser(name);
  }
  
const clearCookie = async () => {
  try {
    axios.get('/clear-cookie');
    
  } catch (e) {
    console.log(e);
  }
  };
  const toggleNavBar = () => {
    setNavBar(!navBar)
  }
const readCookie = async () => {
  try {
    const res = await axios.get('/read-cookie');

    //handleChangeUser(res.data.user);
    if (res.data.user === 'Alda') {
      handleChangeUser(res.data.user);
      setNavBar(true);
      
    }
    else {
      //console.log('cookie not read');
      handleChangeUser('')
      
      
    }
  } catch (e) {
    console.log(e);
  }
    };

  
  useEffect(() => {
  //console.log('after mount')
  
  }, [user,navBar])

  useEffect(() => {
    
    readCookie(); 
  }, [])
  
  return (

    
    <Router>
      {navBar? <Navbar user={user} clearCookie= {clearCookie} handleChangeUser ={handleChangeUser} toggleNavBar = {toggleNavBar} ></Navbar>:<></>}
      <Switch>
        <Route  exact path='/'>
          <Home user={user} ></Home>
        </Route>
        <Route path = '/login' >
          <Login user={user} handleChangeUser={handleChangeUser} toggleNavBar = {toggleNavBar}></Login>
        </Route>
        <Route path = '/customer-get'>
          <Customer_Get user={user} ></Customer_Get>
        </Route>
        <Route path ='/customer-add'>
          <Customer_Add user={user} ></Customer_Add>
        </Route>
        <Route path ='/orders'>
          <Orders user={user} ></Orders>
        </Route>
        <Route path ='/order-add'>
          <Order_Add user={user} ></Order_Add>
        </Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

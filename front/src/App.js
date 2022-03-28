import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react'

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

function App() {

  const [thing, setThing] = useState({});


  const callBackendAPI = async () => {
    const response = await fetch('http://https://ff-motorsports.herokuapp.com/');
    //console.log(response.json());
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };
  useEffect(() => {
  
    //callBackendAPI().then(res => console.log(res))

    // axios.post('http://localhost:5000')
    //   .then(res => {
    //     console.log(res.status)

    //   })
    //   .catch(error => {
    //   console.error(error)
    // })


},[])

  return (
    <Router>
      <Navbar ></Navbar>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path = '/login'>
          <Login ></Login>
        </Route>
        <Route path = '/customer-get'>
          <Customer_Get ></Customer_Get>
        </Route>
        <Route path ='/customer-add'>
          <Customer_Add ></Customer_Add>
        </Route>
        <Route path ='/orders'>
          <Orders></Orders>
        </Route>
        <Route path ='/order-add'>
          <Order_Add></Order_Add>
        </Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

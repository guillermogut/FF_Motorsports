import './App.css';
import {useEffect, useState } from 'react'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
// import Home from './components/Home';
// import Error from './components/Error';
// import Customer_Add from './components/Customer_Add';
// import Customer_Get from './components/Customer_Get';
// import Orders from './components/Orders';
// import Login from './components/Login';
// import Order_Add from './components/Order_Add';
import SearchResults from './components/SearchResults';
import Quick_Search from './components/Quick_Search';
import SelectedOrder from './components/SelectedOrder';
import { Provider } from 'react-redux'

import store from '../src/components/store.js'

const axios = require('axios')
let base_url = 'http://localhost:5000'
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
    const res = await axios.get(base_url+'/read-cookie');

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
    
    //readCookie(); 
  }, [])
  
  return (
    <><Provider store = {store}>
        <div className="mainContainer">
        <Navbar></Navbar>

        <div className="mainSubContainer">

          <div className="leftMainContainer">
            {/* <div style = {{backgroundColor:'red', width:'100%',height:'100px'}}>ree</div> */}
            <Quick_Search></Quick_Search>
            <div className="leftMainContainerSearchResults">
              <SearchResults></SearchResults>
            </div>
            
          </div>  
          {/* <div className="rightMainContainer">
            <Home user={user} ></Home>
          </div> */}

          <div className='rightMainContainer'>
            <SelectedOrder></SelectedOrder>
          </div>
        </div>
      </div>
    </Provider>
      
      
    </>
    
    // <Router>
    //   {navBar? <Navbar user={user} clearCookie= {clearCookie} handleChangeUser ={handleChangeUser} toggleNavBar = {toggleNavBar} ></Navbar>:<></>}
    //   <Switch>
    //     <Route  exact path='/'>
    //       <Home></Home>
    //     </Route>
    //     <Route path = '/login' >
    //       <Login user={user} handleChangeUser={handleChangeUser} toggleNavBar = {toggleNavBar}></Login>
    //     </Route>
    //     <Route path = '/customer-get'>
    //       <Customer_Get user={user} ></Customer_Get>
    //     </Route>
    //     <Route path ='/customer-add'>
    //       <Customer_Add user={user} ></Customer_Add>
    //     </Route>
    //     <Route path ='/orders'>
    //       <Orders user={user} ></Orders>
    //     </Route>
    //     <Route path ='/order-add'>
    //       <Order_Add user={user} ></Order_Add>
    //     </Route>
    //     <Route path='*'>
    //       <Error />
    //     </Route>
    //   </Switch>
    // </Router>
  );
}

export default App;

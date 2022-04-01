import React, { useEffect } from 'react';
import Quick_Search from './Quick_Search';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
const Home = (props) => {

  const [user, setUser] = useState(props.user);
  //const readCookie = props.readCookie;
  const nav = useHistory();
  useEffect(() => {
    //readCookie();
    
  },[])
  
  
  useEffect(() => {
    
  }, [props.user])
  
  return (
    <div className='formDiv'>
      <h2>Hello, { props.user}</h2>
      <h1>Home Page</h1>
      {props.user ==="Alda"? <Quick_Search></Quick_Search>:<></>}
      {!(props.user === "Alda") ? <button type="button" onClick={() => nav.push('/login')}>To Login</button>:<></>}
      
    </div>
  );
};

export default Home;

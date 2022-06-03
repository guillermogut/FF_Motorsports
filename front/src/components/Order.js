import React from 'react';
import { useState, useEffect} from 'react';
import ListBoxNoteType from './ListBoxNoteType';
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios';
import Note from './Note'


const Order = ({customer}) => {

  //const [order, setOrder] = useState(props);
  //const [car, setCar] = useState(props.parentToChild);
  //const [makeNote, setMakeNote] = useState(false);
  //const [showNotes, setShowNotes] = useState(true);
  //const [notes, setNotes] = useState([]);
  //const [text,setText] = useState('')
  //const [noteType,setNoteType] = useState('Comment')
  const cust = useState(customer)



  let base_url = window.location.origin;

  
  // const getNotes = () => {

  //   let result = axios.post(base_url + '/get-notes', {orderid:props.parentToChild.orderid} )
  //     .then(res => {
  //       let newNotes = [...res.data]
        
  //       setNotes(newNotes)
              
  //           })
  //       .catch(error => {
  //       console.error(error)
  //     })

    

  // }
  // const handleTextArea = (e) => {
  //   setText(e.target.value);
  // }
  
  // const handleNoteType = (type) =>{
  //   setNoteType(type);
  // }
  // const handleNewNote = () => {
    
   
  //   axios.post(base_url+'/make-note', {note:text, note_type:noteType, orderid:props.parentToChild.orderid} )
        
  //       .catch(error => {
  //       console.error(error)
  //     })
  //   getNotes();
  //   setMakeNote(false);
  //   window.location.reload(true);
  // }
  
  useEffect(() => { 

    //getNotes();
    

  }, [])
  
  // useEffect(() => {
  //   console.log("note changed in Order component")
  //  }, [notes])
  return (
    
    <div className="order">
      
      <div className="orderCustomerInfo">
        
        <div className='orderCustInfoR'>
{/*           
          <div className='colContainer'>
            <p style={{ fontSize: '30px' }}>{car.year + ' ' + car.make + ' ' + car.model}</p>
            <p style={{ fontSize: '20px' }}>{props.parentToChild.engine}</p>
          </div>
          <div className='colContainer'>
            <p style={{ fontSize: '20px' }}>vin: {props.parentToChild.vin}</p>
            <p style={{ fontSize: '20px' }}>License Plate: {props.parentToChild.plate}</p>
            <p style={{ fontSize: '20px' }}>Mileage: {props.parentToChild.mileage}</p>
          </div>
           */}
          
        </div>
      </div>
      {/* make a new note here, can possibly make this into its own component */}
      {/*... in fact make it into a component for styling purposes */}
      {/* pass in a function to change values in order from listBoxNotes */}
      
      {/* {makeNote ? <ListBoxNoteType handleNoteType={handleNoteType}edit={false}></ListBoxNoteType> : <></>}
      {makeNote ? <textarea id="noteTextArea" name="noteTextArea" cols={50} rows={4} onChange={handleTextArea}></textarea> : <></>}
      {makeNote ? <button onClick = {() =>handleNewNote()}>Done</button> : <></>}
      {!makeNote ? <button onClick={() => setMakeNote(!makeNote)}>Make Note</button>:<></>} */}
      {/* make a new note END */}
      <div className='orderItemContainer'>
        {/* <div>Notes< button type='button' onClick={() => { setShowNotes(!showNotes) }}> {showNotes? `Less` : `More`}</button></div> */}
        
        {/* {
          
          notes.map((item, i) => {
            return (

              showNotes ? <Note colorKey={i} key={i} getNotes={() => getNotes()}{...item}></Note> : <></>
              
            )
          })
          
        } */}
      </div>
    </div>
  );
};

export default Order;

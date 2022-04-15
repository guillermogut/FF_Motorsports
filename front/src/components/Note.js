import React from 'react';
import { useState, useEffect,memo } from 'react';
import axios from 'axios';
import ListBoxNoteType from './ListBoxNoteType';


const Note = (props) => {
    const [edit, setEdit] = useState(false);
    const [text, setText] = useState(props.note)
    const [noteType, setNoteType] = useState(props.note_type);
    const [del, setDel] = useState(false);
    
   
    let base_url = window.location.origin;
    
    useEffect(()=>{},[edit])
    const handleTextAreaChange = (e) => {
        
        setText(e.target.value)
    }
    const deleteNote = () => {

        axios.post(base_url + '/del-note', { id: props.id })
        .catch(error => {
        console.error(error)
        })
        props.getNotes();
        setDel(!del)
        window.location.reload(true);
    }
    const editNoteType = (type) => {
        setNoteType(type);
        
    }
    const editNote = () => {

        console.log("changing edit")
        
        axios.post(base_url + '/edit-note', { id: props.id, note: text, note_type: noteType })
        .catch(error => {
        console.error(error)
        })
        props.getNotes();
        setEdit(!edit);
        window.location.reload(true);
    }

    useEffect(() => {
        return () => {
            console.log('deleted')
        }
    },[])
    return (
        
            <div style={props.colorKey % 2 === 0 ? { backgroundColor: 'white' } : { backgroundColor: '#cdd8ec' }} className="note">
                
            {!edit ? <p className='noteBody'>{props.note_type} : {props.note}</p> : <div><ListBoxNoteType editNoteType={editNoteType}edit={true}default ={noteType}></ListBoxNoteType> <textarea value={text} onChange = {handleTextAreaChange} id="noteTextArea" name="noteTextArea" cols={50} rows={4}></textarea></div>}


                <div className = 'buttonBox'>
                
                {!edit ? <div><button className="noteButton" onClick={() =>deleteNote()}>Remove</button> <button className="noteButton" onClick={() => setEdit(!edit)}>Edit</button></div>: <button className="noteButton" onClick={() =>editNote()}>Done</button> }

                </div>
                
        </div>
        
        
    )
}


export default memo(Note);
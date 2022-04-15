import React from 'react';

const ListBoxNoteType = (props) => {



  const handleChange = (e) => {
      
    if (props.edit)
    {
      props.editNoteType(e.target.value)
    }
    else
    {
      props.handleNoteType(e.target.value);
    }
    
  }
  

  
    return (
    
    <form action="#">
      {/* <label for="note_type">Note Type</label> */}
      <select defaultValue={props.default} onChange={handleChange} onBeforeInput={handleChange} name="note_type" id="note_type">
        <option value="Comment">Comment</option>
        <option value="Issue">Issue</option>
          <option value="Labor">Labor</option>
          <option value="Part">Part</option>
        
      </select>
      
    </form>
    
    
    
    )
}

export default ListBoxNoteType;
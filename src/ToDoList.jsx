import React from 'react';
import StrikethroughSIcon from '@material-ui/icons/StrikethroughS';

const ToDoList=(props)=>{
  
    return (
        <> 
        

        <div className='todo_style'>
        <i className="fa fa-trash" aria-hidden="true" onClick={()=>{
            props.onSelect(props.id);
        }}></i>
       
    <li>{props.text}</li>
    </div>
    </>
    );
}
export default ToDoList;
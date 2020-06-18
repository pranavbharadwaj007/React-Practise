import React from "react";
import Button from '@material-ui/core/Button';
import { useState } from "react";
const CreateNote =(props)=>{

    const[note,setNote]=useState({
        title:"",
        content:"",
    }); 

    const InputEvent=(event)=>{

        // const value=event.target.value;
        // const name=event.target.name;

        const{name,value}=event.target;

        setNote((prevData)=>{
            return{
                ...prevData,
                [name]:value,
            };
        });
    };
    const addEvent=()=>{
props.passNote(note);
setNote({
    title:"",
    content:"",
}); 
    }
   return <>
    <div className="main_note">
        <form>
    <input type="text" value={note.title} name="title" onChange={InputEvent}  placeholder="Title" autoComplete="off"/>
    <textarea rows="" column="" value={note.content} name="content" onChange={InputEvent} placeholder="Write a note...."></textarea>
    <Button onClick={addEvent} variant="contained" color="primary" >Add</Button>
        </form>
    </div>
          </>;

};
export default CreateNote;
import React from "react";
import Button from '@material-ui/core/Button';
const CreateNote =()=>{
    return <>
    <div className="main_note">
        <form>
    <input type="text" placeholder="Title" autoComplete="off"/>
    <textarea rows="" column="" placeholder="Write a note...."></textarea>
    <Button variant="contained" color="primary" >Add</Button>
        </form>
    </div>
          </>;

};
export default CreateNote;
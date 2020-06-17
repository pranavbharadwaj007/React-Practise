import React from "react"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
const Note =()=>{
    return <>
    <div  className="Notearea row container-fluid">
    <div className="note my-3 ">
    <h1>title</h1>
    
    <p>this is the content</p>
    <button className="btnn">
    <DeleteForeverIcon className='deleteicon'/>
    </button>
    </div>
    </div>
    </>
}


export default Note;
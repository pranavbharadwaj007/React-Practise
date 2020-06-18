import React from "react"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
const Note =(props)=>{
    const deleteNote =()=>{
        props.deleteItem(props.id);
    }
    return <>
    <div  className="Notearea ">
    <div className="note mx-3 my-3 ">
<h1>{props.title}</h1>
    <br/>
<p>{props.content}</p>
    <button className="btnn" onClick={deleteNote}>
    <DeleteForeverIcon className='deleteicon'/>
    </button>
    </div>
    </div>
    </>
}


export default Note;
import React, { useState } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from  './Header'
import './indexproj.css';
import Footer from './Footer';
import Note from "./Note";
import CreateNote from "./CreateNote";

const Proj =()=>{
    const[addItem,setAddItem]=useState([]);
    const addNote=(note)=>{
//alert("i am clicked");
setAddItem((prevData)=>{
    return [...prevData,note];
})
    };

    const onDelete =(id)=>{
        setAddItem((olddata)=>{
           return olddata.filter((currdata,indx)=>{
                return indx!==id;
            })
        })

    }
return(
    <>
    <Header />
    <CreateNote  passNote={addNote}
    />
  <div className="row">
    {
   addItem.map((val,index)=>{
    return( <Note 
    key={index}
    id={index}
    title={val.title}
    content={val.content}
    deleteItem={onDelete}
    />
    );
   })
}
</div>
    <Footer />
    </>
)
}
export default Proj;


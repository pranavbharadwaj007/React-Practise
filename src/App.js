import React, { useState } from 'react';
import Card from './Card';
import Sdata from './Sdata';

let count=1;


const App=()=>{
    const[name,setName]=useState('');
    const[lame,setLame]=useState('');
    const[fullname,setFullName]=useState();
    const[lastname,setLastName]=useState();

    const inputEvent=(event)=>{
console.log(event.target.value);
setName(event.target.value);
    }
    const inputEvento=(event)=>{
setLame(event.target.value);
    }
    const ons=(event)=>{
        event.preventDefault();
setFullName(name);
setLastName(lame);
    }
    
    return(
        <>
        <div className="main_div">
<form onSubmit={ons}>
<div>

    <h1> Hello {fullname} {lastname} </h1>
    <input  type='text' placeholder='Enter ur First Name' onChange={inputEvent} value={name}  />
    <input  type='text' placeholder='Enter ur Last Name' onChange={inputEvento} value={lame}  />
  
    <button  type="submit">Click Me 😄</button>
</div>
</form>
        </div>
        </>
    );
  
    
};
export default App;
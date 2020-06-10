import React, { useState } from 'react';
import Card from './Card';
import Sdata from './Sdata';

let count=1;






const App=()=>{
    const[name,setName]=useState('');
    const[fullname,setFullName]=useState();
    const inputEvent=(event)=>{
console.log(event.target.value);
setName(event.target.value);
    }
    const ons=()=>{
setFullName(name);
    }
    
    return(
        <>
    <h1> Hello {fullname} </h1>
    <input  type='text' placeholder='Enter ur Name' onChange={inputEvent} value={name}  />
    <button onClick={ons}>Click Me 😄</button>
        </>
    );
  
    
};
export default App;
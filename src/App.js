import React, { useState } from 'react';
import Card from './Card';
import Sdata from './Sdata';

let count=1;


const App=()=>{
    const[fullName,setFullName]=useState({
        fname:"",
        lname : "",
        email :"",
        phone :"",
    });
    
    const inputEvent=(event)=>{
console.log(event.target.value);
// const value=event.target.value;
// const name=event.target.name;

const {value,name}=event.target;
setFullName((prev)=>{
    if(name==='fname'){
        return {

            fname:value,
            lname:prev.lname,
            email:prev.email,
            phone:prev.phone,
        }
    }
    else if(name==='lname'){
        return {

            fname:prev.fname,
            lname:value,
            email:prev.email,
            phone:prev.phone,
        }
    }
    else if(name==='email'){
        return {

            fname:prev.fname,
            lname:prev.lname,
            email:value,
            phone:prev.phone,
        }
    }
    else if(name==='phone'){
        return {

            fname:prev.fname,
            lname:prev.lname,
            email:prev.email,
            phone:value,
        }
    }
})

    }

    
    const ons=(event)=>{
        event.preventDefault();
alert('form submitted');
    }
    
    return(
        <>
        <div className="main_div">
<form onSubmit={ons}>
<div>

    <h1> Hi, I am {fullName.fname} {fullName.lname} </h1>
    <p>{fullName.email} </p>
    <p>{fullName.phone} </p>
    <input  type='text' placeholder='Enter ur First Name' name="fname" onChange={inputEvent} value={fullName.fname} autoComplete='off' />
    <input  type='text' placeholder='Enter ur Last Name' name="lname" onChange={inputEvent} value={fullName.lname} autoComplete='off' />

    <input  type='email' placeholder='Enter ur Email' autoComplete='off' name="email" onChange={inputEvent} value={fullName.email}   />

    <input  type='number' placeholder='Enter ur Phone number' name="phone" onChange={inputEvent} value={fullName.phone} autoComplete="off" />
  
    <button  type="submit">Click Me 😄</button>
</div>
</form>
        </div>
        </>
    );
  
      
    };
export default App;
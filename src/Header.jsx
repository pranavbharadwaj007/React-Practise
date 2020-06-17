import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import logo from "./images/logo.png"
const Header=()=>{
return(
    <>
   <div className="header">
    <img src={logo} alt="CodingThor" height="100" width="130" />
    <h1 className="my-4 mx-1">NoteIt</h1>
    <h5 className="my-5">developed by CodingThor</h5>
   </div>
    </>
)
}
export default Header;
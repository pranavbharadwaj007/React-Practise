import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from  './Header'
import './indexproj.css';
import Footer from './Footer';
import Note from "./Note";
import CreateNote from "./CreateNote";

const Proj =()=>{
return(
    <>
    <Header />
    <CreateNote />
    <Note/>
    <Note/>
    <Note/>
    <Footer />
    </>
)
}
export default Proj;


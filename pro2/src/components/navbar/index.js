//import './App.css';
import React from 'react'
import {Route,Routes,Link} from "react-router-dom";
import Home from './../Home';
import Books from './../Books';
import Navbar from './../navbar';
import Login from './../Login';
import Singup from './../Singup';

const NavBar = () => {
  return (

    <>
  
    <div className="container">
      <ul>
     <li><Link to="/home">home</Link></li>
     
     <li> <Link to="/Singup">Sing up</Link></li>
     
     <li><Link to="/Books">Books</Link></li>
     
     <li><Link to="/Login">login</Link></li>
     
     <li><Link to="/fav">favorite</Link></li>
    
     <button onClick={()=>{localStorage.removeItem("newUser")}}>logout</button>
     {/* <Link to="/home">home</Link>
     <Link to="/home">home</Link>
     <Link to="/home">home</Link> */}
     </ul>
     </div>
  
     <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Books" element={<Books/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Navbar" element={<Navbar/>} />
          <Route path="/Singup" element={<Singup/>} />
     </Routes>
  
     </>
  
    
     
  
  
  
    
    )
  
  
  
  }
  
export default NavBar;

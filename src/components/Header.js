import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from '../GoogleAuth';


function Header() {

  return (
    <nav className="header" style={{backgroundColor:'#42c5f5', padding:'4px'}}>
      <div style={{display:'flex', flexDirection: 'row'}}>
      <Link to="/">
        <h2 style={{color:'black'}}> Knowledge Blogs</h2> 
      </Link>
      <div style={{marginLeft:"auto"}}> 
      <GoogleAuth/>
      </div>
      
      </div>  
     
    </nav>
  );
}

export default Header;

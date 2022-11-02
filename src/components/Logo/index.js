import React from "react";
import logo from '../../imagens/logo.svg'
import './style.css'

 const Logo = () => {
  return (
    <div className="logo">
      <img 
      className="logo-img"
      src={logo} 
      alt="logo">
        
      </img>
      <p>
        <strong>Books</strong>New
      </p>
    </div>
  );
};

export default Logo
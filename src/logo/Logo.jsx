import React from 'react';
import logoImage from './two.png'; 
import menu from "./menu_5259008.png"

const Logo = () => {
  return (
    <div className='logoContainer'>
      <img className='logoImage' src={logoImage} alt="Logo" />
      <img className='menuIcon' src={menu} alt="Err" />
    </div>
  );
};

export default Logo;

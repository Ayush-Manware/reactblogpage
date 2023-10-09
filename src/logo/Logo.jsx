import React from 'react';
import logoImage from './two.png'; 

const Logo = () => {
  return (
    <div className='logoContainer'>
      <img className='logoImage' src={logoImage} alt="Logo" />
    </div>
  );
};

export default Logo;

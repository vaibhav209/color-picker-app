import React from 'react';
import { NavLink } from 'react-router-dom';

const AuthLink = ({ to, text, toLinkName }) => {
  return (
    <p style={{marginTop:"5px"}}>
      {text}{' '}
      <span>
        <NavLink to={to} style={{color:"#222"}}>
          {toLinkName}
        </NavLink>
      </span>
    </p>
  );
};

export default AuthLink;

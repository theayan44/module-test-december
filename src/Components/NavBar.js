import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <span>Shopping Cart</span>
      <div>
        <NavLink to='/'>Home Page</NavLink>
        <NavLink to='/cart'>Cart Page</NavLink>
      </div>
    </nav>
  )
}

export default NavBar;
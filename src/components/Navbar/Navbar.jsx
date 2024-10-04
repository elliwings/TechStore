import './navbar.css';

import logo from '../../assets/logos/logo.png';

import { ShoppingCart } from 'phosphor-react';

import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className='navbar'>
      <Link to='/'>
        <img src={logo} alt='logo' />
      </Link>
      <div className='links'>
        <NavLink
          to='/'
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Shop
        </NavLink>
        <NavLink
          to='about'
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          About
        </NavLink>
        <NavLink
          to='faq'
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          FAQ
        </NavLink>
        <span className='line'></span>
        <Link to='cart'>
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;

import styles from './navbar.module.css';
import classNames from 'classnames';

import logo from '../../assets/logos/logo.png';

import { ShoppingCart } from 'phosphor-react';

import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <header className={styles.navbar}>
      <Link to='/'>
        <img src={logo} alt='logo' />
      </Link>
      <div className={styles.links}>
        <NavLink
          to='/'
          className={({ isActive }) =>
            classNames(styles.link, { [styles.active]: isActive })
          }
        >
          Shop
        </NavLink>
        <NavLink
          to='about'
          className={({ isActive }) =>
            classNames(styles.link, { [styles.active]: isActive })
          }
        >
          About
        </NavLink>
        <NavLink
          to='faq'
          className={({ isActive }) =>
            classNames(styles.link, { [styles.active]: isActive })
          }
        >
          FAQ
        </NavLink>
        <span className={styles.line}></span>
        <Link to='cart' className={styles.cart}>
          <ShoppingCart size={32} color='black' />
        </Link>
      </div>
    </header>
  );
}

export default Navbar;

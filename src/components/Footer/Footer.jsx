import styles from './footer.module.css';

import logo from './../../assets/logos/logo-footer.png';

import {
  FacebookLogo,
  TwitterLogo,
  InstagramLogo,
  LinkedinLogo,
} from 'phosphor-react';

import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.shopInfo}>
        <img src={logo} alt='logo' />
        <p className={styles.shopDescription}>
          Welcome to TECHELLI, where technology meets your everyday needs! We
          are a premier electronics store, committed to offering gadgets and
          services to enhance your lifestyle with innovation.
        </p>
        <ul className={styles.socialNetworks}>
          <li>
            <a href='#'>
              <FacebookLogo size={40} color='white' />
            </a>
          </li>
          <li>
            <a href='#'>
              <TwitterLogo size={40} color='white' />
            </a>
          </li>
          <li>
            <a href='#'>
              <InstagramLogo size={40} color='white' />
            </a>
          </li>
          <li>
            <a href='#'>
              <LinkedinLogo size={40} color='white' />
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.footerLinks}>
        <div className={styles.footerColumn}>
          <h3 className={styles.columnTitle}>Categories</h3>
          <ul>
            <li>
              <a href='#'>Smartphones</a>
            </li>
            <li>
              <a href='#'>Accessories</a>
            </li>
            <li>
              <a href='#'>Laptops</a>
            </li>
            <li>
              <a href='#'>Home Entertainment</a>
            </li>
            <li>
              <a href='#'>Photography </a>
            </li>
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <h3 className={styles.columnTitle}>Shopping</h3>
          <ul>
            <li>
              <a href='#'>Payments</a>
            </li>
            <li>
              <a href='#'>Delivery options</a>
            </li>
            <li>
              <a href='#'> Loyalty program</a>
            </li>
            <li>
              <a href='#'>Buyer protection</a>
            </li>
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <h3 className={styles.columnTitle}>Pages</h3>
          <ul>
            <li>
              <Link to='/'>Shop page</Link>
            </li>
            <li>
              <Link to='about'>About page</Link>
            </li>
            <li>
              <Link to='faq'>Faq page</Link>
            </li>
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <h3 className={styles.columnTitle}>Customer care</h3>
          <ul>
            <li>
              <a href='#'>Help center</a>
            </li>
            <li>
              <a href='#'>Terms & Conditions</a>
            </li>
            <li>
              <a href='#'>Privacy policy</a>
            </li>
            <li>
              <a href='#'>Returns & refund</a>
            </li>
            <li>
              <a href='#'>Survey & feedback</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

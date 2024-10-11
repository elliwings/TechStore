import styles from './error.module.css';

import error from '../../assets/backgrounds/404.png';

import { ArrowRight } from 'phosphor-react';

import { NavLink } from 'react-router-dom';

function Error() {
  return (
    <div className={styles.error}>
      <div>
        <h2 className={styles.title}>Ooops...</h2>
        <p className={styles.highlight}>Page not found</p>
        <p className={styles.description}>
          A massa, interdum pretium, ut sit est nec. Convallis fames proin lacus
          cras.
        </p>
        <NavLink to='/shop'>
          <button className={styles.btnGoBack}>
            Go Back
            <ArrowRight size={32} color='white'></ArrowRight>
          </button>
        </NavLink>
      </div>
      <div>
        <img src={error} alt='error' />
      </div>
    </div>
  );
}

export default Error;

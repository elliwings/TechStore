import styles from './checkout.module.css';
import classNames from 'classnames';

import { useNavigate } from 'react-router-dom';

import useShop from '../../hooks/useShop';

function Checkout({ totalAmount }) {
  const navigate = useNavigate();

  const { clearAllCart } = useShop();

  return (
    <div className={styles.checkout}>
      <p className={styles.subtotal}>Subtotal: ${totalAmount}</p>
      <div className={styles.buttons}>
        <button className={styles.btnCart} onClick={() => navigate('/')}>
          Continue Shopping
        </button>
        {totalAmount > 0 && (
          <button className={styles.btnCart} onClick={() => clearAllCart()}>
            Clear All Cart
          </button>
        )}
        {totalAmount > 0 && (
          <button className={classNames(styles.btnCart, styles.order)} disabled>
            Order
          </button>
        )}
      </div>
    </div>
  );
}

export default Checkout;

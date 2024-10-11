import styles from './cart.module.css';

import { PRODUCTS } from '../../Data/products';

import useShop from '../../hooks/useShop';

import CartItem from '../../components/CartItem/CartItem';
import Checkout from '../../components/Checkout/Checkout';

function Cart() {
  const { cartItems, getTotalCartAmount } = useShop();
  const totalAmount = getTotalCartAmount();
  return (
    <div className={styles.cart}>
      <div>
        <h1>Your Cart Items {totalAmount === 0 && 'is empty'}</h1>
      </div>
      <div>
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem key={product.id} data={product} />;
          }
        })}
      </div>
      <Checkout totalAmount={totalAmount} />
    </div>
  );
}

export default Cart;

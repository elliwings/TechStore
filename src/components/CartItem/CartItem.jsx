import styles from './cart-item.module.css';

import noPhoto from '../../assets/products/no-image-available.jpg';

import useShop from '../../hooks/useShop';

function CartItem({ data }) {
  const { id, productImage, productName, price } = data;

  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useShop();

  return (
    <div className={styles.cartItem}>
      <img
        className={styles.image}
        src={productImage ? productImage : noPhoto}
        alt={productName}
      />
      <div>
        <h2>{productName}</h2>
        <p>${price}</p>
        <div className={styles.quantityDisplay}>
          <button
            className={styles.btnQuantity}
            onClick={() => removeFromCart(id)}
          >
            -
          </button>
          <input
            className={styles.inputQuantity}
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button className={styles.btnQuantity} onClick={() => addToCart(id)}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;

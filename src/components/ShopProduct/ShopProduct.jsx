import styles from './shop-product.module.css';
import classNames from 'classnames';

import noPhoto from '../../assets/products/no-image-available.jpg';

import { Link } from 'react-router-dom';

import useShop from '../../hooks/useShop';

function ShopProduct({ data }) {
  const { id, productImage, productName, price, inStock } = data;

  const { cartItems, addToCart } = useShop();

  const cartItemAmount = cartItems[id];

  return (
    <div className={styles.product}>
      <Link
        to={`/product/${id}`}
        style={{ textDecoration: 'none', color: 'black' }}
      >
        <div className={styles.image}>
          <img src={productImage ? productImage : noPhoto} alt={productName} />
        </div>
        <div className={styles.description}>
          <h2>{productName}</h2>
          <p>${price}</p>
        </div>
      </Link>
      <button
        className={classNames({
          [styles.addToCartBtn]: inStock,
          [styles.notAvailableBtn]: !inStock,
        })}
        onClick={() => addToCart(id)}
        disabled={!inStock}
      >
        Add To Cart {cartItemAmount > 0 && <>({cartItemAmount}) </>}
      </button>
    </div>
  );
}

export default ShopProduct;

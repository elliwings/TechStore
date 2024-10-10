import styles from './product.module.css';

import { useParams } from 'react-router-dom';

import { useContext } from 'react';
import { ProductsContext } from '../../context/products-context';
import { ShopContext } from '../../context/shop-context';

import Features from '../../components/Features/Features';
import classNames from 'classnames';

function Product() {
  const { id } = useParams();

  const { products } = useContext(ProductsContext);
  const { addToCart } = useContext(ShopContext);

  const product = products.find((product) => product.id == id);

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className={styles.productInfo}>
      <div className={styles.productImage}>
        <img src={product.productImage} alt={product.productName} />
      </div>
      <div className={styles.rightPanel}>
        <h2 className={styles.productTitle}>{product.productName}</h2>
        <div className={styles.additionalInfo}>
          <p className={styles.productReviews}>({product.reviews} Reviews)</p>
          <p
            className={classNames({
              [styles.inStock]: product.inStock,
              [styles.outOfStock]: !product.inStock,
            })}
          >
            {product.inStock === true && 'In Stock'}
            {product.inStock != true && 'Out of stock'}
          </p>
        </div>
        <b className={styles.productPrice}>${product.price}</b>
        <p>{product.description}</p>
        <hr className={styles.grayLine} />
        <button
          className={styles.buyNow}
          disabled={!product.inStock}
          onClick={() => addToCart(product.id)}
        >
          Buy Now
        </button>
        <Features />
      </div>
    </div>
  );
}

export default Product;

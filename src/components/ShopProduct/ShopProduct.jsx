import './shop-product.css';

import noPhoto from '../../assets/products/no-image-available.jpg';

import { Link } from 'react-router-dom';

import { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';

function ShopProduct({ data }) {
  const { id, productImage, productName, price, inStock } = data;

  const { cartItems, addToCart } = useContext(ShopContext);

  const cartItemAmount = cartItems[id];

  return (
    <div className='product'>
      <Link
        to={`/product/${id}`}
        style={{ textDecoration: 'none', color: 'black' }}
      >
        <div className='image'>
          <img src={productImage ? productImage : noPhoto} alt={productName} />
        </div>
        <div className='description'>
          <h2>{productName}</h2>
          <p>${price}</p>
        </div>
      </Link>
      <button
        className={inStock ? 'addToCartBttn' : 'notAvailableBttn'}
        onClick={() => addToCart(id)}
        disabled={!inStock}
      >
        Add To Cart {cartItemAmount > 0 && <>({cartItemAmount}) </>}
      </button>
    </div>
  );
}

export default ShopProduct;

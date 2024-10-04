import './cart-item.css';

import noPhoto from '../../assets/products/no-image-available.jpg';

import { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';

function CartItem({ data }) {
  const { id, productImage, productName, price } = data;

  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className='cart-item'>
      <img src={productImage ? productImage : noPhoto} alt={productName} />
      <div>
        <h2>{productName}</h2>
        <p>${price}</p>
        <div className='quantity-display'>
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;

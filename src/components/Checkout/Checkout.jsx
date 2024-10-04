import './checkout.css';

import { useNavigate } from 'react-router-dom';

import { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';

function Checkout({ totalAmount }) {
  const navigate = useNavigate();

  const { clearAllCart } = useContext(ShopContext);

  return (
    <div className='checkout'>
      <p>Subtotal: ${totalAmount}</p>
      <div className='buttons'>
        <button onClick={() => navigate('/')}>Continue Shopping</button>
        {totalAmount > 0 && (
          <button onClick={() => clearAllCart()}>Clear All Cart</button>
        )}
        {totalAmount > 0 && (
          <button className='order' disabled>
            Order
          </button>
        )}
      </div>
    </div>
  );
}

export default Checkout;

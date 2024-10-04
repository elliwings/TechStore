import './product.css';

import { useParams } from 'react-router-dom';

import { useContext } from 'react';
import { ProductsContext } from '../../context/products-context';
import { ShopContext } from '../../context/shop-context';

import Features from '../../components/Features/Features';

function Product() {
  const { id } = useParams();

  const { products } = useContext(ProductsContext);
  const { addToCart } = useContext(ShopContext);

  const product = products.find((product) => product.id == id);

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className='product-info'>
      <div className='product-image'>
        <img src={product.productImage} alt={product.productName} />
      </div>
      <div className='right-panel'>
        <h2 className='product-title'>{product.productName}</h2>
        <div className='additional-info'>
          <p className='product-reviews'>({product.reviews} Reviews)</p>
          <p className={product.inStock === true ? 'in-stock' : 'out-of-stock'}>
            {product.inStock === true && 'In Stock'}
            {product.inStock != true && 'Out of stock'}
          </p>
        </div>
        <b className='product-price'>${product.price}</b>
        <p>{product.description}</p>
        <hr className='gray-line' />
        <button
          className='buy-now'
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

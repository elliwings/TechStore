import { useContext } from 'react';
import { ProductsContext } from '../context/products-context';

const useProducts = () => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error('Something is not right..."');
  }
  return context;
};

export default useProducts;

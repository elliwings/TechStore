import { useContext } from 'react';
import { ShopContext } from '../context/shop-context';

const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('Something is not right..."');
  }
  return context;
};

export default useShop;

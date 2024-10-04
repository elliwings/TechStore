import { createContext, useState } from 'react';
import { PRODUCTS } from '../Data/products';

export const ProductsContext = createContext(null);

function ProductsContextProvider(props) {
  const [products, setProducts] = useState(PRODUCTS);

  const amountDisplayedProducts = () => {
    return products.length;
  };

  const filterProductsByImage = (checked) => {
    const filteredProducts = checked
      ? PRODUCTS.filter((product) => product.productImage != null)
      : PRODUCTS;

    setProducts(filteredProducts);
  };

  const sortProductsByPrice = (order) => {
    const sortedProducts = [...products].sort((a, b) => {
      return order === 'Increase' ? a.price - b.price : b.price - a.price;
    });
    setProducts(sortedProducts);
  };

  const contextValue = {
    products,
    amountDisplayedProducts,
    filterProductsByImage,
    sortProductsByPrice,
  };

  return (
    <ProductsContext.Provider value={contextValue}>
      {props.children}
    </ProductsContext.Provider>
  );
}

export default ProductsContextProvider;

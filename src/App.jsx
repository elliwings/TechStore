import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Shop from './pages/Shop/Shop';
import Cart from './pages/Cart/Cart';
import Product from './pages/Product/Product';
import Layout from './components/Layout/Layout';
import ShopContextProvider from './context/shop-context';
import ProductsContextProvider from './context/products-context';
import Faq from './pages/Faq/Faq';
import About from './pages/About/About';
import Error from './pages/Error/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'shop',
        element: <Shop />,
      },
      {
        path: 'product/:id',
        element: <Product />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'faq',
        element: <Faq />,
      },
      {
        path: '*',
        element: <Error />,
      },
    ],
  },
]);

function App() {
  return (
    <div className='App'>
      <ProductsContextProvider>
        <ShopContextProvider>
          <RouterProvider router={router} />
        </ShopContextProvider>
      </ProductsContextProvider>
    </div>
  );
}

export default App;

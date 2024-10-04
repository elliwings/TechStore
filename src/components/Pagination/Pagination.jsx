import './pagination.css';

import { useState } from 'react';

import { useContext } from 'react';
import { ProductsContext } from '../../context/products-context';

import ShopProduct from '../../components/ShopProduct/ShopProduct';

const Pagination = () => {
  const { products } = useContext(ProductsContext);

  const itemsPerPage = 9;

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <ul className='products'>
        {currentItems.map((product) => (
          <li key={product.id}>
            <ShopProduct data={product} />
          </li>
        ))}
      </ul>
      <div className='pagination'>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          className='pagination-arrow'
          disabled={currentPage === 1}
        >
          &#8592;
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`pagination-btn ${
              currentPage === index + 1 ? 'active' : ''
            }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          className='pagination-arrow'
          disabled={currentPage === totalPages}
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default Pagination;

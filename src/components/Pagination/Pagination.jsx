import noProducts from '../../assets/backgrounds/no-products.png';

import styles from './pagination.module.css';
import classNames from 'classnames';

import { useState } from 'react';
import useProducts from '../../hooks/useProducts';
import { useSearchParams } from 'react-router-dom';

import ShopProduct from '../../components/ShopProduct/ShopProduct';

const Pagination = () => {
  const { products } = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();

  const itemsPerPage = 9;

  const pageFromUrl = parseInt(searchParams.get('page')) || 1;
  const [currentPage, setCurrentPage] = useState(pageFromUrl);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    setSearchParams({ page: pageNumber });
  };

  return (
    <div>
      {products.length === 0 && (
        <div className={styles.noProducts}>
          There Are No Products
          <img src={noProducts} alt='no products' />
        </div>
      )}
      <ul className={styles.products}>
        {currentItems.map((product) => (
          <li key={product.id}>
            <ShopProduct data={product} />
          </li>
        ))}
      </ul>
      {products.length > 0 && (
        <div className={styles.pagination}>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            className={styles.paginationArrow}
            disabled={currentPage === 1}
          >
            &#8592;
          </button>

          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={classNames(styles.paginationBtn, {
                [styles.active]: currentPage === index + 1,
              })}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            className={styles.paginationArrow}
            disabled={currentPage === totalPages}
          >
            &#8594;
          </button>
        </div>
      )}
    </div>
  );
};

export default Pagination;

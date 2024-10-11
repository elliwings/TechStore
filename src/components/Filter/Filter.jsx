import styles from './filter.module.css';
import { Switch } from '@mui/material';

import { useState, useEffect } from 'react';

import { useSearchParams } from 'react-router-dom';

import useProducts from '../../hooks/useProducts';

function Filter() {
  const [checked, setChecked] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  const {
    amountDisplayedProducts,
    filterProductsByImage,
    sortProductsByPrice,
  } = useProducts();

  const category = searchParams.get('category') || '';
  const currentSort = searchParams.get('sort') || '';

  useEffect(() => {
    const newParams = new URLSearchParams();
    const currentPage = searchParams.get('page') || '1';
    newParams.set('page', currentPage);
    setSearchParams(newParams);
  }, []);

  const updateSearchParams = (newParams) => {
    const currentPage = searchParams.get('page') || '1';
    newParams.set('page', currentPage);
    setSearchParams(newParams);
  };

  const handleChange = (event) => {
    const isChecked = event.target.checked;
    setChecked(isChecked);
    filterProductsByImage(isChecked);

    const newParams = new URLSearchParams(searchParams);
    if (isChecked) {
      newParams.set('category', 'by-image');
    } else {
      newParams.delete('category');
    }

    updateSearchParams(newParams);
  };

  const handleSortChange = (event) => {
    const sortOrder = event.target.value;
    sortProductsByPrice(sortOrder);

    const newParams = new URLSearchParams(searchParams);
    newParams.set('sort', sortOrder);

    if (category) {
      newParams.set('category', category);
    }

    updateSearchParams(newParams);
  };

  return (
    <div className={styles.filterBlock}>
      <div>Show all products: {amountDisplayedProducts()}</div>
      <div className={styles.filter}>
        <div>
          Show image only
          <Switch
            checked={checked}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
          />
        </div>
        <div className={styles.sort}>
          <label htmlFor='sort'>Sort by:</label>
          <select
            name='sort'
            id='sort'
            className={styles.select}
            value={currentSort}
            onChange={handleSortChange}
          >
            <option value='increase'>Price Increase</option>
            <option value='decrease'>Price Decrease</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Filter;

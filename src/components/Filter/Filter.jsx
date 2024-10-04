import './filter.css';

import { Switch } from '@mui/material';

import { useState } from 'react';

import { useContext } from 'react';
import { ProductsContext } from '../../context/products-context';

function Filter() {
  const [checked, setChecked] = useState(false);

  const {
    amountDisplayedProducts,
    filterProductsByImage,
    sortProductsByPrice,
  } = useContext(ProductsContext);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    filterProductsByImage(event.target.checked);
  };

  const handleSortChange = (event) => {
    sortProductsByPrice(event.target.value);
  };

  return (
    <div className='filter-block'>
      <div>Show all products: {amountDisplayedProducts()}</div>
      <div className='filter'>
        <div>
          Show image only
          <Switch
            checked={checked}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
          />
        </div>
        <div className='sort'>
          <label htmlFor='sort'>Sort by:</label>
          <select
            name='sort'
            id='sort'
            className='select'
            onChange={handleSortChange}
          >
            <option value='Increase'>Price Increase</option>
            <option value='Decrease'>Price Decrease</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Filter;

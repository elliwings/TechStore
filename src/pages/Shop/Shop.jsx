import Banner from '../../components/Banner/Banner';
import Filter from '../../components/Filter/Filter';
import Pagination from '../../components/Pagination/Pagination';

import './shop.css';

function Shop() {
  return (
    <div>
      <Banner />
      <div className='catalog'>
        <h2>Catalog</h2>
      </div>
      <Filter />
      <Pagination />
    </div>
  );
}

export default Shop;

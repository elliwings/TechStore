import styles from './shop.module.css';

import Banner from '../../components/Banner/Banner';
import Filter from '../../components/Filter/Filter';
import Pagination from '../../components/Pagination/Pagination';

function Shop() {
  return (
    <div>
      <Banner />
      <div className={styles.catalog}>
        <h2>Catalog</h2>
      </div>
      <Filter />
      <Pagination />
    </div>
  );
}

export default Shop;

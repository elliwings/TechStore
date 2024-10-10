import styles from './features.module.css';

import { Truck, ArrowUDownLeft } from 'phosphor-react';

function Features() {
  return (
    <div className={styles.features}>
      <div className={styles.feature}>
        <Truck size={50} />
        <div className={styles.featureInfo}>
          <h3>Free Delivery</h3>
          <p>Enter your postal code for Delivery Availability</p>
        </div>
      </div>
      <hr />
      <div className={styles.feature}>
        <ArrowUDownLeft size={50} />
        <div className={styles.featureInfo}>
          <h3>Free Delivery</h3>
          <p>Enter your postal code for Delivery Availability</p>
        </div>
      </div>
    </div>
  );
}

export default Features;

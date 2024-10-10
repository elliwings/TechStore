import styles from './banner.module.css';

import banner from '../../assets/backgrounds/banner.jpg';

function Banner() {
  return (
    <div className='hero'>
      <img src={banner} alt='banner' className={styles.banner} />
      <div className={styles.info}>
        <h1 className={styles.title}>TECH SHOP</h1>
        <p className={styles.description}>Various designs and brands</p>
      </div>
    </div>
  );
}

export default Banner;

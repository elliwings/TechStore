import './banner.css';

import banner from '../../assets/backgrounds/banner.jpg';

function Banner() {
  return (
    <div className='hero'>
      <img src={banner} alt='banner' className='banner' />
      <div className='info'>
        <h1>TECH SHOP</h1>
        <p>Various designs and brands</p>
      </div>
    </div>
  );
}

export default Banner;

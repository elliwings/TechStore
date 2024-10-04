import './features.css';

import { Truck, ArrowUDownLeft } from 'phosphor-react';

function Features() {
  return (
    <div className='features'>
      <div className='feature'>
        <Truck size={50} />
        <div className='feature-info'>
          <h3>Free Delivery</h3>
          <p>Enter your postal code for Delivery Availability</p>
        </div>
      </div>
      <hr />
      <div className='feature'>
        <ArrowUDownLeft size={50} />
        <div className='feature-info'>
          <h3>Free Delivery</h3>
          <p>Enter your postal code for Delivery Availability</p>
        </div>
      </div>
    </div>
  );
}

export default Features;

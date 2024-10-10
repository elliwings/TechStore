import styles from './about.module.css';

import { SPECIALITIES } from '../../Data/specialitiesData';
import Speciality from '../../components/Speciality/Speciality';

function About() {
  return (
    <div className={styles.aboutUs}>
      <div className={styles.infoSection}>
        <h1 className={styles.title}>About Us</h1>
        <span className={styles.highlight}>
          Who we are and why we do what we do!
        </span>
        <p className={styles.description}>
          With 12 years of experience in the tech industry, TechElli has been
          providing customers with the latest gadgets and reliable service. Our
          commitment to quality and customer satisfaction has made us a trusted
          name in the community. Whether you`re looking for the newest
          smartphone, a powerful laptop, or home entertainment system, our
          knowledgeable staff is here to help you find the perfect product. We
          believe in building long-lasting relationships with our customers, and
          we`re always here to answer your questions and provide support.
        </p>
      </div>
      {SPECIALITIES.map((speciality) => {
        return <Speciality key={speciality.id} data={speciality} />;
      })}
    </div>
  );
}

export default About;

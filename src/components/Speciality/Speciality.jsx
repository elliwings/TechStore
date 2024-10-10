import styles from './speciality.module.css';

function Speciality({ data }) {
  return (
    <div className={styles.specialty}>
      <h2 className={styles.title}>{data.title}</h2>
      <img src={data.img} alt={data.title} className={styles.bgImage} />
      <p className={styles.description}>{data.description}</p>
    </div>
  );
}

export default Speciality;

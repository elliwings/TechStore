import styles from './faq.module.css';

import faq from '../../assets/backgrounds/faq.jpg';

import { FAQS } from '../../Data/faqData';
import FAQItem from '../../components/FAQItem/FAQItem';

function Faq() {
  return (
    <>
      <img src={faq} alt='faq' className={styles.faqImage} />
      <div className={styles.faqList}>
        {FAQS.map((faqitem) => (
          <FAQItem
            key={faqitem.id}
            id={faqitem.id}
            question={faqitem.question}
            answer={faqitem.answer}
          />
        ))}
      </div>
    </>
  );
}

export default Faq;

import styles from './faq-item.module.css';
import classNames from 'classnames';

import { useState } from 'react';
import { Plus, X } from 'phosphor-react';

const FAQItem = ({ id, question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.faqItem}>
      <div className={styles.faqQuestion}>
        <div className={styles.faqNumberQuestion}>
          <div>
            <span className={styles.faqNumber}>
              {id <= 9 && `0${id}`}
              {id > 9 && id}
            </span>
          </div>
          <span className={styles.faqName}>{question}</span>
        </div>
        <button onClick={toggleOpen} className={styles.faqBtn}>
          <span className={styles.faqIcon}>
            {isOpen && <X size={20} color='white' />}
            {!isOpen && <Plus size={20} color='white' />}
          </span>
        </button>
      </div>
      <div
        className={classNames(styles.faqAnswer, {
          [styles.faqOpen]: isOpen,
        })}
      >
        {answer}
      </div>
    </div>
  );
};

export default FAQItem;

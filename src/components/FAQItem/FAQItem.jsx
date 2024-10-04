import './faq-item.css';

import { useState } from 'react';
import { Plus, X } from 'phosphor-react';

const FAQItem = ({ id, question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='faq-item'>
      <div className='faq-question'>
        <div className='faq-number-question'>
          <div>
            <span className='faq-number'>
              {id <= 9 && `0${id}`}
              {id > 9 && id}
            </span>
          </div>
          <span className='faq-name'>{question}</span>
        </div>
        <button onClick={toggleOpen} className='faq-icon'>
          <span>
            {isOpen && <X size={20} color='white' />}
            {!isOpen && <Plus size={20} color='white' />}
          </span>
        </button>
      </div>
      <div className={`faq-answer ${isOpen ? 'open' : ''}`}>{answer}</div>
    </div>
  );
};

export default FAQItem;

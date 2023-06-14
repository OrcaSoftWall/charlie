import React, { useState } from 'react';
import styles from './index.module.css';

const HorizontalAccordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className={styles.horizontalAccordion}>
      {items.map((item, index) => (
        <div
          key={index}
          className={`${styles.item} ${index === activeIndex ? styles.active : ''}`}
          onClick={() => handleItemClick(index)}
        >
          <div className={`${styles.container}`}>
            <div
              className={`${styles.image}`}
              style={{ backgroundImage: `url(${item.backgroundImage})` }}
            >
              <div className={styles.content}>
                <div className={styles.left}>
                  <h2>{item.title}</h2>
                  <p>{item.text}</p>
                </div>
              </div>
            </div>
            <div className={styles.right}>
              {index === activeIndex && <div className={styles.expandedContent}>{item.content}</div>}
            </div>

          </div>
        </div>
      ))}
    </div>
  );
};

export default HorizontalAccordion;

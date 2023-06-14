import React, { useState } from 'react';
import styles from './index.module.css'

const Accordion = ({ title, backgroundImage, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={styles['accordion-item']}>
      <div className={styles['accordion-title']} style={{
        backgroundImage: `url(${backgroundImage})`, backgroundRepeat: "no-repeat", backgroundSize: "contain",
        height: 300
      }} onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <div className={styles['accordion-content']}>{content}</div>}
    </div>
  );
};

export default Accordion;
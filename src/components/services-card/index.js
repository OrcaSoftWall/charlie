import { useState, useContext } from 'react';
import styles from './index.module.css';
import image from '../../images/services_cards/va-services-08.webp';
import Link from '../link'


const ServicesCard = (props) => {
    const [activeTab, setActiveTab] = useState('home');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        // <div className={styles.frame}>
        //         <Link title={<img src={image} className={styles.image} alt="Charlie Virtual Assistant Logo" />} href="/" type="header" />
        // </div>


        <div className={styles['carousel-content']}>
            {/* <span>Charlie Virtual Assistant</span> */}
            <h1>Our promise</h1>
            <hr />
            <p>At Charlie, we believe that working with us is an easy and rewarding experience.
                With our step-by-step process, we promise to deliver outstanding results in perfect symphony with your vision.
                Let us take care of the details while you focus on what matters most to you.
                Get ready to embark on a journey of efficiency, collaboration, and flawless outcomes.
                Together, we will make your projects shine and your dreams a reality.
                Start working with us today and experience the ease and perfection you deserve.</p>
            <a href="#" className={styles['slider-btn']}>contact us</a>
        </div>
    );
};

export default ServicesCard;

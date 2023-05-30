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
        <div className={styles.frame}>
                <Link title={<img src={image} className={styles.image} alt="Charlie Virtual Assistant Logo" />} href="/" type="header" />
        </div>
    );
};

export default ServicesCard;

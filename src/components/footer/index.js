import { useState, useContext } from 'react';
import styles from './index.module.css';
import image from '../../images/Cahrlie_logo2.png';
import Links from './links';

const Footer = () => {

    return (
        <div className={styles.frame}>
            <div className={styles.logo}>
                <div className={styles.logoC}>
                    <a href="/">
                        <img src={image} className={styles.image} alt="Charlie Virtual Assistant Logo" />
                    </a>
                    <p className={styles.mobile}>VirtualCharlie s.r.o © 2023</p>
                </div>
                <div>
                    <p className={styles.normal}>VirtualCharlie s.r.o © 2023</p>
                    <Links />
                </div>
            </div>
        </div>
    );
};

export default Footer;

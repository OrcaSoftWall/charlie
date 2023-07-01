import { useState, useContext } from 'react';
import styles from './index.module.css';
import image from '../../images/Cahrlie_logo2.png';
import MultiLingualContent from '../MultyLingualContent';
// import links from '../../utils/navigation';
import Links from './links';
import Player from '../../utils/audioplayer';

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
                    {/* <ul className={styles.links} >
                        <li><a href="https://www.facebook.com/assistantCharlie" target="_blank" rel="noreferrer" >Facebook</a></li>
                        <li><a href="https://www.linkedin.com/in/hani-kov%C3%A1%C4%8Dov%C3%A1-4b5048b9/" target="_blank" rel="noreferrer" >Linkedin</a></li>
                        <li><a href="https://www.instagram.com/bunny_boy_the_traveller/" target="_blank" rel="noreferrer" >Instagram</a></li>
                        <li><a href="mailto: mariu6@gmail.com">Email</a></li>
                    </ul> */}
                    <Links />
                </div>
            </div>
        </div>
    );
};

export default Footer;

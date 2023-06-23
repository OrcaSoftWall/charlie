import { useState, useContext } from 'react';
import styles from './index.module.css';
import image from '../../images/Cahrlie_logo2.png';
import MultiLingualContent from '../MultyLingualContent';
// import links from '../../utils/navigation';
import Link from '../link';
import Player from '../../utils/audioplayer';

const Footer = () => {
    const links = [
        { contentID: 'home', link: '/home' },
        { contentID: 'services', link: '/services' },
        { contentID: 'pricing', link: '/pricing' },
        { contentID: 'about', link: '/about' },
        { contentID: 'portfolio', link: '/portfolio' },
        { contentID: 'contact', link: '/contact' },
    ];

    return (
        <div className={styles.frame}>
            <div className={styles.logo}>
                <a href="/">
                    <img src={image} className={styles.image} alt="Charlie Virtual Assistant Logo" />
                </a>
                <div>
                    <p>VirtualCharlie s.r.o © 2023</p>
                    <ul className={styles.links} >
                        <li><a href="https://www.facebook.com/assistantCharlie" target="_blank">Facebook</a></li>
                        <li><a href="https://www.linkedin.com/in/hani-kov%C3%A1%C4%8Dov%C3%A1-4b5048b9/" target="_blank">Linkedin</a></li>
                        <li><a href="https://www.instagram.com/bunny_boy_the_traveller/" target="_blank">Instagram</a></li>
                        <li><a href="mailto: mariu6@gmail.com">Email</a></li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Footer;

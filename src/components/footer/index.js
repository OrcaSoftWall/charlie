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
                <p>VirtualCharlie s.r.o © 2023
                    <div>
                        Facebook Linkedin Instagram Email
                    </div>
                </p>
            </div>

            {/* <Player /> */}

            {/* <nav>
                <ul className={styles.tabs}>
                    {links.map((nav) => (
                        <Link
                            key={nav.contentID}
                            href={nav.link}
                            title={<MultiLingualContent contentID={nav.contentID} />}
                            type="header"
                        />
                    ))}
                </ul>
            </nav> */}
        </div>
    );
};

export default Footer;

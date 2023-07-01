import { useState, useContext } from 'react';
import styles from './index.module.css';
import faceIcon from '../../images/social/iconmonstr-facebook-5-64.png'
import linkedIcon from '../../images/social/iconmonstr-linkedin-5-64.png'
import instaIcon from '../../images/social/iconmonstr-instagram-15-64.png'
import mailIcon from '../../images/social/iconmonstr-email-11-64.png'


const Links = () => {

    return (
        <div>
            <ul className={styles.links} >
                <li><a href="https://www.facebook.com/assistantCharlie" target="_blank" rel="noreferrer" >Facebook</a></li>
                <li><a href="https://www.linkedin.com/in/hani-kov%C3%A1%C4%8Dov%C3%A1-4b5048b9/" target="_blank" rel="noreferrer" >Linkedin</a></li>
                <li><a href="https://www.instagram.com/bunny_boy_the_traveller/" target="_blank" rel="noreferrer" >Instagram</a></li>
                <li><a href="mailto: mariu6@gmail.com">Email</a></li>
            </ul>

            <ul className={styles.icons}>
                <li className={styles.icon}><a href="https://www.facebook.com/assistantCharlie" target="_blank" rel="noreferrer" >
                    <img src={faceIcon} alt="Icon 1" />
                </a></li>
                <li className={styles.icon}><a href="https://www.linkedin.com/in/hani-kov%C3%A1%C4%8Dov%C3%A1-4b5048b9/" target="_blank" rel="noreferrer" >
                    <img src={linkedIcon} alt="Icon 2" />
                </a></li>
            </ul>
            <ul className={styles.icons}>
                <li className={styles.icon}><a href="https://www.instagram.com/bunny_boy_the_traveller/" target="_blank" rel="noreferrer" >
                    <img src={instaIcon} alt="Icon 3" />
                </a></li>
                <li className={styles.icon}><a href="mailto: mariu6@gmail.com">
                    <img src={mailIcon} alt="Icon 4" />
                </a></li>
            </ul>
        </div>
    );
};

export default Links;

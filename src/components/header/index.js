import { useState } from 'react';
import styles from "./index.module.css";
import translations from '../../utils/translations';
import image from "../../images/Cahrlie_logo2.png"
import en_round from "../../images/DE.png"

const Header = () => {
    const [language, setLanguage] = useState('en');
    const [activeTab, setActiveTab] = useState('home');

    const handleLanguageChange = (e) => {
        setLanguage(e.target.value);
    };

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const getText = (key) => {
        // Language specific text
        return translations[language][key];
    };

    return (
        <div className={styles.frame}>
            <img src={image} className={styles.image} alt="Charlie Vrtual Assistant Logo" />
            <nav>
                <ul className={styles.tabs}>
                    <li className={activeTab === 'home' ? 'active' : ''} onClick={() => handleTabClick('home')}>
                        {getText('home')}
                    </li>
                    <li className={activeTab === 'services' ? 'active' : ''} onClick={() => handleTabClick('services')}>
                        {getText('services')}
                    </li>
                    <li className={activeTab === 'pricing' ? 'active' : ''} onClick={() => handleTabClick('pricing')}>
                        {getText('pricing')}
                    </li>
                    <li className={activeTab === 'about' ? 'active' : ''} onClick={() => handleTabClick('about')}>
                        {getText('about')}
                    </li>
                    <li className={activeTab === 'contact' ? 'active' : ''} onClick={() => handleTabClick('contact')}>
                        {getText('contact')}
                    </li>
                </ul>
            </nav>
            <img src={en_round} className={styles.image} alt="EN" />
            <div>
                <label htmlFor="language-select">Select Language:</label>
                <select id="language-select" value={language} onChange={handleLanguageChange}>
                    <option value="en">English</option>
                    <option value="de">German</option>
                    <option value="sk">Slovak</option>
                    <option value="cs">Czech</option>
                </select>
            </div>
        </div>
    );
};

export default Header;

import { useState } from 'react';
import styles from "./index.module.css"
import languageTexts from '../../utils/languageTexts';

const LandingPage = () => {
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
    return languageTexts[language][key];
  };

  return (
    <div>
      <nav>
        <ul className="tabs">
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

      <div>
        <h1>{getText('welcome')}</h1>
        <p>{getText('description')}</p>

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

      <footer>
        <p>Contact us: example@example.com</p>
      </footer>
    </div>
  );
};

export default LandingPage;

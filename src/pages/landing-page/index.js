import { useState } from 'react';
import styles from "./index.module.css";
import Header from '../../components/header';
import translations from '../../utils/translations';

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
    return translations[language][key];
  };

  return (
    <div>
      <Header />

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

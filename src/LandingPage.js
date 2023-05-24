import React, { useState } from 'react';

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
    const languageTexts = {
      en: {
        welcome: 'Welcome to our Virtual Assistant Site!',
        description: 'We provide professional virtual assistant services to help you with your tasks.',
        getStarted: 'Get Started',
        home: 'Home',
        services: 'Services',
        pricing: 'Pricing',
        about: 'About',
        contact: 'Contact',
      },
      de: {
        welcome: 'Willkommen auf unserer Virtuellen Assistenten Seite!',
        description: 'Wir bieten professionelle Virtuelle Assistenten Services, um Ihnen bei Ihren Aufgaben zu helfen.',
        getStarted: 'Loslegen',
        home: 'Startseite',
        services: 'Dienstleistungen',
        pricing: 'Preise',
        about: 'Über uns',
        contact: 'Kontakt',
      },
      sk: {
        welcome: 'Vitajte na našej stránke o Virtuálnom Asistentovi!',
        description: 'Poskytujeme profesionálne služby virtuálneho asistenta na pomoc s vašimi úlohami.',
        getStarted: 'Začať',
        home: 'Domov',
        services: 'Služby',
        pricing: 'Ceny',
        about: 'O nás',
        contact: 'Kontakt',
      },
      cs: {
        welcome: 'Vítejte na naší stránce o Virtuálním Asistentovi!',
        description: 'Poskytujeme profesionální služby virtuálního asistenta pro pomoc s vašimi úkoly.',
        getStarted: 'Začít',
        home: 'Domů',
        services: 'Služby',
        pricing: 'Ceník',
        about: 'O nás',
        contact: 'Kontakt',
      },
    };

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

        <button>{getText('getStarted')}</button>
      </div>

      <footer>
        <p>Contact us: example@example.com</p>
      </footer>
    </div>
  );
};

export default LandingPage;

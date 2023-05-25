import { useState } from "react";
import LandingPage from './pages/landing-page';
import { LanguageContext } from './context.js';

const App = (props) => {
  const [language, setLanguage] = useState("en");

  function toggleLanguage() {
    setLanguage((language) => (language === "en" ? "de" : "en"));
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {/* {loading ? <Spinner /> : props.children} */}
      {props.children}
    </LanguageContext.Provider>
  );
};

export default App;

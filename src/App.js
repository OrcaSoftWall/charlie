import { useState } from "react";
import LanguageContext from './context.js';

const App = (props) => {
  const [language, setLanguage] = useState("sk");

  const selectLanguage = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, selectLanguage }}>
    {props.children}
  </LanguageContext.Provider>
  );
};

export default App;


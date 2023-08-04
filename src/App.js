import { useState } from "react";
import LanguageContext from './context.js';

const App = (props) => {

  //using localStorage, so that client doesn't need to select language everytime he enters from the same brouser.
  function localLanguage() {
    if (typeof window === "undefined") return "de"
    const storedLanguage = localStorage.getItem("language")
    return storedLanguage ? JSON.parse(storedLanguage) : "en"
  }
  const [language, setLanguage] = useState(localLanguage());

  // const [language, setLanguage] = useState("en");

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


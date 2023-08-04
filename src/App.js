import { useState } from "react";
import LanguageContext from './context.js';

const App = (props) => {

  //using localStorage, so that client doesn't need to select language everytime he enters from the same brouser.
  // function localLanguage() {
  //   const storedLanguage = localStorage.getItem("language")
  //   return storedLanguage ? JSON.parse(storedLanguage) : "en"
  // }
  // console.log("localLanguage()   ", typeof(localLanguage()))
  // const [language, setLanguage] = useState(localLanguage());
  // console.log("language   ", typeof(language))


  const [language, setLanguage] = useState("en");

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


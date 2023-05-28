
import { createContext } from "react"
import translations from "./utils/translations.js";

const LanguageContext = createContext(translations.en);

export default LanguageContext

// import { createContext } from "react";
// import translations from "./utils/translations.js";

// const LanguageContext = createContext({
//   language: "en",
//   selectLanguage: () => {}
// });

// export default LanguageContext;

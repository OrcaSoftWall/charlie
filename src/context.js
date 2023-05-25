
import { createContext } from "react"
import translations from "./utils/translations.js";

export const LanguageContext = createContext(translations.en);

import { useContext } from "react";
import LanguageContext from '../../context.js';
import translations from '../../utils/translations.js';

/**
 * Utility function to generate text dependant on the language
 * @param {React Component props} props destructured just for the contentID
 * @returns
 */
export default function MultiLingualContent({ contentID }) {
    const { language } = useContext(LanguageContext);
    // console.log(translations[language][contentID]);
    return translations[language][contentID];
}


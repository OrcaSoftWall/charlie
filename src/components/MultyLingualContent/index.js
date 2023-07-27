import { useContext } from "react";
import LanguageContext from '../../context.js';
import translations from '../../utils/translations.js';

/**
 * Utility function to generate text dependant on the language
 * @param {React Component props} props destructured just for the contentID
 * @returns
 */

// export default function MultiLingualContent({ contentID }) {
//     const { language } = useContext(LanguageContext);
//     // console.log(translations[language][contentID]);
//     return translations[language][contentID];
// }

export default function MultiLingualContent({ contentID }) {
    const { language } = useContext(LanguageContext);
    const content = translations[language][contentID];

    if (typeof content === "object" && Object.keys(content)[0][0] === "p") {
        // console.log(Object.keys(content)[0].slice(0, 2))
        // If the content is an object (multiple paragraphs), render each paragraph
        return (
            <div>
                {Object.values(content).map((paragraph, index) => (
                    <div key={index}>
                        <hr />
                        <p>{paragraph}</p>
                    </div>
                ))}
            </div>
        );
    }

    if (typeof content === "object" && Object.keys(content)[0].slice(0, 2) === "ul") {
        // console.log(Object.keys(content)[0][0] === "u")
        // If the content is an object (unordered list), render each list item
        return (
            <>
                {Object.values(content).map((paragraph, index) => (
                    <li key={index}>{paragraph}</li>
                ))}
            </>
        );
    }

    // If the content is a single paragraph, render it as is
    return <>{content}</>;
}
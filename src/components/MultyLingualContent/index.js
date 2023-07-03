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

    if (typeof content === "object") {
        console.log(content)
        // If the content is an object (multiple paragraphs), render each paragraph
        return (
            <div>
                {Object.values(content).map((paragraph, index) => (
                    <>
                        <hr />
                        <p key={index}>{paragraph}</p>
                    </>
                ))}
            </div>
        );
    }

    // If the content is a single paragraph, render it as is
    return <>{content}</>;
}
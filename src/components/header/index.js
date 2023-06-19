import { useState, useContext } from 'react';
import styles from './index.module.css';
import image from '../../images/Cahrlie_logo2.png';
import DE_HearthImage from '../../images/DE_Hearth.png';
import DE_SquareImage from '../../images/DE_Square.png';
import CZ_HearthImage from '../../images/CH_Hearth.png';
import CZ_SquareImage from '../../images/CH_Square.png';
import EN_HearthImage from '../../images/UK_Hearth.png';
import EN_SquareImage from '../../images/UK_Square.png';
import SK_HearthImage from '../../images/SK_Hearth.png';
import SK_SquareImage from '../../images/SK_Square.png';
import LanguageButton from '../LanguagleButton';
import MultiLingualContent from '../MultyLingualContent';
import links from '../../utils/navigation';
import Link from '../link';
import Player from '../../utils/audioplayer';
import menuBar from '../../images/menu-clip.png'

const Header = () => {
    const [activeTab, setActiveTab] = useState('home');

    const languageButtons = [
        { id: 1, language: "en", hoverImage: EN_HearthImage, nonHoverImage: EN_SquareImage },
        { id: 2, language: "de", hoverImage: DE_HearthImage, nonHoverImage: DE_SquareImage },
        { id: 3, language: "sk", hoverImage: SK_HearthImage, nonHoverImage: SK_SquareImage },
        { id: 4, language: "cs", hoverImage: CZ_HearthImage, nonHoverImage: CZ_SquareImage }
    ];

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className={styles.frame}>
            <div className={styles.logo}>
                <Link title={<img src={image} className={styles.image} alt="Charlie Virtual Assistant Logo" />} href="/" type="header" />
            </div>

            {/* <Player /> */}

            <nav>
                <ul className={styles.tabs}>
                    {links.map((nav) => (
                        <Link
                        key={nav.contentID}
                        href={nav.link}
                        title={<MultiLingualContent contentID={nav.contentID} />}
                        type="header"
                        />
                    ))}
                        {/* <div className={styles.menuBar}>
                            <img src={menuBar} />
                        </div> */}
                    <div className={styles.languageButtons}>
                        {languageButtons.map((button) => (
                            <LanguageButton
                                key={button.id}
                                language={button.language}
                                hoverImage={button.hoverImage}
                                nonHoverImage={button.nonHoverImage}
                            />
                        ))}
                    </div>
                </ul>
            </nav>
        </div>
    );
};

export default Header;

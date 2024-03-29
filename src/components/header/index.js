import { useState } from 'react';
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
// import Navbar from '../navbar';
import menuBarIcon from '../../images/menu-bar.png'
import leftArrow from '../../images/left_arrow.png'

const Header = () => {
    // const [activeTab, setActiveTab] = useState('home');

    const [click, setClick] = useState(false)
    const handleClick = () => { setClick(!click); setFade(!fade) }
    const closeMobileMenu = () => { setClick(false); setFade(false) }
    const [fade, setFade] = useState(false)

    const languageButtons = [
        { id: 1, language: "en", hoverImage: EN_HearthImage, nonHoverImage: EN_SquareImage },
        { id: 2, language: "de", hoverImage: DE_HearthImage, nonHoverImage: DE_SquareImage },
        { id: 3, language: "sk", hoverImage: SK_HearthImage, nonHoverImage: SK_SquareImage },
        { id: 4, language: "cs", hoverImage: CZ_HearthImage, nonHoverImage: CZ_SquareImage }
    ];

    const Dropmenu = () => {
        return (
            <div className={`${fade ? styles['fade'] : ""}`}  >
                {
                    links.map((nav) => (
                        <Link
                            key={nav.contentID}
                            href={nav.link}
                            title={<MultiLingualContent contentID={nav.contentID} />}
                            type="header"
                            onClick={closeMobileMenu}
                            onAnimationEnd={() => setFade(false)}
                        />
                    ))
                }
            </div>
        )
    }


    return (
        <div className={styles.frame}>
            <div className={styles.logo}>
                <Link title={<img src={image} className={styles.image} alt="Charlie Virtual Assistant Logo" />} href="/" type="header" />
            </div>


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
                    <div className={styles["menu-icon"]} onClick={handleClick} >
                        {click ? <img src={leftArrow} alt="Charlie Virtual assistant left arrow" /> : <img src={menuBarIcon} alt="Charlie Virtual assistant menu bar icon" />}
                    </div>
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
            <nav className={`${styles.mobile} ${fade ? styles['fade'] : ""}`}>
                <ul className={`${styles.tabs}`}>
                    {click ? <Dropmenu /> : ""}
                </ul>
            </nav>
            {/* <Navbar /> */}
        </div>
    );
};

export default Header;

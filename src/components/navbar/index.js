import { useState } from 'react'
// import { Link, NavLink } from "react-router-dom"
import Link from '../link';
import styles from "./index.module.css"
import links from "../../utils/navigation"
import MultiLingualContent from '../MultyLingualContent'
import menuBarIcon from '../../images/menu-bar.png'


function Navbar() {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMobileMenu = () => setClick(false)

    return (
        <>
            <nav className={styles.navbar}>
                <div className={`${styles["navbar-container"]} ${styles.container}`}>
                    <div className={styles["menu-icon"]} onClick={handleClick}>
                        {click ? <img src={menuBarIcon} /> : <img src={menuBarIcon} />}
                    </div>
                    <ul className={click ? `${styles["nav-menu"]} ${styles.active}` : `${styles["nav-menu"]}`}>
                        {links.map((nav) => (
                            <Link
                                className={`${styles["navbar-logo"]}`}
                                onClick={closeMobileMenu}
                                key={nav.contentID}
                                href={nav.link}
                                title={<MultiLingualContent contentID={nav.contentID} />}
                                type="header" />
                        ))}
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar


// https://youtu.be/AVrOr3Mxl20?t=881
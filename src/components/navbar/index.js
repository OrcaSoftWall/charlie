import { useState } from 'react'
import { Link, NavLink } from "react-router-dom"
import styles from "./index.module.css"

function Navbar() => {

    return (
        <>
            <nav className={styles.navbar}>
                <div className={`${styles["navbar-container"]} ${styles.container}`}>
                    <Link className={`${styles["navbar-logo"]}`} onClick={closeMobileMenu} key={nav.contentID} href={nav.link} title={<MultiLingualContent} contentID={nav.contentID} type="header" />
                </div>
            </nav>
        </>
    )
}

export default Navbar


// https://youtu.be/AVrOr3Mxl20?t=881
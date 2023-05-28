import { Link } from "react-router-dom"
import styles from "./index.module.css"

const LinkComponent = ({ title, href, type }) => {
    return (
        <>
            <Link to={href} className={styles[`${type}-link`]}>
                {title}
            </Link>
        </>
    )
}

export default LinkComponent
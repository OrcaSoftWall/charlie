import styles from './index.module.css';
import VApict2 from '../../images/about/Virtual_Assistant_2s.jpg'
import VApict3 from '../../images/about/Virtual_Assistant_3s.jpg'
import VApict4 from '../../images/about/Virtual_Assistant_4s.jpg'


const Circle = () => {
    return (
        <div className={styles.grid}>
            <div className={styles["grid-container"]}>
                <div className={styles.item1}><img src={VApict2} alt="Virtual Assistant About 2" /></div>
                <div className={styles.item2}><img src={VApict3} alt="Virtual Assistant About 3" /></div>
                <div className={styles.item3}><img src={VApict4} alt="Virtual Assistant About 4" /></div>
            </div>
        </div>
    )
}

export default Circle;

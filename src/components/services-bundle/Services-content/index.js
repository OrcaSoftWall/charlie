import styles from './index.module.css';
import MultiLingualContent from '../../MultyLingualContent';

const ServicesContent = (props) => {

    return (
        <div className={styles.content}>
            <div className={styles['carousel-content']}>
                <h1>{<MultiLingualContent contentID={props.title} />}</h1>
                <p>{<MultiLingualContent contentID={props.subtitle} />}</p>
                <hr />
                <p>{<MultiLingualContent contentID={props.text} />}</p>
                <p>{<MultiLingualContent contentID={props.foot} />}</p>
                <a href="/contact" className={styles['slider-btn']}>{<MultiLingualContent contentID="contact" />}</a>
            </div>
        </div>
    )
};

export default ServicesContent;



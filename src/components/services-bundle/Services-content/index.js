import styles from './index.module.css';
import MultiLingualContent from '../../MultyLingualContent';
import Link from '../../link'

const ServicesContent = (props) => {

    return (
        <div className={styles.content}>
            <div className={styles['carousel-content']}>
                <h1>{<MultiLingualContent contentID={props.title} />}</h1>
                <p>{<MultiLingualContent contentID={props.subtitle} />}</p>
                <hr />
                <p>{<MultiLingualContent contentID={props.text} />}</p>
                <p>{<MultiLingualContent contentID={props.foot} />}</p>
                <Link title={<MultiLingualContent contentID="contact" />} href="/contact" type='content' />
            </div>
        </div>
    )
};

export default ServicesContent;



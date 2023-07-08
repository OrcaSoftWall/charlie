import styles from './index.module.css';
import MultiLingualContent from '../MultyLingualContent'
import image from '../../images/services_cards/va-services-08.webp';
import Title from '../title';
// import Link from '../link'


const ContentPriceList = (props) => {

    return (
        <div className={styles['pricelist']}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/3/39/N585AS_sdfg.jpg' alt="plane"/>
            <Title title={<MultiLingualContent contentID={props.title} />} />
            <div className={styles.subtitle} ><MultiLingualContent contentID={props.subtitle} /></div>
            <ul><MultiLingualContent contentID={props.content} /></ul>
        </div>
    );
};

export default ContentPriceList;

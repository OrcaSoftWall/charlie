import styles from './index.module.css';
import MultiLingualContent from '../MultyLingualContent'
import image from '../../images/services_cards/va-services-08.webp';
// import Link from '../link'


const Content = (props) => {

    return (
        <div className={styles['carousel-content']}>
            {/* <span>Charlie Virtual Assistant</span> */}
            {/* <h1><MultiLingualContent contentID='homeTitle' /></h1> */}
            <h1><MultiLingualContent contentID={props.title} /></h1>
            {/* <hr /> */}
            {/* <div><MultiLingualContent contentID='homeText' /></div> */}
            <div><MultiLingualContent contentID={props.text} /></div>
            {/* <a href="/contact" className={styles['slider-btn']}>{<MultiLingualContent contentID="contact" />}</a> */}
            {/* <Link title={<MultiLingualContent contentID="contact" />} href="/contact" type='slider' /> */}
        </div>
    );
};

export default Content;

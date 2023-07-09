import styles from './index.module.css';
import MultiLingualContent from '../MultyLingualContent'
import Title from '../title';
import Link from '../link'
// import Link from '../link'


const ContentPriceList = ({ items }) => {
    return (
        items.map((item, index) => {
            return (
                <div className={styles.pricelist} key={`${index}-div`} >
                    <img src={item.picture} alt={`virtual-assistant-price-${index}`} />
                    <Title title={<MultiLingualContent contentID={item.title} />} />
                    <div className={styles.subtitle} ><MultiLingualContent contentID={item.subtitle} /></div>
                    <ul><MultiLingualContent contentID={item.content} /></ul>
                    <Link title={<MultiLingualContent contentID="contact" />} href="/contact" type='slider' />
                </div>
            )
        })
    )
};

export default ContentPriceList;

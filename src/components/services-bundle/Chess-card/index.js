
import styles from './index.module.css';
import ServicesContent from '../Services-content'
import ServicesPicture from '../Services-picture'

const Services = ({ items }) => {

    return (
        items.map((item, index) => {
            if (index % 2 === 0) {
                return (
                    <div className={styles.board}>
                        <ServicesContent key={`${index}-content`} title={item.title} text={item.text} content={item.content} />
                        <ServicesPicture key={`${index}-picture`} backgroundImage={item.backgroundImage} />
                    </div>
                )
            } else {
                return (
                    <div className={styles.board}>
                        <ServicesPicture key={`${index}-picture`} backgroundImage={item.backgroundImage} />
                        <ServicesContent key={`${index}-content`} title={item.title} text={item.text} content={item.content} />
                    </div>
                )
            }

        }))
}

export default Services;



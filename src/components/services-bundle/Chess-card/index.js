
import styles from './index.module.css';
import ServicesContent from '../Services-content'
import ServicesPicture from '../Services-picture'

const Services = ({ items }) => {
    return (
        items.map((item, index) => {
            if (index % 2 === 0) {
                return (
                    <div className={styles.board} key={`${index}-div`}>
                        <ServicesContent key={`${index}-content`} title={item.title} subtitle={item.subtitle} text={item.text} foot={item.foot} />
                        <ServicesPicture key={`${index}-picture`} backgroundImage={item.backgroundImage} />
                    </div>
                )
            } else {
                return (
                    <div className={styles.board} key={`${index}-div`}>
                        <ServicesPicture key={`${index}-picture`} backgroundImage={item.backgroundImage} />
                        <ServicesContent key={`${index}-content`} title={item.title} subtitle={item.subtitle} text={item.text} foot={item.foot} />
                    </div>
                )
            }

        }))
}

export default Services;



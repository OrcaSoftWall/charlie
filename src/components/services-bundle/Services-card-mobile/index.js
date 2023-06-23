
import styles from './index.module.css';
import ServicesContent from '../Services-content'
import ServicesPicture from '../Services-picture'

const ServicesMobile = ({ items }) => {
   // const isMobile = window.innerWidth <= 768; // Define the breakpoint for mobile screens
    
    return (
        items.map((item, index) => {
            return (
                <div className={`${styles.board} ${styles.mobile}`} key={`${index}-div`} >
                    <ServicesPicture key={`${index}-picture`} backgroundImage={item.backgroundImage} />
                    <ServicesContent key={`${index}-content`} title={item.title} text={item.text} content={item.content} />
                </div>
            )
        })
        )
}

export default ServicesMobile;



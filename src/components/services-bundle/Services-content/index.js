import styles from './index.module.css';

const ServicesContent = (props) => {

    return (
    <div className={styles.content}>
        <div className={styles['carousel-content']}>
             <h1>{props.title}</h1>
             <p>{props.text}</p>
            <hr />
            <p>{props.content}</p>
            <a href="#" className={styles['slider-btn']}>contact us</a>
        </div>
    </div>
    )
};

export default ServicesContent;



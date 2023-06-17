import styles from './index.module.css';

const ServicesPicture = (props) => {

    return (
        <div
            className={`${styles.image}`}
            style={{ backgroundImage: `url(${props.backgroundImage})` }}
        ></div>
    )
};

export default ServicesPicture;



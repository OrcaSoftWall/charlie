import videoBacground from '../../videos/pexels-cup-of-couple-6177737-1080x1920-24fps.mp4';
import styles from "./index.module.css";

const VideoBackG = () => {
    return (
        < div className={styles.video}>
            <video src={videoBacground}  autoPlay loop muted />
        </div>
    )
}
export default VideoBackG
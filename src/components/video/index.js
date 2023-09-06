import videoBacground from '../../videos/va_welcome_video_s.mp4';
import styles from "./index.module.css";

// const VideoBackG = () => {
//     return (
//         < div className={styles.video}>
//             <video src={videoBacground}  autoPlay loop muted />
//         </div>
//     )
// }
// export default VideoBackG


const VideoBackG = () => {
    return (
        <>
            <div className={styles.videoContainerFull} >
                {/* <video src={videoBacground} autoPlay loop muted /> */}
                <video src='https://charlie-va.s3.eu-central-1.amazonaws.com/va_welcome_video_xs_hd.mp4' autoPlay loop muted />
            </div>
            <div className={styles.videoContainerHalf}>
                {/* <div className={styles.videoLeft}> */}
                <video className={styles.videoLeft} src={videoBacground} autoPlay loop muted />
                {/* </div> */}
                {/* <div className={styles.videoRight}> */}
                <video className={styles.videoRight} src={videoBacground} autoPlay loop muted />
                {/* </div> */}
            </div>
        </>
    )
}
export default VideoBackG
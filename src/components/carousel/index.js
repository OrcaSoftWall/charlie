import slider from './slider-data'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, EffectCoverflow, Autoplay } from 'swiper'
import MultiLingualContent from '../MultyLingualContent'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

import styles from './index.module.css'


const Carousel = () => {


    return (
        <div className={styles.carousel}>

            <Swiper
                className={styles.myswiper}
                modules={[Pagination, EffectCoverflow, Autoplay]}
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 3,
                    slideShadows: true
                }}
                loop={true}
                pagination={{ clickable: true }}

                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2
                    },
                    768: {
                        slidesPerView: 1
                    },
                    1024: {
                        slidesPerView: 2
                    },
                    1560: {
                        slidesPerView: 2
                    }
                }}

            >
                {
                    slider.map((data, index) => (
                        <SwiperSlide style={{ backgroundImage: `url(${data.url})` }} className={styles['myswiper-slider']} key={`${index}-carousel-div`} >
                            <div className={styles.swiperContent} >
                                <h2>{data.title}</h2>
                                <p>{data.description}</p>
                                <a href={`${data.url}`} target="_blank" className={styles['slider-btn']}>explore</a>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <div className={styles['carousel-content']}>
                {/* <span>Charlie Virtual Assistant</span> */}
                <h1><MultiLingualContent contentID='homeTitle' /></h1>
                {/* <hr /> */}
                <p><MultiLingualContent contentID='homeText' /></p>
                <a href="#" className={styles['slider-btn']}>contact us</a>
            </div>
        </div>
    )
}

export default Carousel
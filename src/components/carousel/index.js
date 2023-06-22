import slider from './slider-data'
// import bgdonut1 from './image/bg-donut-1.png'
// import bgdonut2 from './image/bg-donut-2.png'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, EffectCoverflow, Autoplay } from 'swiper'

import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

import styles from './index.module.css'


const Carousel = () => {




    return (
        <div className={styles.carousel}>
                <div className={styles['carousel-content']}>
                    <span>discover</span>
                    <h1>Our promise</h1>
                    <hr />
                    <p>At Charlie, we believe that working with us is an easy and rewarding experience. 
                        With our step-by-step process, we promise to deliver outstanding results in perfect symphony with your vision. 
                        Let us take care of the details while you focus on what matters most to you. 
                        Get ready to embark on a journey of efficiency, collaboration, and flawless outcomes. 
                        Together, we will make your projects shine and your dreams a reality. 
                        Start working with us today and experience the ease and perfection you deserve.</p>
                    <a href="#" className={styles['slider-btn']}>contact us</a>
                </div>

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
                    slider.map(data => (
                        <SwiperSlide style={{ backgroundImage: `url(${data.url})` }} className={styles['myswiper-slider']}>
                            <div>
                                <h2>{data.title}</h2>
                                <p>{data.description}</p>
                                <a href={`${data.url}`} target="_blank" className={styles['slider-btn']}>explore</a>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default Carousel
import slider from './slider-data'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, EffectCoverflow, Autoplay } from 'swiper'
import MultiLingualContent from '../MultyLingualContent'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import Link from '../../components/link'
import styles from './index.module.css'
import Content from '../content'


// const Carousel = () => {
const Carousel = (props) => {
    // console.log(Object.values(props))

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
                    delay: 15000,
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
                    // slider.map((data, index) => (
                    Object.values(props).map((data, index) => (
                        <SwiperSlide style={{ backgroundImage: `url(${data.url})` }} className={styles['myswiper-slider']} key={`${index}-carousel-div`} >
                            <div className={styles.swiperContent} >
                                <h2><MultiLingualContent contentID={data.title} /></h2>
                                <p><MultiLingualContent contentID={data.description} /></p>
                                {/* <a href="/contact" className={styles['slider-btn']}>{<MultiLingualContent contentID="contact" />}</a> */}
                                <Link title={<MultiLingualContent contentID="contact" />} href="/contact" type='slider' />
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default Carousel
import './style.css'
import "swiper/css"
import 'swiper/css/navigation'
import Context from '../context'
import { NextArrow, PreviousArrow } from '../svg'
import { useContext, useRef, useState } from 'react'

export const Slider = () => {
    const [slides, setSlides] = useState([
        {
            title: 'Сделано в Армении',
            image: 'madeInArmenia.png',
            background: 'linear-gradient(90deg, #b4d1fb 0%, #ced3f8 100%)'
        },
        {
            title: 'Женский месяц',
            image: 'woman.png',
            background: 'linear-gradient(90deg, #D9F4FC 0%, #D9F4FC 100%)'
        },
        {
            title: 'Электромобили',
            image: 'automobiles.png',
            background: 'linear-gradient(90deg, #DAF5FD 0%, #B4D1FB 100%)'
        },
        {
            title: 'Сделано в Армении',
            image: 'madeInArmenia.png',
            background: 'linear-gradient(90deg, #b4d1fb 0%, #ced3f8 100%)'
        },
        {
            title: 'Женский месяц',
            image: 'woman.png',
            background: 'linear-gradient(90deg, #D9F4FC 0%, #D9F4FC 100%)'
        },
        {
            title: 'Электромобили',
            image: 'automobiles.png',
            background: 'linear-gradient(90deg, #DAF5FD 0%, #B4D1FB 100%)'
        },
        {
            title: 'Сделано в Армении',
            image: 'madeInArmenia.png',
            background: 'linear-gradient(90deg, #b4d1fb 0%, #ced3f8 100%)'
        },
        {
            title: 'Женский месяц',
            image: 'woman.png',
            background: 'linear-gradient(90deg, #D9F4FC 0%, #D9F4FC 100%)'
        },
        {
            title: 'Электромобили',
            image: 'automobiles.png',
            background: 'linear-gradient(90deg, #DAF5FD 0%, #B4D1FB 100%)'
        },
    ])
    const context = useContext(Context)
    const carouselRef = useRef(null)
    const smallScreen = window.matchMedia('(max-width: 425px)').matches
    const bigScreen = window.matchMedia('(min-width: 425px)').matches
    const [swiperRef, setSwiperRef] = useState(null);

    const scrollRight = () => {
        carouselRef.current.scrollBy({
            top: 0,
            left: bigScreen ? 345 : context.windowSize.innerWidth - 20,
            behavior: 'smooth'
        })
        // const newSlides = [...slides]
        // const eachSlide = newSlides.shift()
        // newSlides.push(eachSlide)
        // setSlides(newSlides)
    }

    const scrollLeft = () => {
        carouselRef.current.scrollBy({
            top: 0,
            left: - 345,
            behavior: 'smooth'
        })
        // const newSlides = [...slides]
        // const eachSlide = newSlides.pop()
        // newSlides.unshift(eachSlide)
        // setSlides(newSlides)
    }

    return (
        <div className='mainSlider' >
            <div className='mainSliderArrows'>
                <div className='mainSliderPrev' onClick={scrollLeft}>
                    <PreviousArrow />
                </div>
                <div className='nextArrow mainSliderNext' onClick={scrollRight}>
                    <NextArrow />
                </div>
            </div>
            <div className='slider' ref={carouselRef}>
                {slides.length > 0 && slides.map((e, i) => (
                    <div className='eachSlide' key={i} style={{ background: `${e.background}`, minWidth: smallScreen && context.windowSize.innerWidth - 40 }}>
                        <span>{e.title}</span>
                        <img alt='' src={require(`../../public/${e.image}`)} />
                    </div>
                ))}
            </div>

            {/* <div className='slider' >
                <Swiper
                    onSwiper={setSwiperRef}
                    allowTouchMove={smallScreen ? true : false}
                    loop={true}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                    // breakpoints={{
                    //     320: {
                    //         slidesPerView: 3,
                    //         spaceBetween: 100
                    //     },
                    //     375: {
                    //         slidesPerView: 6,
                    //         spaceBetween: 100,
                    //     },
                    //     425: {
                    //         slidesPerView: 6,
                    //         spaceBetween: 150,
                    //     },
                    //     768: {
                    //         spaceBetween: 180,
                    //     },
                    //     1024: {
                    //         slidesPerView: 6,
                    //         spaceBetween: 180
                    //     },
                    //     1440: {
                    //         slidesPerView: 7,
                    //         spaceBetween: 150
                    //     }

                    // }}
                >
                    {slides.length > 0 && slides.map((e, i) => (
                        <SwiperSlide  key={i}>
                            <div className='eachSlide' style={{ background: `${e.background}`, minWidth: smallScreen && context.windowSize.innerWidth - 40 }}>
                                <span>{e.title}</span>
                                <img alt='' src={require(`../../public/${e.image}`)} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div> */}
        </div>
    )
}
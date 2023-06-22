import './style.css'
import Context from '../context'
import { NextArrow, PreviousArrow } from '../svg'
import { useContext, useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, Navigation } from "swiper"

export const Slider = () => {
    const slides = [
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
    ]
    const context = useContext(Context)
    const carouselRef = useRef(null)
    const smallScreen = window.matchMedia('(max-width: 425px)').matches
    const bigScreen = window.matchMedia('(min-width: 425px)').matches

    useEffect(() => {
        if (bigScreen) {
            carouselRef.current.scrollBy({
                top: 0,
                left: 100,
            })
        } else {
            carouselRef.current.scrollBy({
                top: 0,
                left: 0,
            })
        }
    }, [context.windowSize.innerWidth, bigScreen])

    // const element = document.querySelector('.slider')
    // let lastScrollTop = 0

    // if (element) {
    //     element.onscroll = (e) => {
    //         if (element.scrollTop < lastScrollTop) {
    //             // upscroll 
    //             return;
    //         }
    //         lastScrollTop = element.scrollTop <= 0 ? 0 : element.scrollTop;
    //         if (element.scrollTop + element.offsetHeight >= element.scrollHeight) {
    //             console.log("End");
    //         }
    //     }
    // }

    // useEffect(() => {
    //     if (carouselRef.current.offsetWidth === carouselRef?.current?.scrollLeft) {
    //         alert()
    //     }
    //     console.log(carouselRef?.current?.offsetWidth)
    //     console.log(carouselRef?.current?.scrollLeft)
    // }, [])

    // // console.log(carouselRef?.current?.offsetWidth)

    // setInterval(() => {
    //     carouselRef.current.scrollBy({
    //         top: 0,
    //         left: bigScreen ? 345 : context.windowSize.innerWidth - 20,
    //         behavior: 'smooth'
    //     })
    // }, 3000)

    const scrollRight = () => {
        carouselRef.current.scrollBy({
            top: 0,
            left: bigScreen ? 345 : context.windowSize.innerWidth - 20,
            behavior: 'smooth'
        })
    }

    const scrollLeft = () => {
        carouselRef.current.scrollBy({
            top: 0,
            left: - 345,
            behavior: 'smooth'
        })
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

                {/* <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>
                    <SwiperSlide>Slide 7</SwiperSlide>
                    <SwiperSlide>Slide 8</SwiperSlide>
                    <SwiperSlide>Slide 9</SwiperSlide>
                </Swiper> */}

            </div>
        </div>
    )
}
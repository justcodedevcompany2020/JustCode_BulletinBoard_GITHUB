import './style.css'
import "swiper/css"
import 'swiper/css/navigation'
import 'pure-react-carousel/dist/react-carousel.es.css'
import Context from '../context'
import { useContext, useState } from 'react'
import { NextArrow, PreviousArrow } from '../svg'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel'

export const MainSlider = () => {
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
    const smallScreen = window.matchMedia('(max-width: 425px)').matches

    return (
        <div className='mainSlider' >
            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={40}
                totalSlides={slides.length}
                infinite={true}
                dragEnabled={false}
                visibleSlides={
                    window.matchMedia("(max-width: 500px)").matches ? 1
                        : window.matchMedia("(max-width: 768px)").matches ? 1.5
                            : window.matchMedia("(max-width: 1024px)").matches ? 2
                                : window.matchMedia("(min-width: 1440px)").matches ? 4
                                    : 3
                }
            >
                <Slider>
                    {slides.length > 0 && slides.map((e, i) => (
                        <Slide index={i} key={i}>
                            <div className='eachSlide' key={i} style={{ background: `${e.background}`, minWidth: smallScreen && context.windowSize.innerWidth - 40 }}>
                                <span>{e.title}</span>
                                <img alt='' src={require(`../../public/${e.image}`)} />
                            </div>
                        </Slide>
                    ))}
                </Slider>
                <ButtonBack><div className='previousArrow' style={{ top: '45%', left: 0 }}><PreviousArrow /></div></ButtonBack>
                <ButtonNext><div className='nextArrow' style={{ top: '45%', right: 0 }}><NextArrow /></div></ButtonNext>
            </CarouselProvider>
        </div>
    )
}
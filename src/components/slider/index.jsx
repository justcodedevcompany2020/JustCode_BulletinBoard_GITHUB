import './style.css'
import Context from '../context'
import { NextArrow, PreviousArrow } from '../svg'
import { useContext, useEffect, useRef } from 'react'

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

    useEffect(() => {
        if (context.windowSize.innerWidth > 425) {
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
    }, [context.windowSize.innerWidth])

    const scrollRight = () => {
        carouselRef.current.scrollBy({
            top: 0,
            left: context.windowSize.innerWidth > 425 ? 345 : context.windowSize.innerWidth - 20,
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
            <div className='previousArrow mainSliderPrev' onClick={scrollLeft}>
                <PreviousArrow />
            </div>
            <div className='nextArrow mainSliderNext' onClick={scrollRight}>
                <NextArrow />
            </div>
            <div className='slider' ref={carouselRef}>
                {slides.length > 0 && slides.map((e, i) => (
                    <div className='eachSlide' key={i} style={{ background: `${e.background}`, minWidth: context.windowSize.innerWidth < 425 && context.windowSize.innerWidth - 40 }}>
                        <span>{e.title}</span>
                        <img alt='' src={require(`../../public/${e.image}`)} />
                    </div>
                ))}
            </div>
        </div>
    )
}
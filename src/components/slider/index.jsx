import './style.css'
import { NextArrow, PreviousArrow } from '../svg'
import { Carousel } from '@trendyol-js/react-carousel'

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

    return (
        <div className='mainSlider'>
            {/* <div className='slider'> */}
            <Carousel
                className='slider'
                show={3.5}
                dynamic={true}
                slide={3}
                swiping={false}
                useArrowKeys={true}
                leftArrow={
                    <div className='previousArrow mainSliderPrev'>
                        <PreviousArrow />
                    </div>
                }
                rightArrow={
                    <div className='nextArrow mainSliderNext'>
                        <NextArrow />
                    </div>
                }
                transition={2}
                pageCount={5}
            >
                {slides.length > 0 && slides.map((e, i) => (
                    <div className='eachSlide' key={i} style={{ background: `${e.background}` }}>
                        <span>{e.title}</span>
                        <img alt='' src={require(`../../public/${e.image}`)} />
                    </div>
                ))}
            </Carousel>
            {/* </div> */}
        </div>
    )
}
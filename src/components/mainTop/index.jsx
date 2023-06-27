import './style.css'
import 'pure-react-carousel/dist/react-carousel.es.css'
import { useRef, useState } from 'react'
import { BiggerSign, Heart, HeartFilled, NextArrow, PreviousArrow } from '../svg'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel'
import { Tooltip } from '@mui/material'

export const MainTop = () => {
    const [advertisement, setAdvertisement] = useState([
        {
            price: '300.000 Драм',
            image: 'top.png',
            liked: true,
            description: 'Квартира 56 кв. м.'
        },
        {
            price: '300.000 Драм',
            image: 'top.png',
            liked: false,
            description: 'Квартира 56 кв. м.'
        },
        {
            price: '300.000 Драм',
            image: 'top.png',
            liked: true,
            description: 'Квартира 56 кв. м.'
        },
        {
            price: '300.000 Драм',
            image: 'top.png',
            liked: false,
            description: 'Квартира 56 кв. м.'
        },
        {
            price: '300.000 Драм',
            image: 'top.png',
            liked: true,
            description: 'Квартира 56 кв. м.'
        },
        {
            price: '300.000 Драм',
            image: 'top.png',
            liked: false,
            description: 'Квартира 56 кв. м.'
        },
        {
            price: '300.000 Драм',
            image: 'top.png',
            liked: true,
            description: 'Квартира 56 кв. м.'
        },
        {
            price: '300.000 Драм',
            image: 'top.png',
            liked: false,
            description: 'Квартира 56 кв. м.'
        },
        {
            price: '300.000 Драм',
            image: 'top.png',
            liked: true,
            description: 'Квартира 56 кв. м.'
        },
    ])
    const carouselRef = useRef(null)

    const scrollRight = () => {
        carouselRef.current.scrollBy({
            top: 0,
            left: carouselRef.current.offsetWidth / advertisement.length * 5,
            behavior: 'smooth'
        })
    }

    const scrollLeft = () => {
        carouselRef.current.scrollBy({
            top: 0,
            left: - carouselRef.current.offsetWidth / advertisement.length * 5,
            behavior: 'smooth'
        })
    }

    function handleFavorite(event) {
        let item = [...advertisement]
        item.find(e => e === event).liked = !item.find(e => e === event).liked
        setAdvertisement(item)
    }

    return (
        <div className='mainTop'>
            <div className='topMain' style={{ overflow: 'auto' }}>
                <div className='pageTitle' style={{ marginTop: '20px' }}>
                    <h2>Топ Обявления</h2>
                    <div className='centerDiv' style={{ marginTop: '5px' }}>
                        <BiggerSign />
                    </div>
                </div>
                <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={140}
                    totalSlides={advertisement.length}
                    infinite={true}
                    dragEnabled={false}
                    visibleSlides={
                        window.matchMedia("(max-width: 500px)").matches ? 2
                            : window.matchMedia("(max-width: 560px)").matches ? 2.5
                                : window.matchMedia("(max-width: 768px)").matches ? 3
                                    : window.matchMedia("(max-width: 890px)").matches ? 2.5
                                        : window.matchMedia("(max-width: 1250px)").matches ? 3.5
                                            : window.matchMedia("(max-width: 1220px)").matches ? 4
                                                : window.matchMedia("(max-width: 1440px)").matches ? 4.5
                                                    : window.matchMedia("(max-width: 1550px)").matches ? 5
                                                        : window.matchMedia("(min-width: 1850px)").matches ? 6
                                                            : 5
                    }
                >
                    <Slider>
                        {advertisement.length > 0 && advertisement.map((e, i) => (
                            <Slide index={i} key={i}>
                                <div className='eachTopDiv'>
                                    <img alt='' src={require(`../../public/${e.image}`)} onClick={() => window.location = '/item/1'} />
                                    <div className='topPadding'>
                                        <p>{e.price}</p>
                                        <span>{e.description}</span>
                                    </div>
                                    <div className='topLocation'>
                                        <span>Ереван</span>
                                    </div>
                                    {e.liked ?
                                        <Tooltip title="Удалить из избранного" placement="top-end" arrow>
                                            <div className='eachTopFav' onClick={() => handleFavorite(e)}>
                                                <HeartFilled />
                                            </div>
                                        </Tooltip>
                                        : <Tooltip title="Добавить в избранное" placement="top-end" arrow>
                                            <div className='eachTopFav' onClick={() => handleFavorite(e)}>
                                                <Heart />
                                            </div>
                                        </Tooltip>
                                    }
                                </div>
                            </Slide>
                        ))}
                    </Slider>
                    <ButtonBack><div className='previousArrow' style={{ top: '45%' }}><PreviousArrow /></div></ButtonBack>
                    <ButtonNext><div className='nextArrow' style={{ top: '45%', right: 0 }}><NextArrow /></div></ButtonNext>
                </CarouselProvider>
            </div>
        </div>
    )
}
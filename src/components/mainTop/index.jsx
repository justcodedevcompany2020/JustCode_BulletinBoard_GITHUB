import './style.css'
import { Tooltip } from '@mui/material'
import { BiggerSign, Heart, HeartFilled, NextArrow, PreviousArrow } from '../svg'
import { useRef } from 'react'

export const MainTop = () => {
    const advertisement = [
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
    ]
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

    return (
        <div className='topMain'>
            <div className='mainTop'>
                <div className='pageTitle'>
                    <h2>Топ Обявления</h2>
                    <BiggerSign />
                </div>
                <div className='topArrows'>
                    <div className='menuCategorySlider' ref={carouselRef}>
                        <div className='previousArrow prevArrTop' onClick={scrollLeft}>
                            <PreviousArrow />
                        </div>
                        {advertisement.length > 0 && advertisement.map((e, i) => (
                            <div className='eachMenuTop' key={i}>
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
                                        <div className='topFavorite'>
                                            <HeartFilled />
                                        </div>
                                    </Tooltip>
                                    : <Tooltip title="Добавить в избранное" placement="top-end" arrow>
                                        <div className='topFavorite'>
                                            <Heart />
                                        </div>
                                    </Tooltip>
                                }
                            </div>
                        ))}
                        <div className='nextArrow nextArrTop' onClick={scrollRight}>
                            <NextArrow />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
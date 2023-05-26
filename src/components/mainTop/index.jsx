import './style.css'
import { BiggerSign, Heart, HeartFilled, NextArrow, PreviousArrow } from '../svg'
import { Tooltip } from '@mui/material'

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

    return (
        <div className='topMain'>
            <div className='mainTop'>
                <div className='pageTitle'>
                    <h2>Топ Обявления</h2>
                    <BiggerSign />
                </div>
                <div className='topArrows'>
                    <div className='menuCategorySlider'>
                        <div className='previousArrow prevArrTop'>
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
                        <div className='nextArrow nextArrTop'>
                            <NextArrow />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
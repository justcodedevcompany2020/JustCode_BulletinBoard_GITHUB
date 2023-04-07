import './style.css'
import { Heart, HeartFilled, NextArrow, PreviousArrow } from '../svg'

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
                <h2>Топ Обявления &gt;</h2>
                <div className='topArrows'>
                    <div className='menuCategorySlider'>
                        <div className='previousArrow prevArrTop'>
                            <PreviousArrow />
                        </div>
                        {advertisement.length > 0 && advertisement.map((e, i) => (
                            <div className='eachMenuTop' key={i}>
                                <img alt='' src={require(`../../public/${e.image}`)} onClick={() => window.location = '/single'} />
                                <div className='topPadding'>
                                    <p>{e.price}</p>
                                    <span>{e.description}</span>
                                </div>
                                <div className='topLocation'>
                                    <span>Ереван</span>
                                </div>
                                <div className='topFavorite'>
                                    {e.liked ?
                                        <HeartFilled />
                                        : <Heart />
                                    }
                                </div>
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
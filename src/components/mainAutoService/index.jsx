import './style.css'
import { useState } from 'react'
import { BiggerSign, Heart, HeartFilled } from '../svg'

export const AutoService = () => {
    const [advertisement, setAdvertisement] = useState([
        {
            price: '300.000 Драм',
            image: 'auto.png',
            liked: true,
            description: 'Прокат машин'
        },
        {
            price: '300.000 Драм',
            image: 'auto.png',
            liked: false,
            description: 'Прокат машин'
        },
        {
            price: '300.000 Драм',
            image: 'auto.png',
            liked: true,
            description: 'Прокат машин'
        },
        {
            price: '300.000 Драм',
            image: 'auto.png',
            liked: false,
            description: 'Прокат машин'
        },
        {
            price: '300.000 Драм',
            image: 'auto.png',
            liked: true,
            description: 'Прокат машин'
        },
        {
            price: '300.000 Драм',
            image: 'auto.png',
            liked: false,
            description: 'Прокат машин'
        },
        {
            price: '300.000 Драм',
            image: 'auto.png',
            liked: true,
            description: 'Прокат машин'
        },
        {
            price: '300.000 Драм',
            image: 'auto.png',
            liked: false,
            description: 'Прокат машин'
        },
    ])

    function handleFavorite(event) {
        let item = [...advertisement]
        item.find(e => e === event).liked = !item.find(e => e === event).liked
        setAdvertisement(item)
    }

    return (
        <div>
            <div className='pageTitle'>
                <h2>Автосервис</h2>
                <BiggerSign />
            </div>
            <div className='autoServiceSlider'>
                {advertisement.length > 0 && advertisement.map((e, i) => (
                    <div className='eachMenuTop' key={i} style={{minWidth: 'inherit'}}>
                        <img alt='' src={require(`../../public/${e.image}`)} onClick={() => window.location = '/item/1'} />
                        <div className='topPadding'>
                            <p>{e.price}</p>
                            <span>{e.description}</span>
                        </div>
                        <div className='autoUrgent'>
                            <span>Срочно !</span>
                        </div>
                        <div className='topFavorite' onClick={() => handleFavorite(e)}>
                            {e.liked ?
                                <HeartFilled />
                                : <Heart />
                            }
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
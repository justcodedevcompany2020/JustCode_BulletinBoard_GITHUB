import './style.css'
import { useState } from 'react'
import { Heart, HeartFilled } from '../svg'

export const Similar = () => {
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
            <h2>Похожие объявления</h2>
            <div className='autoServiceSlider'>
                {advertisement.length > 0 && advertisement.map((e, i) => (
                    <div className='eachMenuAuto' key={i}>
                        <img alt='' src={require(`../../public/${e.image}`)} onClick={() => window.location = '/item/1'} />
                        <div className='topPadding'>
                            <p>{e.price}</p>
                            <span>{e.description}</span>
                        </div>
                        <div className='autoUrgentSimilar mainAutoUrge'>
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
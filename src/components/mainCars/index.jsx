import './style.css'
import { useState } from 'react'
import { BiggerSign, Heart, HeartFilled } from '../svg'

export const MainCars = () => {
    const [advertisement, setAdvertisement] = useState([
        {
            price: '300.000 Драм',
            image: 'auto.png',
            liked: false,
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
                <h2>Автомобили</h2>
                <div className='centerDiv' style={{ marginTop: '5px' }}>
                    <BiggerSign />
                </div>
            </div>
            <div className='autoServiceSlider'>
                {advertisement.length > 0 && advertisement.map((e, i) => (
                    <div className='eachMenuAuto' key={i}>
                        <div>
                            <img alt='' src={require(`../../public/${e.image}`)} onClick={() => window.location = '/item/1'} />
                            <div className='urgentTag'>
                                <span>Срочно !</span>
                            </div>
                            <div className='favoriteTag' onClick={() => handleFavorite(e)}>
                                {e.liked ?
                                    <HeartFilled />
                                    : <Heart />
                                }
                            </div>
                        </div>
                        <div className='topPadding'>
                            {e?.price.length > 14
                                ? <p>{e?.price.slice(0, 14) + '...'}</p>
                                : <p>{e?.price}</p>
                            }
                            {e?.description.length > 20
                                ? <span>{e?.description.slice(0, 20) + '...'}</span>
                                : <span>{e?.description}</span>
                            }
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
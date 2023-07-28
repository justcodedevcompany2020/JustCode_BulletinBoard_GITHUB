import './style.css'
import 'pure-react-carousel/dist/react-carousel.es.css'
import { useState } from 'react'
import { Tooltip } from '@mui/material'
import { BiggerSign, Heart, HeartFilled } from '../svg'

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

    function handleFavorite(event) {
        let item = [...advertisement]
        item.find(e => e === event).liked = !item.find(e => e === event).liked
        setAdvertisement(item)
    }

    return (
        <div className='mainTop'>
            <div className='topMain'>
                <div className='pageTitle'>
                    <h2>Топ Обявления</h2>
                    <div className='centerDiv' style={{ marginTop: '5px' }}>
                        <BiggerSign />
                    </div>
                </div>
                <div className='topDisplay'>
                    {advertisement.length > 0 && advertisement.map((e, i) => (
                        <div className='eachTopDiv' key={i}>
                            <img alt='' src={require(`../../public/${e.image}`)} onClick={() => window.location = '/item/1'} />
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
                    ))}
                </div>
            </div>
        </div>
    )
}
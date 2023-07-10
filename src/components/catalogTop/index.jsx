import { useState } from 'react'
import { Heart, HeartFilled } from '../svg'
import './style.css'

export const CatalogTop = () => {
    const [catalogTopItems, setCatalogTopItems] = useState([
        { 
            price: '950.000 $',
            image: 'apartment.png',
            liked: true,
            description: 'Прокат машин',
            buyMe: false,
            urgent: true,
            location: 'Ереван'
        },
        {
            price: '950.000 $',
            image: 'apartment.png',
            liked: false,
            description: 'Прокат машин',
            buyMe: false,
            urgent: false,
            location: 'Ереван'
        },
        {
            price: '950.000 $',
            image: 'apartment.png',
            liked: true,
            description: 'Прокат машин',
            buyMe: true,
            urgent: false,
            location: 'Ереван'
        },
        {
            price: '950.000 $',
            image: 'apartment.png',
            liked: false,
            description: 'Прокат машин',
            buyMe: false,
            urgent: false,
            location: 'Ереван'
        },
    ])

    function handleFavorite(event) {
        let item = [...catalogTopItems]
        item.find(e => e === event).liked = !item.find(e => e === event).liked
        setCatalogTopItems(item)
    }

    return (
        <div className='catalogTop'>
            <div className='catalogItems'>
                {catalogTopItems.length > 0 && catalogTopItems.map((e, i) => (
                    <div className='eachMenuCatalog' key={i}>
                        <img alt='' src={require(`../../public/${e.image}`)} onClick={() => window.location = '/item/1'} />
                        <div className='topPadding'>
                            <p>{e.price}</p>
                            <span>{e.description}</span>
                        </div>
                        <div className='topLocation'>
                            <span>{e.location}</span>
                        </div>
                        {e.urgent &&
                            <div className='profileUrgent'>
                                <span>Срочно !</span>
                            </div>
                        }
                        {e.buyMe &&
                            <div className='profileBuyMe'>
                                <span>Купи меня</span>
                            </div>
                        }
                        <div className='topFavorite profileTopFavorite' onClick={() => handleFavorite(e)}>
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
import './style.css'
import { useState } from 'react'
import { Heart, HeartFilled } from '../svg'

export const SingleSellerRight = () => {
    const [advertisement, setAdvertisement] = useState([
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
        let item = [...advertisement]
        item.find(e => e === event).liked = !item.find(e => e === event).liked
        setAdvertisement(item)
    }

    return (
        <div className='sellerProducts'>
            {advertisement.length > 0 && advertisement.map((e, i) => (
                <div className='eachMenuTop' key={i}>
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
                        <span>{e.location}</span>
                    </div>
                    {e.urgent &&
                        <div className='autoUrgent mainAutoUrge'>
                            <span>Срочно !</span>
                        </div>
                    }
                    {e.buyMe &&
                        <div className='buyMe'>
                            <span>Купи меня</span>
                        </div>
                    }
                    <div className='topFavorite' onClick={() => handleFavorite(e)}>
                        {e.liked ?
                            <HeartFilled />
                            : <Heart />
                        }
                    </div>
                </div>
            ))}
        </div>
    )
}
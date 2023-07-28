import './style.css'
import { useState } from 'react'
import { BiggerSign, Heart, HeartFilled } from '../svg'

export const Appartments = () => {
    const [advertisement, setAdvertisement] = useState([
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
            liked: true,
            description: 'Прокат машин',
            buyMe: false,
            urgent: true,
            location: 'Ереван'
        }, {
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
            liked: false,
            description: 'Прокат машин',
            buyMe: false,
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
        <div className='autoService'>
            <div className='pageTitle'>
                <h2>Продажа квартир</h2>
                <div className='centerDiv' style={{ marginTop: '5px' }}>
                    <BiggerSign />
                </div>
            </div>
            <div className='autoServiceSlider'>
                {advertisement.length > 0 && advertisement.map((e, i) => (
                    <div className='eachMenuAuto' key={i}>
                        <div>
                            <img alt='' src={require(`../../public/${e.image}`)} onClick={() => window.location = '/item/1'} />
                            {e.urgent &&
                                <div className='urgentTag'>
                                    <span>Срочно !</span>
                                </div>
                            }
                            {e.buyMe &&
                                <div className='buyTag'>
                                    <span>Купи меня</span>
                                </div>
                            }
                            <div className='favoriteTag' onClick={() => handleFavorite(e)}>
                                {e.liked ?
                                    <HeartFilled />
                                    : <Heart />
                                }
                            </div>
                            <div className='locationTag' >
                                <span>{e.location}</span>
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
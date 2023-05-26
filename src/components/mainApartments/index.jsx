import { BiggerSign, Heart, HeartFilled } from '../svg'
import './style.css'

export const Appartments = () => {
    const advertisement = [
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
    ]

    return (
        <div className='autoService'>
            <div className='pageTitle'>
                <h2>Продажа квартир</h2>
                <BiggerSign />
            </div>
            <div className='autoServiceSlider'>
                {advertisement.length > 0 && advertisement.map((e, i) => (
                    <div className='eachMenuTop' key={i}>
                        <img alt='' src={require(`../../public/${e.image}`)} onClick={() => window.location = '/item/1'} />
                        <div className='topPadding'>
                            <p>{e.price}</p>
                            <span>{e.description}</span>
                        </div>
                        <div className='topLocation'>
                            <span>{e.location}</span>
                        </div>
                        {e.urgent &&
                            <div className='autoUrgent'>
                                <span>Срочно !</span>
                            </div>
                        }
                        {e.buyMe &&
                            <div className='buyMe'>
                                <span>Купи меня</span>
                            </div>
                        }
                        <div className='topFavorite'>
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
// import './style.css'
import { Heart, HeartFilled } from '../svg'

export const Similar = () => {
    const advertisement = [
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
    ]

    return (
        <div>
            <h2>Похожие объявления</h2>
            <div className='autoServiceSlider'>
                {advertisement.length > 0 && advertisement.map((e, i) => (
                    <div className='eachMenuTop' key={i}>
                        <img alt='' src={require(`../../public/${e.image}`)} onClick={() => window.location = '/item/1'} />
                        <div className='topPadding'>
                            <p>{e.price}</p>
                            <span>{e.description}</span>
                        </div>
                        <div className='autoUrgent'>
                            <span>Срочно !</span>
                        </div>
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
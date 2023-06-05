import './style.css'
import { AddToTop, Heart, HeartFilled } from '../svg'

export const MyInactiveAnnouncements = () => {
    // const advertisement = [
    //     {
    //         price: '950.000 $',
    //         image: 'apartment.png',
    //         liked: true,
    //         description: 'Прокат машин',
    //         buyMe: false,
    //         urgent: true,
    //         location: 'Ереван'
    //     },
    //     {
    //         price: '950.000 $',
    //         image: 'apartment.png',
    //         liked: false,
    //         description: 'Прокат машин',
    //         buyMe: false,
    //         urgent: false,
    //         location: 'Ереван'
    //     },
    //     {
    //         price: '950.000 $',
    //         image: 'apartment.png',
    //         liked: true,
    //         description: 'Прокат машин',
    //         buyMe: true,
    //         urgent: false,
    //         location: 'Ереван'
    //     },
    //     {
    //         price: '950.000 $',
    //         image: 'apartment.png',
    //         liked: false,
    //         description: 'Прокат машин',
    //         buyMe: false,
    //         urgent: false,
    //         location: 'Ереван'
    //     },
    //     {
    //         price: '950.000 $',
    //         image: 'apartment.png',
    //         liked: true,
    //         description: 'Прокат машин',
    //         buyMe: false,
    //         urgent: true,
    //         location: 'Ереван'
    //     },
    //     {
    //         price: '950.000 $',
    //         image: 'apartment.png',
    //         liked: false,
    //         description: 'Прокат машин',
    //         buyMe: false,
    //         urgent: false,
    //         location: 'Ереван'
    //     },
    //     {
    //         price: '950.000 $',
    //         image: 'apartment.png',
    //         liked: true,
    //         description: 'Прокат машин',
    //         buyMe: true,
    //         urgent: false,
    //         location: 'Ереван'
    //     },
    //     {
    //         price: '950.000 $',
    //         image: 'apartment.png',
    //         liked: false,
    //         description: 'Прокат машин',
    //         buyMe: false,
    //         urgent: false,
    //         location: 'Ереван'
    //     },
    //     {
    //         price: '950.000 $',
    //         image: 'apartment.png',
    //         liked: true,
    //         description: 'Прокат машин',
    //         buyMe: false,
    //         urgent: true,
    //         location: 'Ереван'
    //     },
    //     {
    //         price: '950.000 $',
    //         image: 'apartment.png',
    //         liked: false,
    //         description: 'Прокат машин',
    //         buyMe: false,
    //         urgent: false,
    //         location: 'Ереван'
    //     },
    //     {
    //         price: '950.000 $',
    //         image: 'apartment.png',
    //         liked: true,
    //         description: 'Прокат машин',
    //         buyMe: true,
    //         urgent: false,
    //         location: 'Ереван'
    //     },
    //     {
    //         price: '950.000 $',
    //         image: 'apartment.png',
    //         liked: false,
    //         description: 'Прокат машин',
    //         buyMe: false,
    //         urgent: false,
    //         location: 'Ереван'
    //     },
    // ]
    const advertisement = []

    return (
        <div className='catalogItems'>
            {advertisement.length > 0 ? advertisement.map((e, i) => (
                <div className='eachMenuTop catalogImages' key={i}>
                    <img alt='' src={require(`../../public/${e.image}`)} onClick={() => window.location = '/item/1'} />
                    <div className='topPadding'>
                        <p>{e.price}</p>
                        <span>{e.description}</span>
                    </div>
                    <div className='topLocation'>
                        <span>{e.location}</span>
                    </div>
                    {/* <div className='addToTop'>
                        <AddToTop />
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
                    </div> */}
                </div>
            )) : <div className='noActiveAnnouncements'>
                <p>У вас нет неактивных объявлений в данный момент.</p>
            </div>
            }
        </div>
    )
}
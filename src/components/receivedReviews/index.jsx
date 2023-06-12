import './style.css'
import { Star } from '../svg'

export const ReceivedReviews = () => {
    const reviews = [
        {
            image: 'man.png',
            name: 'Алексей',
            date: '13 мар 2023',
            review: 'Лучшая покупка',
            rating: '5.0'
        },
        {
            image: 'man.png',
            name: 'Алексей',
            date: '13 мар 2023',
            review: 'Лучшая покупка',
            rating: '5.0'
        },
        {
            image: 'man.png',
            name: 'Алексей',
            date: '13 мар 2023',
            review: 'Лучшая покупка',
            rating: '5.0'
        },
        {
            image: 'man.png',
            name: 'Алексей',
            date: '13 мар 2023',
            review: 'Лучшая покупка',
            rating: '5.0'
        },
        {
            image: 'man.png',
            name: 'Алексей',
            date: '13 мар 2023',
            review: 'Лучшая покупка',
            rating: '5.0'
        },
    ]

    return (
        <div className='receivedReviews'>
            {reviews.length > 0
                ? reviews.map((e, i) => (
                    <div className='eachReceivedReview' key={i}>
                        <div className='eachReviewLeft'>
                            <img alt='' src={require(`../../public/${e?.image}`)} />
                            <div className='reviewDetails'>
                                <h1>{e?.name}</h1>
                                <h2>{e?.date}</h2>
                                <h3>{e?.review}</h3>
                            </div>
                        </div>
                        <div className='eachReceivedRating'>
                            <span>{e?.rating}</span>
                            <Star />
                        </div>
                    </div>
                ))
                : <div className='noActiveAnnouncements'>
                    <p>Здесь вы найдете все отзывы, которые вам оставили другие пользователи. Вы пока не получали никаких отзывов.</p>
                </div>
            }
        </div>
    )
}
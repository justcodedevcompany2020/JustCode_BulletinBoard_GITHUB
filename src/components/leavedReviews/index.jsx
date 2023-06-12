import './style.css'
import { Star } from '../svg'

export const LeavedReviews = () => {
    const reviews = []

    return (
        <div className='receivedReviews'>
            {reviews.length > 0
                ? reviews.map((e, i) => (
                    <div className='eachReceivedReview' key={i}>
                        <div className='eachReviewLeft'>
                            <img alt='' src={require(`../../public/${e?.image}`)} />
                            <div className='reviewDetails' >
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
                    <p>Здесь вы найдете все отзывы, которые вы оставляли другим пользователям. Вы пока не оставляли никаких отзывов.</p>
                </div>
            }
        </div>
    )
}
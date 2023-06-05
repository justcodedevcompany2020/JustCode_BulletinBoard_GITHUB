import './style.css'
import { CloseIcon, Star } from '../../svg'

export const Reviews = ({ open, setOpen }) => {
    const reviews = [
        {
            image: 'man.png',
            name: 'Алексей',
            date: '13 мар 2023',
            description: 'Лучшая покупка',
            rating: '5.0'
        },
        {
            image: 'man.png',
            name: 'Алексей',
            date: '13 мар 2023',
            description: 'Лучшая покупка',
            rating: '5.0'
        },
        {
            image: 'man.png',
            name: 'Алексей',
            date: '13 мар 2023',
            description: 'Лучшая покупка',
            rating: '5.0'
        },
        {
            image: 'man.png',
            name: 'Алексей',
            date: '13 мар 2023',
            description: 'Лучшая покупка',
            rating: '5.0'
        },
        {
            image: 'man.png',
            name: 'Алексей',
            date: '13 мар 2023',
            description: 'Лучшая покупка',
            rating: '5.0'
        },
        {
            image: 'man.png',
            name: 'Алексей',
            date: '13 мар 2023',
            description: 'Лучшая покупка',
            rating: '5.0'
        },
        {
            image: 'man.png',
            name: 'Алексей',
            date: '13 мар 2023',
            description: 'Лучшая покупка',
            rating: '5.0'
        },
        {
            image: 'man.png',
            name: 'Алексей',
            date: '13 мар 2023',
            description: 'Лучшая покупка',
            rating: '5.0'
        },
        {
            image: 'man.png',
            name: 'Алексей',
            date: '13 мар 2023',
            description: 'Лучшая покупка',
            rating: '5.0'
        },
        {
            image: 'man.png',
            name: 'Алексей',
            date: '13 мар 2023',
            description: 'Лучшая покупка',
            rating: '5.0'
        },
    ]

    return (
        <div className={open ? 'active' : 'inactive'}>
            <div className='pop' style={{ width: '570px', maxHeight: '570px' }}>
                <div className='close' onClick={() => setOpen(false)}>
                    <CloseIcon />
                </div>
                <h1>Рейтинг - 5,0 <Star /></h1>
                <span className='ratePopSpan'>14 оценок</span>
                <div className='loginSeparator' />
                <div className='singleReviews'>
                    {reviews?.map((e, i) => (
                        <div className='eachReview' key={i}>
                            <div className='eachReviewLeft'>
                                <img alt='' src={require(`../../../public/${e?.image}`)} />
                                <div className='eachRevLeRight'>
                                    <h2>{e?.name}</h2>
                                    <span>{e?.date}</span>
                                    <p>{e?.description}</p>
                                </div>
                            </div>
                            <div className='reviewRating'>
                                <span>{e?.rating}</span>
                                <Star />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
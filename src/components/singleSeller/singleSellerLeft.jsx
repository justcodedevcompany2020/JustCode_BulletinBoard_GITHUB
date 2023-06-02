import './style.css'
import { useState } from 'react'
import { Block, Star } from '../svg'
import { Reviews } from '../popup/reviews'
import { WriteReview } from '../popup/writeReview'

export const SingleSellerLeft = () => {
    const [review, setReview] = useState(false)
    const [writeReview, setWriteReview] = useState(false)

    return (
        <div className='sellerLeft'>
            <h1>Алексей Т.</h1>
            <div className='clientInfoTop'>
                <img alt='' src={require('../../public/man.png')} />
                <div className='aboutClient'>
                    <p>Ереван</p>
                    <span>на JustCode с 13 мар 2023</span>
                    <div className='clientRating'>
                        <p>5.0</p>
                        <Star />
                    </div>
                </div>
            </div>
            <div className='singlwSellerButtons'>
                <button className='textButton' onClick={() => setWriteReview(true)}>Написать отзыв</button>
                <WriteReview
                    open={writeReview}
                    setOpen={setWriteReview}
                />
                <button className='callButton blueButton' onClick={() => setReview(true)}>Отзывы</button>
                <Reviews
                    open={review}
                    setOpen={setReview}
                />
            </div>
            <div className='blockSeller'>
                <Block />
                <p>Заблокировать</p>
            </div>
        </div>
    )
}
import './style.css'
import { BiggerSign, NextArrow, PreviousArrow, RatingFilled, RatingUnfilled } from '../svg'

export const MainBusinessAccounts = () => {
    const advertisement = [
        {
            title: 'HD Computers',
            image: 'business.png'
        },
        {
            title: 'HD Computers',
            image: 'business.png'
        },
        {
            title: 'HD Computers',
            image: 'business.png'
        },
        {
            title: 'HD Computers',
            image: 'business.png'
        },
        {
            title: 'HD Computers',
            image: 'business.png'
        },
        {
            title: 'HD Computers',
            image: 'business.png'
        },
        {
            title: 'HD Computers',
            image: 'business.png'
        },
        {
            title: 'HD Computers',
            image: 'business.png'
        },
        {
            title: 'HD Computers',
            image: 'business.png'
        },
    ]

    return (
        <div className='businessCategories'>
            <div className='pageTitle'>
                <h2>Бизнес страницы</h2>
                <BiggerSign />
            </div>
            <div className='businessArrows'>
                <div className='menuCategorySlider'>
                    <div className='previousArrow prevArrBusiness'>
                        <PreviousArrow />
                    </div>
                    {advertisement.length > 0 && advertisement.map((e, i) => (
                        <div className='eachMenuBusiness' key={i}>
                            <img alt='' src={require(`../../public/${e.image}`)} onClick={() => window.location = '/item/1'} />
                            <span>{e.title}</span>
                            <div className='businessRating'>
                                <RatingFilled />
                                <RatingFilled />
                                <RatingFilled />
                                <RatingUnfilled />
                                <RatingUnfilled />
                            </div>
                        </div>
                    ))}
                    <div className='nextArrow nextArrBusiness'>
                        <NextArrow />
                    </div>
                </div>
            </div>
        </div>
    )
}
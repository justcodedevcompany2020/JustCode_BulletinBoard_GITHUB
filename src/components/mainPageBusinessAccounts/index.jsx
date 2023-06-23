import './style.css'
import { BiggerSign, NextArrow, PreviousArrow, RatingFilled, RatingUnfilled } from '../svg'
import { useRef } from 'react'

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

    const carouselRef = useRef(null)

    const scrollRight = () => {
        carouselRef.current.scrollBy({
            top: 0,
            left: carouselRef.current.offsetWidth / advertisement.length * 5,
            behavior: 'smooth'
        })
    }

    const scrollLeft = () => {
        carouselRef.current.scrollBy({
            top: 0,
            left: - carouselRef.current.offsetWidth / advertisement.length * 5,
            behavior: 'smooth'
        })
    }

    return (
        <div className='businessCategories'>
            <div className='pageTitle'>
                <h2>Бизнес страницы</h2>
                <div className='centerDiv' style={{marginTop: '5px'}}>
                    <BiggerSign />
                </div>
            </div>
            <div className='businessArrows'>
                <div className='menuCategorySlider' ref={carouselRef}>
                    <div className='previousArrow prevArrBusiness' onClick={scrollLeft}>
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
                    <div className='nextArrow nextArrBusiness' onClick={scrollRight}>
                        <NextArrow />
                    </div>
                </div>
            </div>
        </div>
    )
}
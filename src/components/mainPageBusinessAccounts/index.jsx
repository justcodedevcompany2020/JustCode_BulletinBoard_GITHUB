import './style.css'
import { useCallback, useRef, useState } from 'react'
import { BiggerSign, NextArrow, PreviousArrow, RatingFilled, RatingUnfilled } from '../svg'

export const MainBusinessAccounts = () => {
    const [advertisement, setAdvertisement] = useState([
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
    ])
    const carouselRef = useRef(null)
    // const [scrollLeft, setScrollLeft] = useState(0)
    // const carouselElementRef = useRef(null)

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

    // let infiniteBusinessSlider = document.querySelector('.infiniteBusinessSlider')
    // const actionHandler = useCallback((move) => {

    //     infiniteBusinessSlider.style.transition = '400ms'

    //     if (move === 'next') {
    //         carouselRef.current += carouselElementRef.current.offsetWidth
    //         console.log(carouselRef.current);
    //         setScrollLeft(-carouselRef.current)
    //     } else if (move === 'prev') {
    //         carouselRef.current -= carouselElementRef.current.offsetWidth
    //         console.log(carouselRef.current);
    //         setScrollLeft(carouselRef.current)
    //     }
    // }, [])

    return (
        <div className='businessCategories'>
            <div className='pageTitle'>
                <h2>Бизнес страницы</h2>
                <div className='centerDiv' style={{ marginTop: '5px' }}>
                    <BiggerSign />
                </div>
            </div>
            <div className='businessArrows'>
                <div className='menuCategorySlider' ref={carouselRef}> {/* style={{ height: carouselRef?.current?.offsetHeight }} */}
                    <div className='previousArrow prevArrBusiness' onClick={scrollLeft}> {/* onClick={() => actionHandler('prev')} */}
                        <PreviousArrow />
                    </div>
                    <div className='infiniteBusinessSlider'> {/* style={{ left: scrollLeft }} */}
                        {advertisement.length > 0 && advertisement.map((e, i) => (
                            <div className='eachMenuBusiness' key={i}> {/* ref={carouselElementRef} */}
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
                    </div>
                    <div className='nextArrow nextArrBusiness' onClick={scrollRight}> {/* onClick={() => actionHandler('next')} */}
                        <NextArrow />
                    </div>
                </div>
            </div>
        </div>
    )
}
import './style.css'
import { useRef, useState } from 'react'
import { BiggerSign, NextArrow, PreviousArrow } from '../svg'

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
                <div className='centerDiv' style={{ marginTop: '5px' }}>
                    <BiggerSign />
                </div>
            </div>
            <div className='businessArrows'>
                <div className='menuCategorySlider' ref={carouselRef}>
                    <div className='previousArrow prevArrBusiness' onClick={scrollLeft}>
                        <PreviousArrow />
                    </div>
                    <div className='infiniteBusinessSlider'>
                        {advertisement.length > 0 && advertisement.map((e, i) => (
                            <img alt='' className='eachMenuBusiness' src={require(`../../public/${e.image}`)} onClick={() => window.location = '/item/1'} />
                        ))}
                    </div>
                    <div className='nextArrow nextArrBusiness' onClick={scrollRight}>
                        <NextArrow />
                    </div>
                </div>
            </div>
        </div>
    )
}
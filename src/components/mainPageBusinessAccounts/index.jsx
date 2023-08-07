import './style.css'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import 'pure-react-carousel/dist/react-carousel.es.css'
import Context from '../context'
import Slider from "react-slick"
import { useState, useRef, useContext } from 'react'
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
    const carouselRef = useRef()
    const context = useContext(Context)

    // const scrollRight = () => {
    //     carouselRef.current.scrollBy({
    //         top: 0,
    //         left: context.windowSize.innerWidth / (advertisement.length) + 200,
    //         behavior: 'smooth'
    //     })
    // }

    // const scrollLeft = () => {
    //     carouselRef.current.scrollBy({
    //         top: 0,
    //         left: - 345,
    //         behavior: 'smooth'
    //     })
    // }

    return (
        <div className='businessCategories'>
            <div className='pageTitle'>
                <h2>Бизнес страницы</h2>
                <div className='centerDiv' style={{ marginTop: '5px' }}>
                    <BiggerSign />
                </div>
            </div>

            <Slider
                dots={false}
                slidesToShow={
                    window.matchMedia("(max-width: 425px)").matches ? 3
                        : window.matchMedia("(max-width: 500px)").matches ? 4
                            : window.matchMedia("(max-width: 768px)").matches ? 5
                                : window.matchMedia("(max-width: 878px)").matches ? 6
                                    : window.matchMedia("(max-width: 1024px)").matches ? 7
                                        : 8
                }
                swipe={false}
                slidesToScroll={5}
                arrows
                infinite
                pauseOnHover
                prevArrow={
                    <div className='mainSliderPrev'>
                        <PreviousArrow />
                    </div>
                }
                nextArrow={
                    <div className='mainSliderNext'>
                        <NextArrow />
                    </div>
                }
            >
                {advertisement.length > 0 && advertisement.map((e, i) => (
                    <img alt='' key={i} className='eachMenuBusiness' src={require(`../../public/${e.image}`)} onClick={() => window.location = '/item/1'} />
                ))}
            </Slider>

            {/* <div className='mainSliderPrev' onClick={scrollLeft}>
                <PreviousArrow />
            </div>
            <div className='mainSliderNext' onClick={scrollRight}>
                <NextArrow />
            </div>
            <div className='businessArrows' ref={carouselRef}>
                {advertisement.length > 0 && advertisement.map((e, i) => (
                    <img alt='' key={i} className='eachMenuBusiness' src={require(`../../public/${e.image}`)} onClick={() => window.location = '/item/1'} />
                ))}
            </div> */}
        </div>
    )
}
import './style.css'
import { Tooltip } from '@mui/material'
import { useRef, useState } from 'react'
import { BiggerSign, Heart, HeartFilled, NextArrow, PreviousArrow } from '../svg'

export const MainTop = () => {
    const [advertisement, setAdvertisement] = useState([
        {
            price: '300.000 Драм',
            image: 'top.png',
            liked: true,
            description: 'Квартира 56 кв. м.'
        },
        {
            price: '300.000 Драм',
            image: 'top.png',
            liked: false,
            description: 'Квартира 56 кв. м.'
        },
        {
            price: '300.000 Драм',
            image: 'top.png',
            liked: true,
            description: 'Квартира 56 кв. м.'
        },
        {
            price: '300.000 Драм',
            image: 'top.png',
            liked: false,
            description: 'Квартира 56 кв. м.'
        },
        {
            price: '300.000 Драм',
            image: 'top.png',
            liked: true,
            description: 'Квартира 56 кв. м.'
        },
        {
            price: '300.000 Драм',
            image: 'top.png',
            liked: false,
            description: 'Квартира 56 кв. м.'
        },
        {
            price: '300.000 Драм',
            image: 'top.png',
            liked: true,
            description: 'Квартира 56 кв. м.'
        },
        {
            price: '300.000 Драм',
            image: 'top.png',
            liked: false,
            description: 'Квартира 56 кв. м.'
        },
        {
            price: '300.000 Драм',
            image: 'top.png',
            liked: true,
            description: 'Квартира 56 кв. м.'
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

    function handleFavorite(event) {
        let item = [...advertisement]
        item.find(e => e === event).liked = !item.find(e => e === event).liked
        setAdvertisement(item)
    }

    return (
        <div className='mainTop'>
            <div className='topMain'>
                <div className='pageTitle' style={{ marginTop: '20px' }}>
                    <h2>Топ Обявления</h2>
                    <div className='centerDiv' style={{ marginTop: '5px' }}>
                        <BiggerSign />
                    </div>
                </div>
                <div className='topArrowsSlider'>
                    <div className='previousArrow prevArrTop' onClick={scrollLeft}>
                        <PreviousArrow />
                    </div>
                    <div className='nextArrow nextArrTop' onClick={scrollRight}>
                        <NextArrow />
                    </div>
                </div>
                <div className='topArrows'>
                    <div className='menuCategorySlider topMenuSlider' ref={carouselRef}>
                        {/* <Swiper
                            onSwiper={setSwiperRef}
                            all owTouchMove={smallScreen ? true : false}
                            loop={true}
                            navigation={smallScreen ? false : true}
                            modules={[Pagination, Navigation]}
                            className="mySwiper"
                            breakpoints={{
                                320: {
                                    slidesPerView: 3,
                                    spaceBetween: 100
                                },
                                375: {
                                    slidesPerView: 6,
                                    spaceBetween: 100,
                                },
                                425: {
                                    slidesPerView: 6,
                                    spaceBetween: 150,
                                },
                                768: {
                                    spaceBetween: 180,
                                },
                                1024: {
                                    slidesPerView: 6,
                                    spaceBetween: 180
                                },
                                1440: {
                                    slidesPerView: 7,
                                    spaceBetween: 150
                                }
        
                            }}
                        >
                            {advertisement.length > 0 && advertisement.map((e, i) => (
                                <SwiperSlide key={i}>
                                    <div className='eachMenuAuto' key={i}>
                                        <img alt='' src={require(`../../public/${e.image}`)} onClick={() => window.location = '/item/1'} />
                                        <div className='topPadding'>
                                            <p>{e.price}</p>
                                            <span>{e.description}</span>
                                        </div>
                                        <div className='topLocation'>
                                            <span>Ереван</span>
                                        </div>
                                        {e.liked
                                            ? <Tooltip title="Удалить из избранного" placement="top-end" arrow>
                                                <div className='topFavorite' onClick={() => handleFavorite(e)}>
                                                    <HeartFilled />
                                                </div>
                                            </Tooltip>
                                            : <Tooltip title="Добавить в избранное" placement="top-end" arrow>
                                                <div className='topFavorite' onClick={() => handleFavorite(e)}>
                                                    <Heart />
                                                </div>
                                            </Tooltip>
                                        }
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper> */}
                        {advertisement.length > 0 && advertisement.map((e, i) => (
                            <div className='eachMenuAuto' key={i}>
                                <img alt='' src={require(`../../public/${e.image}`)} onClick={() => window.location = '/item/1'} />
                                <div className='topPadding'>
                                    <p>{e.price}</p>
                                    <span>{e.description}</span>
                                </div>
                                <div className='topLocation'>
                                    <span>Ереван</span>
                                </div>
                                {e.liked ?
                                    <Tooltip title="Удалить из избранного" placement="top-end" arrow>
                                        <div className='topFavorite' onClick={() => handleFavorite(e)}>
                                            <HeartFilled />
                                        </div>
                                    </Tooltip>
                                    : <Tooltip title="Добавить в избранное" placement="top-end" arrow>
                                        <div className='topFavorite' onClick={() => handleFavorite(e)}>
                                            <Heart />
                                        </div>
                                    </Tooltip>
                                }
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}
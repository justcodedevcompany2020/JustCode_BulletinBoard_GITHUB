import './style.css'
import 'pure-react-carousel/dist/react-carousel.es.css'
import { useState } from 'react'
import { BiggerSign, NextArrow, PreviousArrow } from '../svg'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel'

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

    return (
        <div className='businessCategories'>
            <div className='pageTitle'>
                <h2>Бизнес страницы</h2>
                <div className='centerDiv' style={{ marginTop: '5px' }}>
                    <BiggerSign />
                </div>
            </div>
            <div className='businessArrows' style={{ overflow: 'auto' }}>
                <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={window.matchMedia("(max-width: 1024px)").matches ? 80 : 100}
                    totalSlides={advertisement.length}
                    infinite={true}
                    dragEnabled={false}
                    visibleSlides={
                        window.matchMedia("(max-width: 425px)").matches ? 2.5
                            : window.matchMedia("(max-width: 500px)").matches ? 3
                                : window.matchMedia("(max-width: 540px)").matches ? 3.5
                                    : window.matchMedia("(max-width: 650px)").matches ? 4
                                        : window.matchMedia("(max-width: 768px)").matches ? 5
                                            : window.matchMedia("(max-width: 1100px)").matches ? 4
                                                : window.matchMedia("(max-width: 1350px)").matches ? 4
                                                    : window.matchMedia("(min-width: 1850px)").matches ? 7
                                                        : 6
                    }
                >
                    <Slider>
                        {advertisement.length > 0 && advertisement.map((e, i) => (
                            <Slide index={i} key={i}>
                                <img alt='' className='eachMenuBusiness' src={require(`../../public/${e.image}`)} onClick={() => window.location = '/item/1'} />
                            </Slide>
                        ))}
                    </Slider>
                    <ButtonBack><div className='eachBusDivLeft'><PreviousArrow /></div></ButtonBack>
                    <ButtonNext><div className='eachBusDiv'><NextArrow /></div></ButtonNext>
                </CarouselProvider>
            </div>
        </div>
    )
}
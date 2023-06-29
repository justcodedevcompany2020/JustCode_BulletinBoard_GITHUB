import './style.css'
import 'pure-react-carousel/dist/react-carousel.es.css'
import { NextArrow, PreviousArrow } from '../svg'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel'

export const MainCategories = () => {
    const categories = [
        {
            title: 'Недвижимость',
            image: 'realEstate.png',
            id: 1
        },
        {
            title: 'Недвижимость',
            image: 'realEstate.png',
            id: 2
        },
        {
            title: 'Недвижимость',
            image: 'realEstate.png',
            id: 3
        },
        {
            title: 'Недвижимость',
            image: 'realEstate.png',
            id: 4
        },
        {
            title: 'Недвижимость',
            image: 'realEstate.png',
            id: 5
        },
        {
            title: 'Недвижимость',
            image: 'realEstate.png',
            id: 6
        },
        {
            title: 'Недвижимость',
            image: 'realEstate.png',
            id: 7
        },
        {
            title: 'Недвижимость',
            image: 'realEstate.png',
            id: 8
        },
        {
            title: 'Недвижимость',
            image: 'realEstate.png',
            id: 9
        },
        {
            title: 'Недвижимость',
            image: 'realEstate.png',
            id: 1
        },
        {
            title: 'Недвижимость',
            image: 'realEstate.png',
            id: 2
        },
        {
            title: 'Недвижимость',
            image: 'realEstate.png',
            id: 3
        },
        {
            title: 'Недвижимость',
            image: 'realEstate.png',
            id: 4
        },
        {
            title: 'Недвижимость',
            image: 'realEstate.png',
            id: 5
        },
        {
            title: 'Недвижимость',
            image: 'realEstate.png',
            id: 6
        },
        {
            title: 'Недвижимость',
            image: 'realEstate.png',
            id: 7
        },
        {
            title: 'Недвижимость',
            image: 'realEstate.png',
            id: 8
        },
        {
            title: 'Недвижимость',
            image: 'realEstate.png',
            id: 9
        },
    ]

    function changeBg(inOrOut, id) {
        if (inOrOut === 'in') {
            document.querySelector(`#id${id}`).style.background = '#' + Math.floor(Math.random() * 16777210).toString(16);
        } else {
            document.querySelector(`#id${id}`).style.background = ' #ebebeb';
        }
    }

    return (
        <div className='menuCategories'>
            <h2>Выберите категорию</h2>
            <div className='mainMenuCat'>
                <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={90}
                    totalSlides={categories.length}
                    infinite={true}
                    dragEnabled={false}
                    visibleSlides={
                        window.matchMedia("(max-width: 375px)").matches ? 2
                            : window.matchMedia("(max-width: 576px)").matches ? 3
                                : window.matchMedia("(max-width: 768px)").matches ? 4
                                    : window.matchMedia("(max-width: 890px)").matches ? 5
                                        : window.matchMedia("(max-width: 1024px)").matches ? 6
                                            : window.matchMedia("(max-width: 1220px)").matches ? 7
                                                : 8
                    }
                >
                    <Slider>
                        {categories.length > 0 && categories.map((e, i) => (
                            <Slide index={i} key={i}>
                                <div className='cursor hoverBg' onMouseOver={() => changeBg('in', e?.id)} onMouseLeave={() => changeBg('out', e?.id)}>
                                    <div className='eachMenuCategory' id={`id${e?.id}`} >
                                        <img alt='' src={require(`../../public/${e.image}`)} />
                                    </div>
                                    <div className='hoverDiv' />
                                    <span>{e.title}</span>
                                </div>
                            </Slide>
                        ))}
                    </Slider>
                    <ButtonBack><div className='previousArrow' style={{ top: '45%', left: 0 }}><PreviousArrow /></div></ButtonBack>
                    <ButtonNext><div className='nextArrow' style={{ top: '45%', right: 0 }}><NextArrow /></div></ButtonNext>
                </CarouselProvider>
            </div>
        </div>
    )
}
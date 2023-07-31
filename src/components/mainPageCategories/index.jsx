import './style.css'
import Context from '../context'
import { useContext, useRef } from 'react';
import { NextArrow, PreviousArrow } from '../svg';

export const MainCategories = () => {
    const categories = [
        {
            title: 'Недвижимость',
            image: 'realEstate.png',
            id: 1
        },
        {
            title: 'Легковые автомобили',
            image: 'z2.png',
            id: 2
        },
        {
            title: 'Услуги исполнителей',
            image: 'z3.png',
            id: 3
        },
        {
            title: 'Заявка на услуги',
            image: 'z4.png',
            id: 4
        },
        {
            title: 'Женский гардероб',
            image: 'z5.png',
            id: 5
        },
        {
            title: 'Телефоны и планшеты',
            image: 'z6.png',
            id: 6
        },
        {
            title: 'Запчасти и автотовары',
            image: 'z7.png',
            id: 7
        },
        {
            title: 'Детский гардероб',
            image: 'z8.png',
            id: 8
        },
        {
            title: 'Недвижимость',
            image: 'realEstate.png',
            id: 9
        },
        {
            title: 'Легковые автомобили',
            image: 'z2.png',
            id: 10
        },
        {
            title: 'Услуги исполнителей',
            image: 'z3.png',
            id: 11
        },
        {
            title: 'Заявка на услуги',
            image: 'z4.png',
            id: 12
        },
        {
            title: 'Женский гардероб',
            image: 'z5.png',
            id: 13
        },
        {
            title: 'Телефоны и планшеты',
            image: 'z6.png',
            id: 14
        },
        {
            title: 'Запчасти и автотовары',
            image: 'z7.png',
            id: 15
        },
        {
            title: 'Детский гардероб',
            image: 'z8.png',
            id: 16
        },
    ]

    function changeBg(inOrOut, id) {
        if (inOrOut === 'in') {
            document.querySelector(`#id${id}`).style.background = '#' + Math.floor(Math.random() * 16777210).toString(16);
        } else {
            document.querySelector(`#id${id}`).style.background = ' #ebebeb';
        }
    }

    const carouselRef = useRef()
    const context = useContext(Context)

    const scrollRight = () => {
        carouselRef.current.scrollBy({
            top: 0,
            left: context.windowSize.innerWidth / (categories.length) + 200,
            behavior: 'smooth'
        })
    }

    const scrollLeft = () => {
        carouselRef.current.scrollBy({
            top: 0,
            left: - 345,
            behavior: 'smooth'
        })
    }

    return (
        <div className='menuCategories'>
            <h2>Выберите категорию</h2>
            <div className='mainSliderPrev' onClick={scrollLeft}>
                <PreviousArrow />
            </div>
            <div className='mainSliderNext' onClick={scrollRight}>
                <NextArrow />
            </div>
            <div className='mainMenuCat' ref={carouselRef}>
                {categories.length > 0 && categories.map((e, i) => (
                    <div key={i} className='cursor hoverBg' onMouseOver={() => changeBg('in', e?.id)} onMouseLeave={() => changeBg('out', e?.id)}>
                        <div className='eachMenuCategory' id={`id${e?.id}`} >
                            <img alt='' src={require(`../../public/${e.image}`)} />
                        </div>
                        <div className='hoverDiv' />
                        <span>{e.title}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
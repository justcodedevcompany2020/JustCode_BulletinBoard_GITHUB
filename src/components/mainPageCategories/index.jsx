import './style.css'
import { NextArrow, PreviousArrow } from '../svg'
import { useEffect } from 'react';

export const MainCategories = () => {
    const categories = [
        {
            title: 'Недвижимость',
            image: 'realEstate.png'
        },
        {
            title: 'Недвижимость',
            image: 'realEstate.png'
        },
        {
            title: 'Недвижимость',
            image: 'realEstate.png'
        },
        {
            title: 'Недвижимость',
            image: 'realEstate.png'
        },
        {
            title: 'Недвижимость',
            image: 'realEstate.png'
        },
        {
            title: 'Недвижимость',
            image: 'realEstate.png'
        },
        {
            title: 'Недвижимость',
            image: 'realEstate.png'
        },
        {
            title: 'Недвижимость',
            image: 'realEstate.png'
        },
        {
            title: 'Недвижимость',
            image: 'realEstate.png'
        },
    ]

    useEffect(() => {
        const background = document.querySelectorAll('.eachMenuCategory');
        background.forEach(e => {
            e.onmouseover = function () {
                e.style.background = '#' + Math.floor(Math.random() * 1677721).toString(16);
            }
            e.onmouseleave = function () {
                e.style.background = '#ebebeb';
            }
        })
    }, [document.querySelectorAll('.eachMenuCategory')])

    return (
        <div className='menuCategories'>
            <h2>Выберите категорию</h2>
            <div className='categoriesArrows'>
                <div className='menuCategorySlider'>
                    <div className='previousArrow prevArrBusiness'>
                        <PreviousArrow />
                    </div>
                    {categories.length > 0 && categories.map((e, i) => (
                        <div className='eachMenuCategory' key={i}>
                            <img alt='' src={require(`../../public/${e.image}`)} />
                            <span>{e.title}</span>
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
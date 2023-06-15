import './style.css'
import { useRef } from 'react' 
import { NextArrow, PreviousArrow } from '../svg'

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
    ]
    const carouselRef = useRef(null)

    function changeBg(inOrOut, id) {
        if (inOrOut === 'in') {
            document.querySelector(`#id${id}`).style.background = '#' + Math.floor(Math.random() * 16777210).toString(16);
        } else {
            document.querySelector(`#id${id}`).style.background = ' #ebebeb';
        }
    }

    const scrollRight = () => {
        carouselRef.current.scrollBy({
            top: 0,
            left: carouselRef.current.offsetWidth / categories.length,
            behavior: 'smooth'
        })
    }

    const scrollLeft = () => {
        carouselRef.current.scrollBy({
            top: 0,
            left: - carouselRef.current.offsetWidth / categories.length,
            behavior: 'smooth'
        })
    }

    return (
        <div className='menuCategories'>
            <h2>Выберите категорию</h2>
            <div className='categoriesArrows'>
                <div className='menuCategorySlider' ref={carouselRef}>
                    <div className='previousArrow prevArrBusiness' onClick={scrollLeft}>
                        <PreviousArrow />
                    </div>
                    {categories.length > 0 && categories.map((e, i) => (
                        <div className='cursor hoverBg' key={i} onMouseOver={() => changeBg('in', e?.id)} onMouseLeave={() => changeBg('out', e?.id)}>
                            <div className='eachMenuCategory' id={`id${e?.id}`} >
                                <img alt='' src={require(`../../public/${e.image}`)} />
                            </div>
                            <div className='hoverDiv' />
                            <span>{e.title}</span>
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
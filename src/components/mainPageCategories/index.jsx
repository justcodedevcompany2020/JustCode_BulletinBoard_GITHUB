import './style.css'
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
            <div className='categoriesArrows'>
                <div className='menuCategorySlider'>
                    <div className='previousArrow prevArrBusiness'>
                        <PreviousArrow />
                    </div>
                    {categories.length > 0 && categories.map((e, i) => (
                        <div className='cursor hoverBg' onMouseOver={() => changeBg('in', e?.id)} onMouseLeave={() => changeBg('out', e?.id)}>
                            <div className='eachMenuCategory' id={`id${e?.id}`} key={i}>
                                <img alt='' src={require(`../../public/${e.image}`)} />
                            </div>
                            <div className='hoverDiv' />
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
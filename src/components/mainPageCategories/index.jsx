import './style.css'
import { NextArrow, PreviousArrow } from '../svg'

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
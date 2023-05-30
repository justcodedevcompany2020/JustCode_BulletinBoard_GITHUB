import './mainNavs.css'
import { useState } from 'react'
import { MainNavs } from './mainNavs'
import { Link } from 'react-router-dom'
import { LittleNavs } from './littleNavs'
import { MobileNavs } from './mobileNavs'

export const Navigation = () => {
    const subElectronics = [
        {
            title: 'Женский гардероб',
        },
        {
            title: 'Мужской гардероб',
        },
        {
            title: 'Детский гардероб',
        },
        {
            title: 'Детские товары',
        },
        {
            title: 'Хэндмейд',
        },
        {
            title: 'Телефоны и планшеты',
        },
        {
            title: 'Фото- и видеокамеры',
        },
        {
            title: 'Компьютерная техника',
        },
        {
            title: 'ТВ, аудио, видео',
        },
        {
            title: 'Бытовая техника',
        },
        {
            title: 'Для дома и дачи',
        },
        {
            title: 'Стройматериалы и инструменты',
        },
        {
            title: 'Красота и здоровье',
        }, {
            title: 'Хобби и развлечения',
        }, {
            title: 'Прочее',
        },
    ]
    const subServices = [
        {
            title: 'Category 1',
        },
        {
            title: 'Category 2',
        },
        {
            title: 'Category 3',
        },
        {
            title: 'Category 4',
        },
        {
            title: 'Category 5',
        },
        {
            title: 'Category 6',
        },
        {
            title: 'Category 7',
        },
        {
            title: 'Category 8',
        },
        {
            title: 'Category 9',
        },
        {
            title: 'Category 10',
        },
        {
            title: 'Category 11',
        },
        {
            title: 'Category 12',
        },
        {
            title: 'Category 13',
        },
    ]
    const [openCategories, setOpenCategories] = useState(false)
    const [subcategory, setSubcategory] = useState([])

    return (
        <>
            <div className='navigationShadow'>
                <div className='navigation'>
                    <LittleNavs />
                    <MainNavs openCategories={openCategories} setOpenCategories={setOpenCategories} />
                    <MobileNavs />
                </div>
            </div>
            <div className={openCategories ? 'openCategories' : 'closedCategories'}>
                <div className='mainCats'>
                    <div className='eachMainCat' onMouseOver={() => setSubcategory(subElectronics)}>
                        <Link onClick={() => window.location = `/catalog/1`}>Вещи, электроника и прочее</Link>
                    </div>
                    <div className='eachMainCat' onMouseOver={() => setSubcategory(subServices)}>
                        <Link onClick={() => window.location = `/catalog/1`}>Услуги исполнителей</Link>
                    </div>
                    <div className='eachMainCat' onMouseOver={() => setSubcategory(subElectronics)}>
                        <Link onClick={() => window.location = `/catalog/1`}>Заявки на услуги</Link>
                    </div>
                    <div className='eachMainCat' onMouseOver={() => setSubcategory(subServices)}>
                        <Link onClick={() => window.location = `/catalog/1`}>Недвижимость</Link>
                    </div>
                    <div className='eachMainCat' onMouseOver={() => setSubcategory(subElectronics)}>
                        <Link onClick={() => window.location = `/catalog/1`}>Животные</Link>
                    </div>
                    <div className='eachMainCat' onMouseOver={() => setSubcategory(subServices)}>
                        <Link onClick={() => window.location = `/catalog/1`}>Легковые автомобили</Link>
                    </div>
                    <div className='eachMainCat' onMouseOver={() => setSubcategory(subElectronics)}>
                        <Link onClick={() => window.location = `/catalog/1`}>Спецтехника и мотоциклы</Link>
                    </div>
                    <div className='eachMainCat' onMouseOver={() => setSubcategory(subServices)}>
                        <Link onClick={() => window.location = `/catalog/1`}>Запчасти и автотовары</Link>
                    </div>
                    <div className='eachMainCat' onMouseOver={() => setSubcategory(subElectronics)}>
                        <Link onClick={() => window.location = `/catalog/1`}>Вакансии</Link>
                    </div>
                    <div className='eachMainCat' onMouseOver={() => setSubcategory(subServices)}>
                        <Link onClick={() => window.location = `/catalog/1`}>Для бизнеса</Link>
                    </div>
                </div>
                <div className='subCats'>
                    {subcategory.length > 0 && subcategory.map((e, i) => (
                        <div className='eachMainCat'>
                            <Link onClick={() => window.location = `/catalog/1`}>{e.title}</Link>
                        </div>
                    ))}
                </div>
                <div className='subsubCats'>
                </div>
            </div>
        </>
    )
}
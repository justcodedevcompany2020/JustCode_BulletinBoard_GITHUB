import './style.css'
import { useEffect, useState } from 'react'
import { CatalogItems } from '../../components/catalog'
import { CatalogFilter } from '../../components/catalogFilter'

export const Catalog = () => {
    const navPath = [
        {
            path: 'Главная'
        },
        {
            path: 'Мужской гардероб'
        },
    ]
    const [search, setSearch] = useState('')

    useEffect(() => {
        if (window.location.search) {
            setSearch(window.location.search.slice(8))
        }
    }, [search])

    return (
        <div className='pageBg'>
            <div className='catalog'>
                <div className='catalogAds'>
                    <img alt='' src={require('../../public/catalogAds.png')} />
                </div>
                <div className='navPath' style={{ margin: '30px 0' }}>
                    <ul>
                        {navPath.length > 0 && navPath?.map((e, i) => (
                            (i === navPath.length - 1)
                                ? <li key={i}>{e.path}</li>
                                // stex key-i warning
                                : <>
                                    <li style={{ color: '#7791F7' }} key={i}>{e.path}</li>
                                    <span>&bull;</span>
                                </>
                        ))}
                    </ul>
                </div>
                <h1>{search ? `Результаты по запросу «${search}»` : 'Мужской гардероб'}</h1>
                <div className='mainCatalog'>
                    <CatalogFilter />
                    <div className='changeCat'>
                        <select className='filter'>
                            <option value={'default'}>По умолчению</option>
                            <option value={'default'}>По умолчению</option>
                            <option value={'default'}>По умолчению</option>
                        </select>
                        <CatalogItems />
                        <span>Измените условия поиска, чтобы увидеть больше товаров</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
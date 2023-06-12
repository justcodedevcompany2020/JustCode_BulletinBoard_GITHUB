import './style.css'
import { useEffect, useState } from 'react'
import { NavPath } from '../../components/navPath'
import { CatalogItems } from '../../components/catalog'
import { CatalogFilter } from '../../components/catalogFilter'

export const Catalog = () => {
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
                <NavPath width={'100%'} />
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
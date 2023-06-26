import './style.css'
import { useEffect, useState } from 'react'
import { NavPath } from '../../components/navPath'
import { CatalogItems } from '../../components/catalog'
import { GreaterThan, LessThan } from '../../components/svg'
import { CatalogFilter } from '../../components/catalogFilter'

export const Catalog = () => {
    const [search, setSearch] = useState('')
    const [openRegions, setOpenRegions] = useState(false)
    const [selectedRegion, setSelectedRegion] = useState('По умолчению')
    const regions = [
        {
            id: 1,
            region: 'По умолчению',
        },
        {
            id: 2,
            region: 'По умолчению',
        },
        {
            id: 3,
            region: 'По умолчению',
        },
        {
            id: 4,
            region: 'По умолчению',
        },
        {
            id: 5,
            region: 'По умолчению',
        },
    ]

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
                        <div className='changeCatTop'>
                            <div className='changeRegion' style={{ justifyContent: 'flex-end' }}>
                                <div className='selectRegion' onClick={() => setOpenRegions(!openRegions)} style={{ border: !openRegions && '1px solid transparent', width: 'initial' }}>
                                    <div className='currentRegion'>
                                        <span>{selectedRegion}</span>
                                        {openRegions ? <GreaterThan /> : <LessThan />}
                                    </div>
                                    <div className={openRegions ? 'regionDropdown' : 'inactive'}>
                                        {openRegions && regions.map((e, i) => (
                                            <div className='eachRegion' key={i} onClick={() => {
                                                setSelectedRegion(e?.region)
                                                setOpenRegions(false)
                                            }}>
                                                <span>{e?.region}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <CatalogItems />
                        <span>Измените условия поиска, чтобы увидеть больше товаров</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
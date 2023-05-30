import './style.css'
import Context from '../context/context'
import { useState, useContext } from 'react'
import { CatalogHamburger, SearchIcon } from '../svg'
import { CatalogFilterHamburger } from '../catalogFilterHamburger'

export const Searchbar = () => {
    const context = useContext(Context)
    const [search, setSearch] = useState('')
    const [openCatHamburger, setOpenCatHamburger] = useState(false)

    return (
        <div className='search'>
            <SearchIcon />
            <input placeholder='Поиск..' value={search} onChange={(e) => setSearch(e.target.value)} />
            {window.location.pathname.includes('/catalog') && context.windowSize.innerWidth <= 768
                ? <div className='catalogHam' onClick={() => setOpenCatHamburger(true)}><CatalogHamburger /></div>
                : <button>Найти</button>
            }
            <CatalogFilterHamburger
                open={openCatHamburger}
                setOpen={setOpenCatHamburger}
            />
        </div>
    )
}
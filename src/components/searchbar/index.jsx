import './style.css'
import Context from '../context'
import { useState, useContext } from 'react'
import { CatalogHamburger, SearchIcon } from '../svg'
import { CatalogFilterHamburger } from '../catalogFilterHamburger'

export const Searchbar = () => {
    const context = useContext(Context)
    const [search, setSearch] = useState('')
    const [openCatHamburger, setOpenCatHamburger] = useState(false)

    function goSearch() {
        if (search.length > 0) {
            window.location = `/catalog/1?search=${search}`
        }
    }

    return (
        <div className='search'>
            <SearchIcon />
            <input placeholder='Поиск..' value={search} onChange={(e) => setSearch(e.target.value)} onKeyDown={e => e.key === 'Enter' && goSearch()} />
            {window.location.pathname.includes('/catalog') && context.windowSize.innerWidth <= 768
                ? <div className='catalogHam' onClick={() => setOpenCatHamburger(true)}><CatalogHamburger /></div>
                : <button onClick={goSearch}>Найти</button>
            }
            <CatalogFilterHamburger
                open={openCatHamburger}
                setOpen={setOpenCatHamburger}
            />
        </div>
    )
}
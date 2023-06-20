import './style.css'
import { useState } from 'react'
import { CatalogHamburger, SearchIcon } from '../svg'
import { CatalogFilterHamburger } from '../catalogFilterHamburger'

export const Searchbar = () => {
    const [search, setSearch] = useState('')
    const [openCatHamburger, setOpenCatHamburger] = useState(false)
    const smallScreen = window.matchMedia("(max-width: 768px)").matches

    function goSearch() {
        if (search.length > 0) {
            window.location = `/catalog/1?search=${search}`
        }
    }

    return (
        <div className='search'>
            <SearchIcon />
            <input placeholder='Поиск..' value={search} onChange={(e) => setSearch(e.target.value)} onKeyDown={e => e.key === 'Enter' && goSearch()} />
            {window.location.pathname.includes('/catalog') && smallScreen
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
import './style.css'
import { useState } from 'react'
import { SearchIcon } from '../svg'

export const Search = () => {
    const [search, setSearch] = useState('')

    return (
        <div className='search'>
            <SearchIcon />
            <input placeholder='Поиск..' value={search} onChange={(e) => setSearch(e.target.value)} />
            <button>Найти</button>
        </div>
    )
}
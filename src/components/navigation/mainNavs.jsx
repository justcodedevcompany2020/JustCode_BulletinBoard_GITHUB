import './mainNavs.css'
import { Search } from '../search'
import { Categories } from '../menuCategories'

export const MainNavs = () => {
    return (
        <div className='mainNavs'>
            <div className='eachMainNav' onClick={() => window.location = '/'}>
                <h1>JustCode</h1>
            </div>
            <div className='eachMainNav'>
                <Categories />
            </div>
            <div className='eachMainNav' style={{ width: '65%' }}>
                <Search />
            </div>
            <div className='eachMainNav'>
                <button className='navGreenButton'>Разместить обьявление</button>
            </div>
            <div className='eachMainNav'>
                <button className='navGreyButton' onClick={() => window.location = '/login'}>Войти</button>
            </div>
        </div>
    )
}
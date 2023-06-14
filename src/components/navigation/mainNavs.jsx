import './mainNavs.css'
import { Searchbar } from '../searchbar'
import { useSelector } from 'react-redux'
import { Categories } from '../menuCategories'

export const MainNavs = () => {
    const user = useSelector(st => st.Auth_reducer.user)

    return (
        <div className='mainNavs'>
            <div className='eachMainNav' onClick={() => window.location = '/'}>
                <h1>JustCode</h1>
            </div>
            <div className='eachMainNav'>
                <Categories/>
            </div>
            <div className='eachMainNav' style={{ width: '65%' }}>
                <Searchbar />
            </div>
            <div className='eachMainNav'>
                <button className='navGreenButton' onClick={() => window.location = '/create'}>Разместить обьявление</button>
            </div>
            {user
                ? <div className='eachMainNav'>
                    <button className='navGreyButton' onClick={() => window.location = '/profile'}>Мой профиль</button>
                </div>
                : <div className='eachMainNav'>
                    <button className='navGreyButton' onClick={() => window.location = '/login'}>Войти</button>
                </div>
            }
        </div>
    )
}
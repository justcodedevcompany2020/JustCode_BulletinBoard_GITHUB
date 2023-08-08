import './mainNavs.css'
import { Searchbar } from '../searchbar'
import { useSelector } from 'react-redux'
import { Categories } from '../menuCategories'
import { DefaultUser, NavbarLogo } from '../svg'

export const MainNavs = () => {
    const user = useSelector(st => st.Auth_reducer.user)
    console.log(user)

    return (
        <div className='mainNavs'>
            <div className='mainNavLeft' style={{ width: '70%', flex: 1 }}>
                <div className='eachMainNav' onClick={() => window.location = '/'}>
                    <NavbarLogo />
                </div>
                <div className='eachMainNav'>
                    <Categories />
                </div>
                <div className='eachMainNav' style={{ width: '100%' }} >
                    <Searchbar />
                </div>
            </div>
            <div className='mainNavLeft'>
                <div className='eachMainNav'>
                    <button className='navGreenButton' onClick={() => window.location = '/create'}>Разместить обьявление</button>
                </div>
                {user
                    ? <div className='eachMainNav myAvatar' onClick={() => window.location = '/profile/profile'}>
                        <DefaultUser />
                    </div>
                    : <div className='eachMainNav'>
                        <button className='navGreyButton' onClick={() => window.location = '/auth/login'}>Войти</button>
                    </div>
                }
            </div>
        </div>
    )
}


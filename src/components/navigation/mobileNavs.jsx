import './mainNavs.css'
import { Search } from '../search'
import { MobileCategories, NavigationCamera } from '../svg'

export const MobileNavs = () => {
    return (
        <div className='mobileNavigation'>
            <div className='mobileNavs'>
                <div>
                    <MobileCategories />
                </div>
                <h1 onClick={() => window.location = '/'}>JustCode</h1>
                <div className='mobileCamera'>
                    <NavigationCamera />
                </div>
            </div>
            <div className='eachMainNav'>
                <Search />
            </div>
        </div>
    )
}
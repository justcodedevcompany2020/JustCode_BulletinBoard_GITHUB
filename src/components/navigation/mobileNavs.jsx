import './mainNavs.css'
import { Searchbar } from '../searchbar'
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
                <Searchbar />
            </div>
        </div>
    )
}
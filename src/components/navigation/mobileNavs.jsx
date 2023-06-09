import './mainNavs.css'
import { Searchbar } from '../searchbar'
import { MobileCategories, NavigationCamera } from '../svg'

export const MobileNavs = ({ setOpenMobileCategories }) => {
    return (
        <div className='mobileNavigation'>
            <div className='mobileNavs'>
                <div onClick={() => {
                    setOpenMobileCategories(true)
                }}>
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
import './mainNavs.css'
import { Searchbar } from '../searchbar'
import { MobileCategories } from '../svg'

export const MobileNavs = ({ setOpenMobileCategories, setOpenMobileMenu }) => {
    return (
        <div className='mobileNavigation'>
            <div className='mobileNavs'>
                <div onClick={() => setOpenMobileCategories(true)}>
                    <MobileCategories />
                </div>
                <h1 onClick={() => window.location = '/'}>JustCode</h1>
                <div onClick={() => setOpenMobileMenu(true)}>
                    <MobileCategories />
                </div>
            </div>
            <div className='eachMainNav'>
                <Searchbar />
            </div>
        </div>
    )
}
import './mainNavs.css'
import { Searchbar } from '../searchbar'
import { MobileCategories } from '../svg'
import { useSelector, useDispatch } from 'react-redux'
import { CloseSearch, OpenSearch } from '../../Redux/action/sidebar_action'

export const MobileNavs = ({ setOpenMobileCategories, setOpenMobileMenu }) => {
    const dispatch = useDispatch()
    const user = useSelector(st => st.Auth_reducer.user)
    const openSearch = useSelector(st => st.Sidebar_reducer.openSearch)

    return (
        <div className='mobileNavigation'>
            <div className='mobileNavs'>
                <div onClick={() => setOpenMobileCategories(true)}>
                    <MobileCategories />
                </div>
                <h1 onClick={() => window.location = '/'}>JustCode</h1>
                <div className='mobileTopAvatar'>
                    <div className='myAvatar'>
                        <img alt='' src={require('../../public/blackSearch.png')} onClick={() => openSearch ? dispatch(CloseSearch()) : dispatch(OpenSearch())} />
                    </div>
                    <div className='myAvatar' onClick={() => user ? setOpenMobileMenu(true) : window.location = '/auth/login'} >
                        <img alt='' src={require('../../public/userDefault.png')} />
                    </div>
                </div>
            </div>
            {openSearch && <div className='eachMainNav'>
                <Searchbar />
            </div>}
        </div>
    )
}
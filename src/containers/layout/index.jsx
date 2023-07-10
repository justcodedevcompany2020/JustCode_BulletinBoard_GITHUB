import './style.css'
import { Outlet } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { TopAd } from '../../components/topAd'
import { Footer } from '../../components/footer'
import { Navigation } from '../../components/navigation'
import { CloseMenu } from '../../Redux/action/sidebar_action'

export const Layout = () => {
    const dispatch = useDispatch()

    return (
        <div onClick={() => dispatch(CloseMenu())} className='layout'>
            <TopAd />
            <Navigation />
            <Outlet />
            <Footer />
        </div>
    )
}
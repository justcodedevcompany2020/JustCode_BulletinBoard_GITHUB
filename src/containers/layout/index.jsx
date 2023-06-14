import './style.css'
import { Outlet } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Footer } from '../../components/footer'
import { Navigation } from '../../components/navigation'
import { CloseMenu } from '../../Redux/action/auth_action'

export const Layout = () => {
    const dispatch = useDispatch()
    return (
        <div onClick={() => dispatch(CloseMenu())} className='layout'>
            <Navigation />
            <Outlet />
            <Footer />
        </div>
    )
}
import './style.css'
import { Outlet } from 'react-router-dom'
import { Footer } from '../../components/footer'
import { Navigation } from '../../components/navigation'

export const Layout = () => {
    return (
        <div className='layout'>
            <Navigation />
            <Outlet />
            <Footer />
        </div>
    )
}
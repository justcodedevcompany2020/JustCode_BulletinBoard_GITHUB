import './style.css'
import { Outlet } from 'react-router-dom'
import { Sidebar } from '../../components/sidebar'
import { NavPath } from '../../components/navPath'

export const ProfileLayout = () => {
    return (
        <div>
            <div className='pageBg'>
                <NavPath />
                <div className='profileLayout'>
                    <Sidebar />
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
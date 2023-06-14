import './style.css'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Sidebar } from '../../components/sidebar'
import { NavPath } from '../../components/navPath'
import { ProfileUser } from '../../components/profileUser'
import { MobileSidebar } from '../../components/mobileSidebar'

export const ProfileLayout = () => {
    const sidebar = [
        {
            title: 'Мои объявления',
            image: 'announcement.png',
            active_image: 'active_announcement.png',
            path: '/profile/profile',
            id: 1
        },
        {
            title: 'Сообщения',
            image: 'messages.png',
            active_image: 'active_messages.png',
            path: '/profile/messages',
            id: 2
        },
        {
            title: 'Отзывы',
            image: 'reviews.png',
            active_image: 'active_reviews.png',
            path: '/profile/reviews',
            id: 3
        },
        {
            title: 'Уведомления',
            image: 'notifications.png',
            active_image: 'active_notifications.png',
            path: '/profile/notifications',
            id: 4
        },
        {
            title: 'Избранные',
            image: 'favorites.png',
            active_image: 'active_favorites.png',
            path: '/profile/favorites',
            id: 5
        },
        {
            title: 'Кошелёк',
            image: 'wallet.png',
            active_image: 'active_wallet.png',
            path: '/profile/wallet',
            id: 6
        },
        {
            title: 'Настройки',
            image: 'settings.png',
            active_image: 'active_settings.png',
            path: '/profile/settings',
            id: 7
        },
        {
            title: 'Выход',
            image: 'logout.png',
            active_image: 'logout.png',
            path: '/profile/logout',
            id: 8
        },
    ]
    const [active, setActive] = useState(sidebar.find(e => e.path === window.location.pathname))

    return (
        <div className='pageBg'>
            <NavPath width={'80%'} />
            <div className='mobileSidebarDisplay'>
                <MobileSidebar sidebar={sidebar} active={active} setActive={setActive} />
                <ProfileUser />
            </div>
            <div className='profileLayout'>
                <div className='sidebarDisplay'>
                    <Sidebar sidebar={sidebar} active={active} setActive={setActive} />
                </div>
                <div className='profileLayoutOutline'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
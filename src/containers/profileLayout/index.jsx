import './style.css'
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
            path: '/profile',
        },
        {
            title: 'Сообщения',
            image: 'messages.png',
            active_image: 'active_messages.png',
            path: '/profile/messages',
        },
        {
            title: 'Отзывы',
            image: 'reviews.png',
            active_image: 'active_reviews.png',
            path: '/profile/reviews',
        },
        {
            title: 'Уведомления',
            image: 'notifications.png',
            active_image: 'active_notifications.png',
            path: '/profile/notifications',
        },
        {
            title: 'Избранные',
            image: 'favorites.png',
            active_image: 'active_favorites.png',
            path: '/profile/favorites',
        },
        {
            title: 'Кошелёк',
            image: 'wallet.png',
            active_image: 'active_wallet.png',
            path: '/profile/wallet',
        },
        {
            title: 'Настройки',
            image: 'settings.png',
            active_image: 'active_settings.png',
            path: '/profile/settings',
        },
        {
            title: 'Выход',
            image: 'logout.png',
            active_image: 'logout.png',
            path: '/profile/logout',
        },
    ]

    return (
        <div className='pageBg'>
            <NavPath />
            <div className='mobileSidebarDisplay'>
                <MobileSidebar sidebar={sidebar} />
                <ProfileUser />
            </div>
            <div className='profileLayout'>
                <div className='sidebarDisplay'>
                    <Sidebar sidebar={sidebar} />
                </div>
                <div className='profileLayoutOutline'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
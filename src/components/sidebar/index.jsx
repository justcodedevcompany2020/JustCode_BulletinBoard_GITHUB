import './style.css'
import { Star } from '../svg'
import { useState } from 'react'

export const Sidebar = () => {
    const sidebar = [
        {
            title: 'Мои объявления',
            image: 'announcement.png',
            active_image: 'active_announcement.png',
            path: '/myAnnouncements',
        },
        {
            title: 'Сообщения',
            image: 'messages.png',
            active_image: 'active_messages.png',
            path: '/messages',
        },
        {
            title: 'Отзывы',
            image: 'reviews.png',
            active_image: 'active_reviews.png',
            path: '/reviews',
        },
        {
            title: 'Уведомления',
            image: 'notifications.png',
            active_image: 'active_notifications.png',
            path: '/notifications',
        },
        {
            title: 'Избранные',
            image: 'favorites.png',
            active_image: 'active_favorites.png',
            path: '/favorites',
        },
        {
            title: 'Кошелёк',
            image: 'wallet.png',
            active_image: 'active_wallet.png',
            path: '/wallet',
        },
        {
            title: 'Настройки',
            image: 'settings.png',
            active_image: 'active_settings.png',
            path: '/settings',
        },
        {
            title: 'Выход',
            image: 'logout.png',
            active_image: 'logout.png',
            // path: '/',
        },
    ]
    const [active, setActive] = useState(false)


    const setIcon = (e) => {
        sidebar.filter((event, index) => {
            if (e === event) {
                setActive(index)
            }
        })
    }

    return (
        <div className='sidebar'>
            <h1>Алексей Т.</h1>
            <div className='profileUser'>
                <img alt='' src={require(`../../public/man.png`)} />
                <div className='profileUserJoin'>
                    <span>на JustCode с 13 мар 2023</span>
                    <div className='businessRating'>
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                    </div>
                </div>
            </div>
            <div className='loginSeparator' />
            <div className='sidebarItems'>
                {sidebar.map((e, i) => (
                    <div key={i} className='eachSidebarItem' onMouseOver={() => setIcon(e)} onMouseLeave={() => setActive(false)} >
                        {/* test arac chi */}
                        {/* {window.location.pathname === `/${e?.path}` */}
                        {/* ?  */}
                        <img alt='' src={require(`../../public/${active === i ? e.active_image : e.image}`)} />
                        {/* : <img alt='' src={require(`../../public/${e.image}`)} /> */}
                        {/* } */}
                        <span>{e.title}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
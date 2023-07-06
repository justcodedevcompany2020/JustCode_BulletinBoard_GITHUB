import { useState } from 'react'
import { useEffect } from 'react'
import './style.css'

export const NavPath = ({ width, padding }) => {
    const [navPath, setNavPath] = useState([])

    useEffect(() => {
        console.log(window.location.pathname.split('/')[1])
        if (window.location.pathname.split('/')[2] === 'profile') {
            setNavPath([{
                path: 'Главная',
                url: '/'
            },
            {
                path: 'Мои объявления',
                url: ''
            }])
        } else if (window.location.pathname.split('/')[2] === 'messages') {
            setNavPath([{
                path: 'Главная',
                url: '/'
            },
            {
                path: 'Сообщения',
                url: ''
            }])
        } else if (window.location.pathname.split('/')[2] === 'reviews') {
            setNavPath([{
                path: 'Главная',
                url: '/'
            },
            {
                path: 'Отзывы',
                url: ''
            }])
        } else if (window.location.pathname.split('/')[2] === 'notifications') {
            setNavPath([{
                path: 'Главная',
                url: '/'
            },
            {
                path: 'Уведомления',
                url: ''
            }])
        } else if (window.location.pathname.split('/')[2] === 'favorites') {
            setNavPath([{
                path: 'Главная',
                url: '/'
            },
            {
                path: 'Избранные',
                url: ''
            }])
        } else if (window.location.pathname.split('/')[2] === 'wallet') {
            setNavPath([{
                path: 'Главная',
                url: '/'
            },
            {
                path: 'Кошелёк',
                url: ''
            }])
        } else if (window.location.pathname.split('/')[2] === 'settings') {
            setNavPath([{
                path: 'Главная',
                url: '/'
            },
            {
                path: 'Настройки',
                url: ''
            }])
        } else if (window.location.pathname.split('/')[1] === 'catalog') {
            setNavPath([{
                path: 'Главная',
                url: '/'
            },
            {
                path: 'Мужской гардероб',
                url: ''
            }])
        } else if (window.location.pathname.split('/')[1] === 'item') {
            setNavPath([{
                path: 'Главная',
                url: '/'
            },
            {
                path: 'Услуги исполнителей',
                url: ''
            },
            {
                path: 'Изготовление на заказ',
                url: ''
            },
            {
                path: 'Шкафы купе от производителя',
                url: ''
            }])
        } else if (window.location.pathname.split('/')[1] === 'seller') {
            setNavPath([{
                path: 'Главная',
                url: '/'
            },
            {
                path: 'Алексей Т.',
                url: ''
            }])
        }
    }, [window.location.pathname])

    return (
        <div className='navPath' style={{ width, padding }}>
            <ul>
                {navPath.length > 0 && navPath.map((e, i) => {
                    if (i === navPath.length - 1) {
                        return <li key={i} onClick={() => window.location = e?.url}>{e?.path}</li>
                    } else {
                        return (
                            <div key={i} className='navUrl'>
                                <li style={{ color: '#7791F7' }} key={i} onClick={() => window.location = e?.url}>{e.path}</li>
                                <span>&bull;</span>
                            </div>
                        )
                    }
                })}
            </ul>
        </div>
    )
}
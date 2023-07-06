import { useEffect } from 'react'
import { BlueArrowRight, BlueCloseIcon, CreateAnnouncement, Favorites, Login, Message, Wallet } from '../../svg'

export const MobileMenu = ({ open, setOpen }) => {
    const menuItems = [
        {
            title: 'Кошелёк',
            icon: <Wallet />,
            path: '/profile/wallet'
        },
        {
            title: 'Избранное',
            icon: <Favorites />,
            path: '/profile/favorites'
        },
        {
            title: 'Сообщения',
            icon: <Message />,
            path: '/profile/messages'
        },
        {
            title: 'Разместить обьявление',
            icon: <CreateAnnouncement />,
            path: '/create'
        },
        {
            title: 'Войти',
            icon: <Login />,
            path: '/auth/login'
        },
    ]

    useEffect(() => {
        if (open) {
            if ((document.querySelector('.pageBg') || document.querySelector('.main') || document.querySelector('.mobileCategoriesPopup')) && document.querySelector('.navigationShadow') && document.querySelector('.footerShadow')) {
                if (document.querySelector('.pageBg')) {
                    document.querySelector('.pageBg').style.display = 'none'
                } else {
                    document.querySelector('.main').style.display = 'none'
                }
                document.querySelector('.navigationShadow').style.display = 'none'
                document.querySelector('.footerShadow').style.display = 'none'
            }
        }
        else {
            if ((document.querySelector('.pageBg') || document.querySelector('.main') || document.querySelector('.mobileCategoriesPopup')) && document.querySelector('.navigationShadow') && document.querySelector('.footerShadow')) {
                if (document.querySelector('.pageBg')) {
                    document.querySelector('.pageBg').style.display = 'block'
                } else {
                    document.querySelector('.main').style.display = 'block'
                }
                document.querySelector('.navigationShadow').style.display = 'block'
                document.querySelector('.footerShadow').style.display = 'block'
            }
        }
    }, [open])

    return (
        <div className={open ? 'mobileCategoriesPopup' : 'inactive'}>
            <div className='mobileCategoriesPopupTop'>
                <h1>Меню</h1>
                <div className='mobileCategoriesPopupClose' onClick={() => setOpen(false)}>
                    <BlueCloseIcon />
                </div>
            </div>
            <div className='mobilePopupCats'>
                {menuItems?.length > 0 && menuItems?.map((e, i) => (
                    <div className='eachMobilePopCat' key={i} onClick={() => {
                        window.location = e?.path
                    }}>
                        <div className='eachMobilePopCatLeft'>
                            {e?.icon}
                            <span>{e?.title}</span>
                        </div>
                        <BlueArrowRight />
                    </div>
                ))}
            </div>
        </div>
    )
}
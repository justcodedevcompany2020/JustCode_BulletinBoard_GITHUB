import './style.css'
import { useState } from 'react'
import { Checkbox } from '../../components/svg'

export const Notifications = () => {
    const [notifications, setNotifications] = useState([
        {
            title: 'Уведомления о новых сообщениях и ответах',
            email: true,
            phone: false,
            id: 1
        },
        {
            title: 'Изменения в избранных объявлениях',
            email: false,
            phone: true,
            id: 2
        },
        {
            title: 'Новые отзывы и оценки',
            email: true,
            phone: true,
            id: 3
        },
        {
            title: 'Напоминания и другая информация',
            email: false,
            phone: false,
            id: 4
        },
        {
            title: 'Новости сайта и периодическая рассылка',
            email: true,
            phone: false,
            id: 5
        },
    ])

    function handleCheck(event, target) {
        let item = [...notifications]
        if (target === 'email') {
            item.find(e => e === event).email = !item.find(e => e === event).email
        } else {
            item.find(e => e === event).phone = !item.find(e => e === event).phone
        }
        setNotifications(item)
    }

    return (
        <div className='notifications'>
            <p>Оставайтесь в курсе происходящего, получая уведомления о разных событиях. Чтобы получать уведомления на телефон, вам необходимо установить наше мобильное приложение.</p>
            <div className='allNotifications'>
                {notifications.map((e, i) => (
                    <div className='eachNotification' key={i}>
                        <h1>{e.title}</h1>
                        <div className='eachNotificationCheckbox'>
                            <div className='notificatinCheckbox'>
                                <div className='checkbox' onClick={() => handleCheck(e, 'email')} style={e?.email ? { background: '#7791f7' } : {}}>
                                    <Checkbox />
                                </div>
                                <label>Эл. почта</label>
                            </div>
                            <div className='notificatinCheckbox'>
                                <div className='checkbox' onClick={() => handleCheck(e, 'phone')} style={e?.phone ? { background: '#7791f7' } : {}}>
                                    <Checkbox />
                                </div>
                                <label>Телефон</label>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='notificationButton'>
                <button className='blueButton'>Сохранить</button>
            </div>
        </div>
    )
}
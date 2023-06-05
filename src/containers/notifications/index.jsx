import './style.css'
import { useState } from 'react'

export const Notifications = () => {
    const [notifications, setNotifications] = useState([
        {
            title: 'Уведомления о новых сообщениях и ответах',
            email: true,
            phone: false,
        },
        {
            title: 'Изменения в избранных объявлениях',
            email: true,
            phone: false,
        },
        {
            title: 'Новые отзывы и оценки',
            email: true,
            phone: false,
        },
        {
            title: 'Напоминания и другая информация',
            email: true,
            phone: false,
        },
        {
            title: 'Новости сайта и периодическая рассылка',
            email: true,
            phone: false,
        },
    ])

    // function handleChange(event, target) {
    //     if (target === 'email') {
    //         notifications.find(e => e === event).email = !notifications.find(e => e === event).email
    //     } else {
    //         notifications.find(e => e === event).phone = !notifications.find(e => e === event).phone
    //     }
    //     setNotifications(notifications)
    //     console.log('notifications', notifications)
    // }

    return (
        <div className='notifications'>
            <p>Оставайтесь в курсе происходящего, получая уведомления о разных событиях. Чтобы получать уведомления на телефон, вам необходимо установить наше мобильное приложение.</p>
            <div className='allNotifications'>
                {notifications.map((e, i) => (
                    <div className='eachNotification' key={i}>
                        <h1>{e.title}</h1>
                        <div className='eachNotificationCheckbox'>
                            <label><input type='checkbox' />Эл. почта</label>
                            <label><input type='checkbox' />Телефон</label>
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
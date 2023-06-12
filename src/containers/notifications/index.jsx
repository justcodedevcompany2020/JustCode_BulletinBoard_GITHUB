import './style.css'
import { useState } from 'react'
import { Checkbox } from '../../components/svg'


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
    const [checked, setChecked] = useState(false)

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
                            <div className='notificatinCheckbox'>
                                <div className='checkbox' onClick={() => setChecked(!checked)} style={e?.email ? { background: '#7791f7' } : {}}>
                                    <Checkbox />
                                </div>
                                <label>Эл. почта</label>
                            </div>
                            <div className='notificatinCheckbox'>
                                <div className='checkbox' onClick={() => setChecked(!checked)} style={e?.phone ? { background: '#7791f7' } : {}}>
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
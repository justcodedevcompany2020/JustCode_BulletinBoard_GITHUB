import './style.css'
import { useState } from 'react'
import { MoreIcons } from '../svg'

export const ContactSettings = () => {
    const contacts = [
        {
            phone: '(099) 99-99-99',
            confirmed: true,
            id: 1,
        },
        {
            phone: '(077) 77-99-99',
            confirmed: false,
            id: 2,
        },
        {
            phone: '(033) 73-33-93',
            confirmed: true,
            id: 3
        },
    ]
    const [seeMore, setSeeMore] = useState(null)

    return (
        <div className='contactSettings'>
            <h1>Телефоны</h1>
            <div className='allMyContacts'>
                {contacts.length > 0
                    ? contacts.map((e, i) =>
                        <div className='eachContact' key={i}>
                            <span>{e?.phone}</span>
                            <div className='eachContactConfirmation'>
                                {e?.confirmed
                                    ? <span style={{ color: '#88BE45' }}>Подтверждён</span>
                                    : <span style={{ color: '#E21003' }}>Не подтверждён</span>
                                }
                                <div className='moreIcons' onClick={() => {
                                    if (seeMore !== e.id) {
                                        setSeeMore(e.id)
                                    } else {
                                        setSeeMore(null)
                                    }
                                }}>
                                    <MoreIcons />
                                    <div className='seeMore' style={seeMore === e.id ? { display: 'flex' } : { display: 'none' }}>
                                        <span>Удалить</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                    : <div className='noActiveAnnouncements'>
                        <p>No Contacts</p>
                    </div>
                }
                <div className='notificationButton'>
                    <button className='blueButton'>Добавить</button>
                </div>
            </div>
        </div>
    )
}
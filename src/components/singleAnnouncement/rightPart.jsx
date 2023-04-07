import './style.css'
import { Star, VerifiedAccount } from '../svg'
import { useState, useEffect } from 'react'
import { CallAnnouncer } from '../popup/callAnnouncer'
import { TextAnnouncer } from '../popup/textAnnouncer'

export const SingleAnnouncementRightPart = () => {
    const [call, setCall] = useState(false)
    const [text, setText] = useState(false)

    useEffect(() => {
        if (document.querySelector('.layout')) {
            if (call || text) {
                document.querySelector('.layout').style.position = 'fixed'
            } else {
                document.querySelector('.layout').style.position = 'relative'
            }
        }
    }, [call, text])

    return (
        <div className='singleMainRight'>
            <span>28 500 Р</span>
            <button className='callButton' onClick={() => setCall(true)}>Позвонить</button>
            <CallAnnouncer
                open={call}
                setOpen={setCall}
            />
            <button className='textButton' onClick={() => setText(true)}>Написать продавцу</button>
            <TextAnnouncer
                open={text}
                setOpen={setText}
            />
            <div className='clientInfo'>
                <div className='clientInfoTop'>
                    <img alt='' src={require('../../public/man.png')} />
                    <div className='aboutClient'>
                        <p>Алексей Т. (10 обьявлений)</p>
                        <span>на JustCode с 13 мар 2023</span>
                        <div className='clientRating'>
                            <p>5.0</p>
                            <Star />
                            <span>3 отзыва</span>
                        </div>
                    </div>
                </div>
                <div className='loginSeparator' style={{ margin: 0 }} />
                <div className='accountType'>
                    <VerifiedAccount />
                    <span>Подтверждённый профиль</span>
                </div>
            </div>
            <img alt='' src={require('../../public/ad.png')} />
            <img alt='' src={require('../../public/ad.png')} />
        </div>
    )
}
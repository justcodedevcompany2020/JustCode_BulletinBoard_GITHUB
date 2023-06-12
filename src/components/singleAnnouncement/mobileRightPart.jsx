import './style.css'
import { useState } from 'react'
import { TextAnnouncer } from '../popup/textAnnouncer'
import { CallAnnouncer } from '../popup/callAnnouncer'
import { MobileHeart, Star, VerifiedAccount } from '../svg'

export const MobileRightPart = () => {
    const [call, setCall] = useState(false)
    const [text, setText] = useState(false)

    return (
        <div className='mobileRightPart'>
            <div className='mobPrice'>
                <span>28 500 Р</span>
                <div className='mobileHeart'>
                    <MobileHeart />
                </div>
            </div>
            <div className='mobBtns'>
                <button className='callButton blueButton' onClick={() => setCall(true)}>Позвонить</button>
                <CallAnnouncer
                    open={call}
                    setOpen={setCall}
                />
                <button className='textButton' onClick={() => setText(true)}>Написать продавцу</button>
                <TextAnnouncer
                    open={text}
                    setOpen={setText}
                />
            </div>
            <div className='clientInfo'>
                <div className='clientInfoTop mobClientInfoTop'>
                    <img alt='' src={require('../../public/man.png')} />
                    <div className='aboutClient mobAboutClient'> 
                        <p onClick={() => window.location = `/seller/1`}>Алексей Т. (10 обьявлений)</p>
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

        </div>
    )
}
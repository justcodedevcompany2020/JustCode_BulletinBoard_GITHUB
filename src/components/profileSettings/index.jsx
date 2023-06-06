import './style.css'
import { useState } from 'react'
import { AccountType } from '../popup/accountType'

export const ProfilSettings = () => {
    const [openType, setOpenType] = useState(false)

    return (
        <div>
            <AccountType
                open={openType}
                setOpen={setOpenType}
            />
            <div className='profileInfo'>
                <div className='eachProfileSetting'>
                    <span>Ваш аватар</span>
                    <div className='changeAvatar'>
                        <img alt='' src={require('../../public/man.png')} />
                        <span>Изменить</span>
                    </div>
                </div>
                <div className='loginSeparator' />
                <div className='eachProfileSetting'>
                    <span>Ваше имя</span>
                    <div className='changeAvatar'>
                        <input value={'Алексей Т.'} disabled />
                    </div>
                </div>
                <div className='loginSeparator' />
                <div className='eachProfileSetting'>
                    <span>Регион</span>
                    <div className='changeAvatar'>
                        <select>
                            <option>Ереван</option>
                            <option>Ереван</option>
                            <option>Ереван</option>
                            <option>Ереван</option>
                            <option>Ереван</option>
                            <option>Ереван</option>
                            <option>Ереван</option>
                            <option>Ереван</option>
                        </select>
                    </div>
                </div>
                <div className='loginSeparator' />
                <div className='eachProfileSetting' id='profSetting'>
                    <div className='changeAvatar'>
                        <span>Тип аккаунта</span>
                        <p>Индивидуальный</p>
                    </div>
                    <p onClick={() => setOpenType(true)}>Изменить</p>
                </div>
            </div>
            <div className='notificationButton'>
                <button className='blueButton'>Сохранить</button>
            </div>
        </div>
    )
}
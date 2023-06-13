import { useState } from 'react'
import { ClosedEye, CloseIcon, OpenEye } from '../../svg'

export const DeleteAccount = ({ open, setOpen }) => {
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    
    return (
        <div className={open ? 'active' : 'inactive'}>
            <div className='pop' style={{ width: '570px' }}>
                <div className='close' onClick={() => {
                    setOpen(false)
                    setShowPassword(false)
                    setPassword('')
                }}>
                    <CloseIcon />
                </div>
                <h1>Удалить учетную запись</h1>
                <div className='loginSeparator' />
                <div className='passInfo'>
                    <p>
                        Если вы продолжите эту операцию, то ваша учетная запись, объявления, сообщения и вся
                        другая информация будут удалены. Подтвержденные номера телефонов нельзя будет использовать
                        в другой учетной записи в течение долгого времени. Повторная регистрация с адреса
                        электронной почты user@gmail.com будет невозможна.
                    </p>
                </div>
                <div className='passInputs'>
                    <div className='inputEye'>
                        <input type={showPassword ? 'text' : 'password'} placeholder='Ваш пароль' value={password} onChange={(e) => setPassword(e.target.value)} />
                        <div className='cursor' onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <OpenEye /> : <ClosedEye />}
                        </div>
                    </div>
                </div>
                <div className='labelButton'>
                    <button className='redButton'>Удалить</button>
                </div>
            </div>
        </div>
    )
}
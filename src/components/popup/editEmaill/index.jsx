import { useState } from 'react'
import { ClosedEye, CloseIcon, OpenEye } from '../../svg'

export const EditEmail = ({ open, setOpen }) => {
    const [showPassword, setShowPassword] = useState(false)
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    return (
        <div className={open ? 'active' : 'inactive'}>
            <div className='pop' style={{ width: '570px' }}>
                <div className='close' onClick={() => {
                    setOpen(false)
                    setShowPassword(false)
                    setPassword('')
                    setEmail('')
                }}>
                    <CloseIcon />
                </div>
                <h1>Изменить электронную почту</h1>
                <div className='loginSeparator' />
                <div className='passInfo'>
                    <p>Введите ваш пароль и новый адрес электронной почты, на который вам придет подтверждающее письмо.</p>
                </div>
                <div className='passInputs'>
                    <div className='inputEye'>
                        <input type={showPassword ? 'text' : 'password'} placeholder='Ваш пароль' value={password} onChange={(e) => setPassword(e.target.value)} />
                        <div className='cursor' onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <OpenEye /> : <ClosedEye />}
                        </div>
                    </div>
                    <input placeholder='Ваш новый адрес эл. почты' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='labelButton'>
                    <button className='blueButton'>Изменить</button>
                </div>
            </div>
        </div>
    )
}
import './style.css'
import { useState } from 'react'
import { ClosedEye, CloseIcon, OpenEye } from '../../svg'

export const EditPassword = ({ open, setOpen }) => {
    const [showOldPassword, setShowOldPassword] = useState(false)
    const [showNewPassword, setShowNewPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    return (
        <div className={open ? 'active' : 'inactive'}>
            <div className='pop' style={{ width: '570px' }}>
                <div className='close' onClick={() => {
                    setOpen(false)
                    setShowOldPassword(false)
                    setShowNewPassword(false)
                    setShowConfirmPassword(false)
                    setOldPassword('')
                    setNewPassword('')
                    setConfirmPassword('')
                }}>
                    <CloseIcon />
                </div>
                <h1>Изменить пароль</h1>
                <div className='loginSeparator' />
                <div className='passInfo'>
                    <p>Введите свой текущий пароль, новый пароль, и повторите ввод нового пароля, чтобы исключить ошибки.</p>
                </div>
                <div className='passInputs'>
                    <div className='inputEye'>
                        <input type={showOldPassword ? 'text' : 'password'} placeholder='Текущий пароль' value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} />
                        <div className='cursor' onClick={() => setShowOldPassword(!showOldPassword)}>
                            {showOldPassword ? <OpenEye /> : <ClosedEye />}
                        </div>
                    </div>
                    <div className='inputEye'>
                        <input type={showNewPassword ? 'text' : 'password'} placeholder='Новый пароль' value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                        <div className='cursor' onClick={() => setShowNewPassword(!showNewPassword)}>
                            {showNewPassword ? <OpenEye /> : <ClosedEye />}
                        </div>
                    </div>
                    <div className='inputEye'>
                        <input type={showConfirmPassword ? 'text' : 'password'} placeholder='Повторите пароль' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                        <div className='cursor' onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                            {showConfirmPassword ? <OpenEye /> : <ClosedEye />}
                        </div>
                    </div>
                </div>
                <div className='labelButton'>
                    <button className='blueButton'>Изменить пароль</button>
                </div>
            </div>
        </div>
    )
}
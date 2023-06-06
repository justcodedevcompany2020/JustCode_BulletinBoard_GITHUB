import './style.css'
import { CloseIcon } from '../../svg'

export const EditPassword = ({ open, setOpen }) => {
    return (
        <div className={open ? 'active' : 'inactive'}>
            <div className='pop' style={{ width: '570px' }}>
                <div className='close' onClick={() => setOpen(false)}>
                    <CloseIcon />
                </div>
                <h1>Изменить пароль</h1>
                <div className='loginSeparator' />
                <div className='passInfo'>
                    <p>Введите свой текущий пароль, новый пароль, и повторите ввод нового пароля, чтобы исключить ошибки.</p>
                </div>
                <div className='passInputs'>
                    <input placeholder='Текущий пароль' />
                    <input placeholder='Новый пароль' />
                    <input placeholder='Повторите пароль' />
                </div>
                <div className='labelButton'>
                    <button className='blueButton'>Изменить пароль</button>
                </div>
            </div>
        </div>
    )
}
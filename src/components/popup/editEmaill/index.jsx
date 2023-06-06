import { CloseIcon } from '../../svg'

export const EditEmail = ({ open, setOpen }) => {
    return (
        <div className={open ? 'active' : 'inactive'}>
            <div className='pop' style={{ width: '570px' }}>
                <div className='close' onClick={() => setOpen(false)}>
                    <CloseIcon />
                </div>
                <h1>Изменить электронную почту</h1>
                <div className='loginSeparator' />
                <div className='passInfo'>
                    <p>Введите ваш пароль и новый адрес электронной почты, на который вам придет подтверждающее письмо.</p>
                </div>
                <div className='passInputs'>
                    <input placeholder='Ваш пароль' />
                    <input placeholder='Ваш новый адрес эл. почты' />
                </div>
                <div className='labelButton'>
                    <button className='blueButton'>Изменить</button>
                </div>
            </div>
        </div>
    )
}
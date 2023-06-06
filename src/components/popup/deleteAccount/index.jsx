import { CloseIcon } from '../../svg'

export const DeleteAccount = ({ open, setOpen }) => {
    return (
        <div className={open ? 'active' : 'inactive'}>
            <div className='pop' style={{ width: '570px' }}>
                <div className='close' onClick={() => setOpen(false)}>
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
                    <input placeholder='Ваш пароль' />
                </div>
                <div className='labelButton'>
                    <button className='redButton'>Удалить</button>
                </div>
            </div>
        </div>
    )
}
import './style.css'
import { useState } from 'react'
import { CloseIcon } from '../../svg'

export const AccountType = ({ open, setOpen }) => {
    const [accountType, setAccountType] = useState(0)

    return (
        <div className={open ? 'active' : 'inactive'}>
            <div className='pop' style={{ width: '570px' }}>
                <div className='close' onClick={() => setOpen(false)}>
                    <CloseIcon />
                </div>
                <h1>Тип аккаунта</h1>
                <div className='loginSeparator' />
                <div className='popupScroller'>
                    <div className='passInfo'>
                        <p> Выберите тип аккаунта, который больше всего подходит для ваших целей. </p>
                    </div>
                    <div className='passInputs' id='accTypeMrg'>
                        <label htmlFor='accountType' className='individualType'>
                            <div className='accTypeRadio'>
                                <input type='radio' name='type' checked={accountType === 0 ? true : false} onChange={(e) => e.target.checked === true ? setAccountType(0) : setAccountType(1)} />
                                <span>Индивидуальный</span>
                            </div>
                            <p>Все необходимые функции для работы с объявлениями.</p>
                        </label>
                        <label htmlFor='accountType' className='individualType'>
                            <div className='accTypeRadio'>
                                <input type='radio' name='type' checked={accountType === 1 ? true : false} onChange={(e) => e.target.checked === true ? setAccountType(1) : setAccountType(0)} />
                                <span>Индивидуальный</span>
                            </div>
                            <span>12,000 Р в год</span>
                            <p>Бизнес страница в своем стиле и информация о бизнесе на страницах ваших объявлений. Пакеты со скидками на размещение и обновление объявлений сверх лимита.</p>
                        </label>
                    </div>
                    {accountType === 1 &&
                        <div className='accountTypePrice'>
                            <div className='loginSeparator' />
                            <div className='eachLabelPrice'>
                                <p>Срок действия</p>
                                <span>1 месяц</span>
                            </div>
                            <div className='eachLabelPrice'>
                                <p>Цена</p>
                                <span>12,000 Р</span>
                            </div>
                            <div className='eachLabelPrice'>
                                <p>В кошельке</p>
                                <span>200 Р</span>
                            </div>
                            <div className='noBal'>
                                <span>Баланс на вашем кошельке недостаточен, чтобы оплатить эту услугу.</span>
                            </div>
                            <div className='accountTypeButton'>
                                <button className='blueButton'>Купить</button>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
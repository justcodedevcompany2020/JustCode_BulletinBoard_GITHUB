import './style.css'
import InputMask from 'react-input-mask'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CloseMask, OpenMask } from '../../Redux/action/auth_action'
import { Checkbox, ClosedEye, GreaterThan, JustCode, LessThan, OpenEye } from '../../components/svg'

export const Register = () => {
    const dispatch = useDispatch()
    const openMask = useSelector(st => st.Auth_reducer.openMask)
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [checked, setChecked] = useState(false)
    const [emailPage, setEmailPage] = useState(true)
    const [codePage, setCodePage] = useState(false)
    const [successPage, setSuccessPage] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [code, setCode] = useState('')
    const [selectedCountry, setSelectedCountry] = useState('am')

    function handleEmailPage() {
        setEmailPage(false)
        setCodePage(true)
    }

    function handleCodePage() {
        setCodePage(false)
        setSuccessPage(true)
    }

    return (
        <div className='loginPage'>
            <JustCode />
            <div className='mainLogin'>
                <div className='loginTop'>
                    <div className='loginTopLeft'>
                        <span>Регистрация</span>
                    </div>
                    <div className='loginTopRight'>
                        <div className='loginTopRightBorder'>
                            <span onClick={() => window.location = '/auth/login'}>Вход</span>
                        </div>
                    </div>
                </div>
                <div className='loginSeparator' />
                {codePage &&
                    <div className='registerText' >
                        <span>Введите код подтверждения</span>
                    </div>
                }
                {successPage &&
                    <div className='registerText' style={{ margin: '30px 0 40px 0' }}>
                        <span>Вы успешно зарегистрировались!</span>
                    </div>
                }
                <div className='loginInputs'>
                    {emailPage && <>
                        <div className='phoneMask' >
                            <div className='chooseMask' onClick={(e) => {
                                e.stopPropagation()
                                openMask ? dispatch(CloseMask()) : dispatch(OpenMask())
                            }}
                            >
                                {selectedCountry === 'am' ? <img alt='' src={require('../../public/armenian_flag.png')} /> : <img alt='' src={require('../../public/russian_flag.jpg')} />}
                                {openMask ? <GreaterThan /> : <LessThan />}
                            </div>
                            <InputMask placeholder='Номер телефона' mask={selectedCountry === 'am' ? "+374 (99) 99 99 99" : "+7 (999) 999 99 99"} maskChar="-" value={phone} onChange={(e) => setPhone(e.target.value)} />
                            <div className='allPhoneMasks' style={openMask ? { display: 'flex' } : { display: 'none' }}>
                                <div className='eachPhoneMask' onClick={() => {
                                    setSelectedCountry('am')
                                    setPhone('+374')
                                    dispatch(CloseMask())
                                }}>
                                    <img alt='' src={require('../../public/armenian_flag.png')} />
                                    <span>Армения</span>
                                </div>
                                <div className='eachPhoneMask' onClick={() => {
                                    setSelectedCountry('ru')
                                    setPhone('+7')
                                    dispatch(CloseMask())
                                }}>
                                    <img alt='' src={require('../../public/russian_flag.jpg')} />
                                    <span>Россия</span>
                                </div>
                            </div>
                        </div>
                        <div className='inputEye'>
                            <input type={showPassword ? 'text' : 'password'} placeholder='Пароль' value={password} onChange={(e) => setPassword(e.target.value)} />
                            <div className='cursor' onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <OpenEye /> : <ClosedEye />}
                            </div>
                        </div>
                        <div className='inputEye'>
                            <input type={showConfirmPassword ? 'text' : 'password'} placeholder='Повторите пароль' value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} />
                            <div className='cursor' onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                                {showConfirmPassword ? <OpenEye /> : <ClosedEye />}
                            </div>
                        </div>
                    </>}
                    {codePage && <input type='email' placeholder='Код подтверждения' value={code} onChange={(e) => e.target.value <= 999999 && setCode(e.target.value)} />}
                </div>
                {emailPage &&
                    <div className='registerCheckbox'>
                        <div className='checkbox' onClick={() => setChecked(!checked)} style={checked ? { background: '#7791f7' } : {}}>
                            <Checkbox />
                        </div>
                        <label>Я соглашаюсь с правилами публикации объявлений и условиями пользования JustCode.</label>
                    </div>
                }
                <div className='loginButton'>
                    {emailPage && <button className='blueButton' onClick={handleEmailPage}>Зарегистрироваться</button>}
                    {codePage && <button className='blueButton' onClick={handleCodePage}>Подтвердить</button>}
                    {successPage && <button className='blueButton' onClick={() => window.location = '/auth/login'}>Войти</button>}
                </div>
            </div>
        </div>
    )
}
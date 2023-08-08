import './style.css'
// import InputMask from 'react-input-mask'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CloseMask, ConfirmCode, OpenMask, Registration } from '../../Redux/action/auth_action'
import { Checkbox, ClosedEye, GreaterThan, JustCode, LessThan, OpenEye } from '../../components/svg'

export const Register = () => {
    const dispatch = useDispatch()
    // const openMask = useSelector(st => st.Auth_reducer.openMask)
    // const [phone, setPhone] = useState('')
    // const [selectedCountry, setSelectedCountry] = useState('am')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [checked, setChecked] = useState(false)
    const [emailPage, setEmailPage] = useState(true)
    const [codePage, setCodePage] = useState(false)
    const [successPage, setSuccessPage] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [code, setCode] = useState('')
    const [email, setEmail] = useState('')
    const [errorMessage, setErrorMessage] = useState({ field: '', message: '' })
    const regStep1 = useSelector(st => st.Auth_reducer.regStep1)
    const codeError = useSelector(st => st.Auth_reducer.codeError)
    const emailError = useSelector(st => st.Auth_reducer.regEmailError)
    const regStep2 = useSelector(st => st.Auth_reducer.regStep2)

    useEffect(() => {
        if (regStep1) {
            setEmailPage(false)
            setCodePage(true)
        }
    }, [regStep1])
    useEffect(() => {
        if (regStep2) {
            setCodePage(false)
            setSuccessPage(true)
        }
    }, [regStep2])
    useEffect(() => { codeError && setErrorMessage({ field: 'code', message: 'Неверный код.' }) }, [codeError])

    function register() {
        setErrorMessage({ field: '', message: '' })
        if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
            setErrorMessage({ field: 'email', message: 'Введите корректный адрес эл. почты.' })
        } else if (password.length < 6) {
            setErrorMessage({ field: 'password', message: 'Пароль должен содержать не менее 6-ти символов.' })
        } else if (password !== passwordConfirmation) {
            setErrorMessage({ field: 'password', message: 'Пароли не совпадают.' })
        } else if (!checked) {
            setErrorMessage({ field: 'checkbox', message: 'Обязательное поле.' })
        } else {
            setErrorMessage({ field: '', message: '' })
            dispatch(Registration(email, password, passwordConfirmation))
        }
    }

    function sendCode() {
        dispatch(ConfirmCode(email, code))
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
                        {/* <div className='phoneMask' >
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
                        </div> */}
                        <div className='inputEye' style={{ border: (errorMessage.field === 'email' || emailError) && '1px solid #e21003' }}>
                            <input
                                type='email'
                                placeholder='Эл. почта'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                onKeyDown={e => e.key === 'Enter' && register()}
                            />
                        </div>
                        <div className='inputEye' style={{ border: errorMessage.field === 'password' && '1px solid #e21003' }}>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                placeholder='Пароль'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                onKeyDown={e => e.key === 'Enter' && register()}
                            />
                            <div className='cursor' onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <OpenEye /> : <ClosedEye />}
                            </div>
                        </div>
                        <div className='inputEye' style={{ border: errorMessage.field === 'password' && '1px solid #e21003' }}>
                            <input
                                type={showConfirmPassword ? 'text' : 'password'}
                                placeholder='Повторите пароль'
                                value={passwordConfirmation}
                                onChange={(e) => setPasswordConfirmation(e.target.value)}
                                onKeyDown={e => e.key === 'Enter' && register()}
                            />
                            <div className='cursor' onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                                {showConfirmPassword ? <OpenEye /> : <ClosedEye />}
                            </div>
                        </div>
                    </>}
                    {codePage && <input
                        placeholder='Код подтверждения'
                        style={{ border: errorMessage.field === 'code' && '1px solid #e21003' }}
                        value={code}
                        onChange={(e) => e.target.value <= 999999 && setCode(e.target.value)}
                        onKeyDown={e => e.key === 'Enter' && sendCode()}
                    />}
                </div>
                {emailPage && <>
                    <div className='registerCheckbox'>
                        <div className='checkbox' onClick={() => setChecked(!checked)} style={checked ? { background: '#7791f7' } : errorMessage.field === 'checkbox' ? { border: '1px solid #e21003' } : {}}>
                            <Checkbox />
                        </div>
                        <label>Я соглашаюсь с правилами публикации объявлений и условиями пользования JustCode.</label>
                    </div>
                    {errorMessage.message.length > 0 && <label className='error'>{errorMessage.message}</label>}
                    {emailError && <span className='error'>Этот эл. адрес уже зарегистрирован.</span>}
                </>
                }
                {codePage &&
                    <div className='error' style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '20px' }} >
                        <span>{errorMessage.message}</span>
                    </div>
                }
                <div className='loginButton'>
                    {emailPage && <button className='blueButton' onClick={register} disabled={!email.length || !password.length || !passwordConfirmation.length}>Зарегистрироваться</button>}
                    {codePage && <button className='blueButton' onClick={sendCode} disabled={code.length < 6}>Подтвердить</button>}
                    {successPage && <button className='blueButton' onClick={() => window.location = '/auth/login'}>Войти</button>}
                </div>
            </div>
        </div>
    )
}
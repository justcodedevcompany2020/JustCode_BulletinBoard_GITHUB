import './style.css'
// import InputMask from 'react-input-mask'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ClosedEye, FacebookIcon, GoogleIcon, GreaterThan, JustCode, LessThan, MailIcon, OpenEye, VkIcon } from '../../components/svg'
import { CloseMask, LoginError, OpenMask } from '../../Redux/action/auth_action'

export const Login = () => {
    const dispatch = useDispatch()
    const errorLogin = useSelector(st => st.Auth_reducer.loginError)
    // const openMask = useSelector(st => st.Auth_reducer.openMask)
    // const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    // const [selectedCountry, setSelectedCountry] = useState('am')
    const [email, setEmail] = useState('')

    function login() {
        console.log('sdjhcbv jh');
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            dispatch(LoginError(false))
        } else {
            dispatch(LoginError(true))
        }
    }

    return (
        <div className='loginPage'>
            <JustCode />
            <div className='mainLogin'>
                <div className='loginTop'>
                    <div className='loginTopLeft'>
                        <span>Вход</span>
                    </div>
                    <div className='loginTopRight'>
                        <div className='loginTopRightBorder'>
                            <span onClick={() => window.location = '/auth/register'}>Регистрация</span>
                        </div>
                    </div>
                </div>
                <div className='loginSeparator' />
                <div className='loginInputs'>
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
                    <div className='inputEye'>
                        <input type='email' placeholder='Эл. почта' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className='inputEye'>
                        <input type={showPassword ? 'text' : 'password'} placeholder='Пароль' value={password} onChange={(e) => setPassword(e.target.value)} />
                        <div className='cursor' onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <OpenEye /> : <ClosedEye />}
                        </div>
                    </div>
                    {errorLogin && <span className='error'>Неверный ввод данных. Повторите попытку.</span>}
                </div>
                <div className='loginForgotPassword'>
                    <span onClick={() => window.location = '/auth/forgotPassword'}>Забыли пароль?</span>
                </div>
                <div className='loginButton'>
                    <button className='blueButton' onClick={login} disabled={email.length < 1 || password.length < 1}>Войти</button>
                </div>
                <div className='loginSeparator' style={{ margin: '20px 0' }} />
                <div className='loginViaSocialMedia'>
                    <span>Войдите через социальную сеть</span>
                </div>
                <div className='loginSocialMedia'>
                    <div className='loginSocialHover'>
                        <FacebookIcon />
                    </div>
                    <div className='loginSocialHover'>
                        <GoogleIcon />
                    </div>
                    <div className='loginSocialHover'>
                        <VkIcon />
                    </div>
                    <div className='loginSocialHover'>
                        <MailIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}
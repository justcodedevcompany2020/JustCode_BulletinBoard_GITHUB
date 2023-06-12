import './style.css'
import { useState } from 'react'
import { ClosedEye, FacebookIcon, GoogleIcon, JustCode, MailIcon, OpenEye, VkIcon } from '../../components/svg'

export const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    return (
        <div className='logPage'>
            <div className='loginPage'>
                <div className='cursor' onClick={() => window.location = '/'}>
                    <JustCode />
                </div>
                <div className='mainLogin'>
                    <div className='loginTop'>
                        <div className='loginTopLeft'>
                            <span>Вход</span>
                        </div>
                        <div className='loginTopRight'>
                            <div className='loginTopRightBorder'>
                                <span onClick={() => window.location = '/register'}>Регистрация</span>
                            </div>
                        </div>
                    </div>
                    <div className='loginSeparator' />
                    <div className='loginInputs'>
                        <input type='email' placeholder='Ваша эл. почта' value={email} onChange={(e) => setEmail(e.target.value)} />
                        <div className='inputEye'>
                            <input type={showPassword ? 'text' : 'password'} placeholder='Пароль' value={password} onChange={(e) => setPassword(e.target.value)} />
                            <div className='cursor' onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <OpenEye /> : <ClosedEye />}
                            </div>
                        </div>
                    </div>
                    <div className='loginForgotPassword'>
                        <span onClick={() => window.location = '/forgotPassword'}>Забыли пароль?</span>
                    </div>
                    <div className='loginButton'>
                        <button className='blueButton'>Войти</button>
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
        </div>
    )
}
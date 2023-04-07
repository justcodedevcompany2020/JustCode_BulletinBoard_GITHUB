import './style.css'
import { useState } from 'react'
import { FacebookIcon, GoogleIcon, MailIcon, VkIcon } from '../../components/svg'

export const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <div className='loginPage'>
            <div className='loginTitle'>
                <h1>JustCode</h1>
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
                    <input type='password' placeholder='Пароль' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className='loginForgotPassword'>
                    <span onClick={() => window.location = '/forgotPassword'}>Забыли пароль?</span>
                </div>
                <div className='loginButton'>
                    <button>Войти</button>
                </div>
                <div className='loginSeparator' style={{ margin: '20px 0'}}/>
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
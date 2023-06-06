import './style.css'
import ReactFlagsSelect from 'react-flags-select'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FacebookIcon, GoogleIcon, MailIcon, VkIcon } from '../../components/svg'

export const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [selected, setSelected] = useState("RU")

    return (
        <div className='logPage'>
            <div className='navigationShadow'>
                <div className='loginNav'>
                    <h1 onClick={() => window.location = '/'}>JustCode</h1>
                    <div className='eachLittleNav'>
                        <ReactFlagsSelect
                            countries={["RU", "AM", "US"]}
                            selected={selected}
                            onSelect={(code) => setSelected(code)}
                            optionsSize={14}
                            className='countries'
                            showOptionLabel={true}
                            showSelectedLabel={true}
                        />
                    </div>
                </div>
            </div>
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
            <div className='loginFooter'>
                <div className='loginFooterLeftPart'>
                    <Link>Лицензионное соглашение</Link>
                    <Link>Помощь</Link>
                    <Link>Реклама на Юле</Link>
                </div>
                <span>© 2023 JustCode</span>
            </div>
        </div>
    )
}
import './style.css'
import ReactFlagsSelect from 'react-flags-select'
import { useState } from 'react'
import { Link } from '@mui/material'
import { Checkbox, ClosedEye, JustCode, NavbarLogo, OpenEye } from '../../components/svg'

export const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [checked, setChecked] = useState(false)
    const [emailPage, setEmailPage] = useState(true)
    const [codePage, setCodePage] = useState(false)
    const [successPage, setSuccessPage] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [code, setCode] = useState('')
    const [selected, setSelected] = useState("RU")

    function handleEmailPage() {
        setEmailPage(false)
        setCodePage(true)
    }

    function handleCodePage() {
        setCodePage(false)
        setSuccessPage(true)
    }

    return (
        <div className='logPage'>
            <div className='navigationShadow'>
                <div className='logNav'>
                    <div className='centerDiv cursor' onClick={() => window.location = '/'}>
                        <NavbarLogo />
                    </div>
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
            <div className='loginPage'>
                    <JustCode />
                <div className='mainLogin'>
                    <div className='loginTop'>
                        <div className='loginTopLeft'>
                            <span>Регистрация</span>
                        </div>
                        <div className='loginTopRight'>
                            <div className='loginTopRightBorder'>
                                <span onClick={() => window.location = '/login'}>Вход</span>
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
                            <input type='email' placeholder='Ваша эл. почта' value={email} onChange={(e) => setEmail(e.target.value)} />
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
                        {successPage && <button className='blueButton' onClick={() => window.location = '/login'}>Войти</button>}
                    </div>
                </div>
            </div>
            <div className='logFooter'>
                <div className='logNavLeft'>
                    <Link>Лицензионное соглашение</Link>
                    <Link>Помощь</Link>
                    <Link>Реклама на Юле</Link>
                </div>
                <span>© 2023 JustCode</span>
            </div>
        </div>
    )
}
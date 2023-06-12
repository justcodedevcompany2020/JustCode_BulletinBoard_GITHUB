import './style.css'
import { useState } from 'react'
import { Checkbox, ClosedEye, JustCode, OpenEye } from '../../components/svg'

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
            <div className='cursor' onClick={() => window.location = '/'}>
                <JustCode />
            </div>
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
                    {codePage && <input type='email' placeholder='Код подтверждения' value={code} onChange={(e) => e.target.value <= 999999 && setCode(e.target.value)}/>}
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
    )
}
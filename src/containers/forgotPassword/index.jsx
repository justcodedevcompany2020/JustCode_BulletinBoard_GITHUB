import './style.css'
import { useState } from 'react'
import { ClosedEye, JustCode, OpenEye } from '../../components/svg'

export const ForgotPassword = () => {
    const [email, setEmail] = useState('')
    const [code, setCode] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [emailPage, setEmailPage] = useState(true)
    const [codePage, setCodePage] = useState(false)
    const [passwordPage, setPasswordPage] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    function handleEmailPage() {
        setEmailPage(false)
        setCodePage(true)
    }

    function handleCodePage() {
        setCodePage(false)
        setPasswordPage(true)
    }

    function handlePasswordPage() {
        // setPasswordPage(false)
        window.location = '/login'
    }

    return (
        <div className='loginPage'>
            <div className='cursor' onClick={() => window.location = '/'}>
                <JustCode />
            </div>
            <div className='mainLogin'>
                <div className='loginTop'>
                    <div className='loginTopLeft'>
                        {(emailPage || codePage) && <span>Забыли пароль?</span>}
                        {passwordPage && <span>Новый пароль</span>}
                    </div>
                </div>
                <div className='loginSeparator' />
                <div className='forgotInfo'>
                    {emailPage && <span>Мы отправим 6-и значный код на вашу эл. почту для подтверждения личности</span>}
                    {codePage && <span>Введите код подтверждения</span>}
                    {passwordPage && <span>Придумайте сложный пароль,содержащий строчные и прописные буквы, а так же цифры и символы</span>}
                </div>
                <div className='loginInputs'>
                    {emailPage && <input type='email' placeholder='Ваша эл. почта' value={email} onChange={(e) => setEmail(e.target.value)} />}
                    {codePage && <input type='number' placeholder='Код подтверждения' value={code} onChange={(e) => e.target.value <= 999999 && setCode(e.target.value)} />}
                    {passwordPage && <>
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
                </div>
                <div className='loginButton'>
                    {emailPage && <button onClick={handleEmailPage} className='blueButton'>Отправить</button>}
                    {codePage && <button onClick={handleCodePage} className='blueButton'>Подтвердить</button>}
                    {passwordPage && <button onClick={handlePasswordPage} className='blueButton'>Войти</button>}
                </div>
            </div>
        </div>
    )
}
import './style.css'
import { useState } from 'react'

export const ForgotPassword = () => {

    const [email, setEmail] = useState('')
    const [code, setCode] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [emailPage, setEmailPage] = useState(true)
    const [codePage, setCodePage] = useState(false)
    const [passwordPage, setPasswordPage] = useState(false)

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
            <div className='loginTitle'>
                <h1>JustCode</h1>
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
                    {codePage && <input type='number' placeholder='Код подтверждения' value={code} onChange={(e) => setCode(e.target.value)} />}
                    {passwordPage && <>
                        <input type='password' placeholder='Пароль' value={password} onChange={(e) => setPassword(e.target.value)} />
                        <input type='password' placeholder='Повторите пароль' value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} />
                    </>}
                </div>
                <div className='loginButton'>
                    {emailPage && <button onClick={handleEmailPage}>Отправить</button>}
                    {codePage && <button onClick={handleCodePage}>Подтвердить</button>}
                    {passwordPage && <button onClick={handlePasswordPage}>Войти</button>}
                </div>
            </div>
        </div>
    )
}
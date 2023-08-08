import './style.css'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ClosedEye, JustCode, OpenEye } from '../../components/svg'
import { ForgotPassword_Code, ForgotPassword_Email, ForgotPassword_Password } from '../../Redux/action/auth_action'

export const ForgotPassword = () => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [code, setCode] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [emailPage, setEmailPage] = useState(true)
    const [codePage, setCodePage] = useState(false)
    const [passwordPage, setPasswordPage] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [errorMessage, setErrorMessage] = useState({ field: '', message: '' })
    const regStep1 = useSelector(st => st.Auth_reducer.regStep1)
    const emailError = useSelector(st => st.Auth_reducer.regEmailError)
    const codeError = useSelector(st => st.Auth_reducer.codeError)
    const regStep2 = useSelector(st => st.Auth_reducer.regStep2)
    const regStep3 = useSelector(st => st.Auth_reducer.regStep3)

    useEffect(() => {
        if (regStep1) {
            setEmailPage(false)
            setCodePage(true)
        }
    }, [regStep1])
    useEffect(() => {
        if (regStep2) {
            setCodePage(false)
            setPasswordPage(true)
        }
    }, [regStep2])
    useEffect(() => {
        if (regStep3) {
            window.location = '/auth/login'
        }
    }, [regStep3])
    useEffect(() => { codeError && setErrorMessage({ field: 'code', message: 'Неверный код.' }) }, [codeError])

    function handleEmailPage() {
        if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
            setErrorMessage({ field: 'email', message: 'Введите корректный адрес эл. почты.' })
        } else {
            dispatch(ForgotPassword_Email(email))
            setErrorMessage({ field: '', message: '' })
        }
    }

    function handleCodePage() {
        dispatch(ForgotPassword_Code(email, code))
    }

    function handlePasswordPage() {
        if (password.length < 6) {
            setErrorMessage({ field: 'password', message: 'Пароль должен содержать не менее 6-ти символов.' })
        } else if (password !== passwordConfirmation) {
            setErrorMessage({ field: 'password', message: 'Пароли не совпадают.' })
        } else dispatch(ForgotPassword_Password(email, code, password, passwordConfirmation))
    }

    return (
        <div className='loginPage'>
            <JustCode />
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
                    {emailPage && <input
                        type='email'
                        placeholder='Ваша эл. почта'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onKeyDown={e => e.key === 'Enter' && handleEmailPage()}
                        style={{ border: (errorMessage.field === 'email' || emailError) && '1px solid #e21003' }}
                    />}
                    {codePage && <input
                        type='number'
                        placeholder='Код подтверждения'
                        value={code}
                        onChange={(e) => e.target.value <= 999999 && setCode(e.target.value)}
                        onKeyDown={e => e.key === 'Enter' && handleCodePage()}
                        style={{ border: errorMessage.field === 'code' && '1px solid #e21003' }}
                    />}
                    {passwordPage && <>
                        <div className='inputEye' style={{ border: errorMessage.field === 'password' && '1px solid #e21003' }}>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                placeholder='Пароль'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                onKeyDown={e => e.key === 'Enter' && handlePasswordPage()}
                            />
                            <div className='cursor' onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <OpenEye /> : <ClosedEye />}
                            </div>
                        </div>
                        <div className='inputEye' style={{ border: errorMessage.field === 'password' && '1px solid #e21003' }} >
                            <input
                                type={showConfirmPassword ? 'text' : 'password'}
                                placeholder='Повторите пароль'
                                value={passwordConfirmation}
                                onChange={(e) => setPasswordConfirmation(e.target.value)}
                                onKeyDown={e => e.key === 'Enter' && handlePasswordPage()}
                            />
                            <div className='cursor' onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                                {showConfirmPassword ? <OpenEye /> : <ClosedEye />}
                            </div>
                        </div>
                    </>}
                </div>
                {errorMessage.message.length > 0 && <label className='error' style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '20px' }}>{errorMessage.message}</label>}
                {emailError && <label className='error' style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '20px' }}>Неверный ввод данных. Повторите попытку.</label>}
                <div className='loginButton'>
                    {emailPage && <button onClick={handleEmailPage} className='blueButton' disabled={!email.length}>Отправить</button>}
                    {codePage && <button onClick={handleCodePage} className='blueButton' disabled={code.length < 6}>Подтвердить</button>}
                    {passwordPage && <button onClick={handlePasswordPage} className='blueButton'>Войти</button>}
                </div>
            </div>
        </div>
    )
}
import axios from 'axios'

// export const GetUser = () => {
//     return async (dispatch) => {
//         dispatch({
//             type: 'user',
//             payload: false
//         })
//     }
// }

export const OpenMask = () => {
    return {
        type: 'openMask'
    }
}

export const CloseMask = () => {
    return {
        type: 'closeMask'
    }
}

export const Registration = (email, password, passwordConfirmation) => {
    return (dispatch) => {
        axios.post(`${process.env.REACT_APP_HOSTNAME}/registration`, {
            email, password,
            password_confirmation: passwordConfirmation,
            lang: localStorage.getItem('lang'),
        })
            .then(res => dispatch({
                type: 'register',
                payload: res
            }))
            .catch(error => dispatch({
                type: 'registerError',
                payload: error
            }))
    }
}

export const ConfirmCode = (email, code) => {
    return (dispatch) => {
        axios.post(`${process.env.REACT_APP_HOSTNAME}/verify_registration`, { email, code })
            .then(res => dispatch({
                type: 'confirmCode',
                payload: res
            }))
            .catch(error => dispatch({
                type: 'confirmCodeError',
                payload: error
            }))
    }
}

export const ForgotPassword_Email = (email) => {
    return (dispatch) => {
        axios.post(`${process.env.REACT_APP_HOSTNAME}/send_code_to_email_from_forgot_password`, { email, lang: localStorage.getItem('lang') })
            .then(res => dispatch({
                type: 'forgotPasswordEmail',
                payload: res
            }))
            .catch(error => dispatch({
                type: 'forgotPasswordEmailError',
                payload: error
            }))
    }
}

export const ForgotPassword_Code = (email, code) => {
    return (dispatch) => {
        axios.post(`${process.env.REACT_APP_HOSTNAME}/validation_code_email_from_forgot_password`, { email, code })
            .then(res => dispatch({
                type: 'forgotPasswordCode',
                payload: res
            }))
            .catch(error => dispatch({
                type: 'confirmCodeError',
                payload: error
            }))
    }
}

export const ForgotPassword_Password = (email, code, password, password_confirmation) => {
    return (dispatch) => {
        axios.post(`${process.env.REACT_APP_HOSTNAME}/add_new_password_from_forgot`, { email, code, password, password_confirmation })
            .then(res => dispatch({
                type: 'forgotPasswordPassword',
                payload: res
            }))
            .catch(error => console.log('error catched', error))
    }
}

export const SignIn = (email, password) => {
    return (dispatch) => {
        axios.post(`${process.env.REACT_APP_HOSTNAME}/login`, { email, password })
            .then(res => dispatch({
                type: 'login',
                payload: res
            }))
            .catch(error => console.log('error catched', error))
    }
}
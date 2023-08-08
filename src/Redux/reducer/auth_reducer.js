import store from "../store/auth_store"

export const Auth_reducer = (state = store, action) => {
    let temp = { ...state }
    switch (action.type) {
        // case 'user':
        //     temp.user = action.payload
        //     break;
        case 'openMenu':
            temp.openCategories = true
            break
        case 'closeMenu':
            temp.openCategories = false
            break
        case 'openMask':
            temp.openMask = true
            break;
        case 'closeMask':
            temp.openMask = false
            break;
        case 'register':
            console.log(action.payload)
            if (action.payload.status) {
                temp.regStep1 = true
                temp.regEmailError = false
            }
            break;
        case 'registerError':
            if (action.payload.response.data.message.email.length) {
                temp.regStep1 = false
                temp.regEmailError = true
            }
            break;
        case 'confirmCode':
            if (action.payload.data.status) {
                localStorage.setItem('token', action.payload.data.token)
                temp.regStep2 = true
            }
            break
        case 'confirmCodeError':
            temp.codeError = true
            break;
        case 'forgotPasswordEmail':
            console.log(action.payload.data.code)
            if (action.payload.data.status) {
                temp.regStep1 = true
                temp.regEmailError = false
            }
            break;
        case 'forgotPasswordEmailError':
            temp.regEmailError = true
            break;
        case 'forgotPasswordCode':
            if (action.payload.data.status) {
                temp.regStep2 = true
            }
            break;
        case 'forgotPasswordPassword':
            if (action.payload.data.status) {
                temp.regStep3 = true
            }
            break;
        case 'login':
            if (action.payload.data.status) {
                temp.loginError = false
                localStorage.setItem('token', action.payload.data.token)
                temp.user = action.payload.data.user
                window.location = '/'
            } else {
                temp.loginError = true
            }
            break;
        default:
            return temp;
    }
    return temp;
}
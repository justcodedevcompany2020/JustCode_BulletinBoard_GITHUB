export const GetUser = () => {
    return async (dispatch) => {
        dispatch({
            type: 'user',
            payload: false
        })
    }
}

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

export const LoginError = (bool) => {
    return {
        type: bool ? 'loginError' : 'loginErrorFixed'
    }
}

export const Register = () => {

}
import axios from 'axios'

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
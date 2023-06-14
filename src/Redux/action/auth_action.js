import axios from 'axios'

export const GetUser = () => {
    return async (dispatch) => {
        dispatch({
            type: 'user',
            payload: false
        })
    }
}

export const CloseMenu = () => {
    return {
        type: 'closeMenu'
    }
}

export const OpenMenu = () => {

    return {
        type: 'openMenu'
    }
}
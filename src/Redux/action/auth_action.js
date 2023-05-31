import axios from 'axios'

export const GetUser = () => {
    return async (dispatch) => {
        dispatch({
            type: 'user',
            payload: true
        })
    }
}
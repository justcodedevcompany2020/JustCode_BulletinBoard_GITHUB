import { combineReducers } from 'redux'
import { Auth_reducer } from './auth_reducer'
import { Sidebar_reducer } from './sidebar_reducer'

export default combineReducers({
    Auth_reducer,
    Sidebar_reducer
})

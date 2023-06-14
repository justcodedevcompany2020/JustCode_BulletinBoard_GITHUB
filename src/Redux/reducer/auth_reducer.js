import store from "../store/auth_store"

export const Auth_reducer = (state = store, action) => {
    let temp = { ...state }
    switch (action.type) {
        case 'user':
            temp.user = action.payload
            break;
        case 'openMenu':
            temp.openCategories = true
            break
        case 'closeMenu':
            temp.openCategories = false
            break
        default:
            return temp;
    }
    return temp;
}
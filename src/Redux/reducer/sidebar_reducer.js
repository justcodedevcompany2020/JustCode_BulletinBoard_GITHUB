import store from "../store/sidebar_store"

export const Sidebar_reducer = (state = store, action) => {
    let temp = { ...state }
    switch (action.type) {
        case 'openMenu':
            temp.openCategories = true
            break;
        case 'closeMenu':
            temp.openCategories = false
            break;
        case 'changeMenu':
            temp.changeMenu = action.payload
            break;
        case 'changeWalletMenu':
            temp.changeWalletMenu = action.payload
            break;
        default:
            return temp;
    }
    return temp;
}
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
        case 'openSearch':
            temp.openSearch = true
            break;
        case 'closeSearch':
            temp.openSearch = false
            break;
        case 'openDownloadApp':
            temp.openDownloadApp = true
            break;
        case 'closeDownloadApp':
            temp.openDownloadApp = false
            break;
        default:
            return temp;
    }
    return temp;
}
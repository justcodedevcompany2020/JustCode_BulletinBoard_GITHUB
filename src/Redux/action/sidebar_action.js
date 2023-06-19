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

export const ChangeMenu = (title) => {
    return {
        type: 'changeMenu',
        payload: title,
    }
}

export const ChangeWalletMenu = (menuIndex) => {
    return {
        type: 'changeWalletMenu',
        payload: menuIndex,
    }
}
import './style.css'
import { useState } from 'react'
import { EditEmail } from '../popup/editEmaill'
import { EditPassword } from '../popup/editPassword'
import { DeleteAccount } from '../popup/deleteAccount'

export const AccountSettings = () => {
    const [openPassword, setOpenPassword] = useState(false)
    const [openEmail, setOpenEmail] = useState(false)
    const [openDelete, setOpenDelete] = useState(false)

    return (
        <div className='profileInfo' id='accountSet'>
            <EditPassword
                open={openPassword}
                setOpen={setOpenPassword}
            />
            <EditEmail
                open={openEmail}
                setOpen={setOpenEmail}
            />
            <DeleteAccount
                open={openDelete}
                setOpen={setOpenDelete}
            />
            <div className='eachProfileSetting' id='profSetting'>
                <div className='changeAvatar accountSettings'>
                    <span className='accSet'>Изменить пароль</span>
                    <p>Вы можете изменить свой пароль, указав старый пароль и введя и подтвердив новый пароль.</p>
                </div>
                <p onClick={() => setOpenPassword(true)}>Изменить</p>
            </div>
            <div className='eachProfileSetting' id='profSetting'>
                <div className='changeAvatar accountSettings'>
                    <span className='accSet'>Изменить электронную почту</span>
                    <p>Чтобы изменить адрес электронной почты, укажите новый адрес, на который вам будет отправлено письмо для подтверждения.</p>
                </div>
                <p onClick={() => setOpenEmail(true)}>Изменить</p>
            </div>
            <div className='eachProfileSetting' id='profSetting'>
                <div className='changeAvatar accountSettings'>
                    <span className='accSet'>Удалить учетную запись</span>
                    <p>Вы можете навсегда удалить свою учетную запись. Ваши объявления и вся другая информация будут удалены, и вы никогда не сможете снова использовать этот адрес электронной почты на List.am.</p>
                </div>
                <p onClick={() => setOpenDelete(true)}>Удалить</p>
            </div>
        </div>
    )
}
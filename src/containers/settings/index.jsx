import Tabs from '../../components/tabs'
import { ProfilSettings } from '../../components/profileSettings'
import { ContactSettings } from '../../components/contactSettings'
import { AccountSettings } from '../../components/accountSettings'
import { BlacklistSettings } from '../../components/blacklistSettings'

export const Settings = () => {
    const tabList = ['Профиль', 'Контактная информация', 'Заблокированные пользователи', 'Учетная запись']
    const tabPanel = [<ProfilSettings />, <ContactSettings />, <BlacklistSettings />, <AccountSettings />]

    return <Tabs tabList={tabList} tabPanel={tabPanel} />
}
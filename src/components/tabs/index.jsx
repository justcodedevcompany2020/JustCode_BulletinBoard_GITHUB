import './style.css'
import * as React from 'react'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import { MyWallet } from '../myWallet'
import { MobileTabs } from '../mobileTabs'
import { MyPayments } from '../myPayments'
import { MyOperations } from '../myOperations'
import { LeavedReviews } from '../leavedReviews'
import { ProfilSettings } from '../profileSettings'
import { ContactSettings } from '../contactSettings'
import { ReceivedReviews } from '../receivedReviews'
import { AccountSettings } from '../accountSettings'
import { useDispatch, useSelector } from 'react-redux'
import { BlacklistSettings } from '../blacklistSettings'
import { ChangeMenu } from '../../Redux/action/sidebar_action'
import { MyActiveAnnouncements } from '../myActiveAnnouncements'
import { MyInactiveAnnouncements } from '../myInactiveAnnouncements'

export default function Tabs({ tabList, tabPanel }) {
    const dispatch = useDispatch()
    const title = useSelector(st => st.Sidebar_reducer.changeMenu)
    const [value, setValue] = React.useState('1')
    const smallScreen = window.matchMedia("(max-width: 425px)").matches
    const bigScreen = window.matchMedia("(min-width: 425px)").matches

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    React.useEffect(() => {
        if (window.location.pathname === '/profile/settings') {
            dispatch(ChangeMenu('Профиль'))
        } else if (window.location.pathname === '/profile/wallet') {
            dispatch(ChangeMenu('Кошелёк'))
        } else if (window.location.pathname === '/profile/reviews') {
            dispatch(ChangeMenu('Полученные'))
        } else if (window.location.pathname === '/profile/profile') {
            dispatch(ChangeMenu('Активные'))
        }
    }, [dispatch])

    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <div className='webTabs'>
                        <TabList onChange={handleChange} >
                            {tabList?.map((e, i) => (
                                <Tab key={i} label={e} value={i + 1 + ''} />
                            ))}
                        </TabList>
                    </div>
                    <div className='mobileTabs'>
                        <MobileTabs tabList={tabList} />
                    </div>
                </Box>
                {bigScreen > 425 &&
                    tabPanel.map((e, i) => (
                        <TabPanel key={i} value={i + 1 + ''}>{e}</TabPanel>
                    ))
                }
                {smallScreen &&
                    <div className='tabMrg'>
                        {title === 'Профиль' && <ProfilSettings />}
                        {title === 'Контактная информация' && <ContactSettings />}
                        {title === 'Заблокированные пользователи' && <BlacklistSettings />}
                        {title === 'Учетная запись' && <AccountSettings />}
                        {title === 'Активные' && <MyActiveAnnouncements />}
                        {title === 'Неактивные' && <MyInactiveAnnouncements />}
                        {title === 'Полученные' && <ReceivedReviews />}
                        {title === 'Оставленные' && <LeavedReviews />}
                        {title === 'Кошелёк' && <MyWallet />}
                        {title === 'Платежи' && <MyPayments />}
                        {title === 'Операции' && <MyOperations />}
                    </div>
                }
            </TabContext>
        </Box>
    )
}
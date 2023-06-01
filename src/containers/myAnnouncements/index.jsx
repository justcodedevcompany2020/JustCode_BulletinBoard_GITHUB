import './style.css'
import Tabs from '../../components/tabs'
import { MyActiveAnnouncements } from '../../components/myActiveAnnouncements'
import { MyInactiveAnnouncements } from '../../components/myInactiveAnnouncements'

export const MyAnnouncements = () => {
    const tabList = ['Активные', 'Неактивные']
    const tabPanel = [<MyActiveAnnouncements />, <MyInactiveAnnouncements />]
    
    return (
        <div>
            <Tabs tabList={tabList} tabPanel={tabPanel} />
        </div>
    )
}
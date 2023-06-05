import Tabs from '../../components/tabs'
import { LeavedReviews } from '../../components/leavedReviews'
import { ReceivedReviews } from '../../components/receivedReviews'

export const Reviews = () => {
    const tabList = ['Полученные', 'Оставленные']
    const tabPanel = [<ReceivedReviews />, <LeavedReviews />]

    return <Tabs tabList={tabList} tabPanel={tabPanel} />
}
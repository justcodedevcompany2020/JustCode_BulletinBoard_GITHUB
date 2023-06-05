import './style.css'
import Tabs from '../../components/tabs'
import { MyWallet } from '../../components/myWallet'
import { MyPayments } from '../../components/myPayments'
import { MyOperations } from '../../components/myOperations'

export const Wallet = () => {
    const tabList = ['Кошелёк', 'Платежи', 'Операции']
    const tabPanel = [<MyWallet />, <MyPayments />, <MyOperations />]

    return <Tabs tabList={tabList} tabPanel={tabPanel} />
}
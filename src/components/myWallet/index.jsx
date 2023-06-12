import './style.css'
import Tabs from '../tabs'
import { PayViaIdram } from '../payFromWallet'
import { Idram, Telcell, Visa } from '../svg'

export const MyWallet = () => {
    return (
        <div className='myWallet'>
            <div className='eachWallet'>
                <div className='walletBg'>
                    <span>1000 Р</span>
                    <p>Баланс Кошелька</p>
                </div>
                <div className='walletInfo'>
                    <h1>Номер кошелька 191846</h1>
                    <p>Кошелёк - удобный и выгодный способ оплачивать услуги на Justcode.am. <br />
                        С помощью кошелька вы можете экономить до 10% от стоимости наших услуг.
                    </p>
                </div>
            </div>
            <div className='topUpMyWallet'>
                <h1>Пополнить кошелёк</h1>
                <Tabs
                    tabList={[<Idram />, <Visa />, <Telcell />]}
                    tabPanel={[<PayViaIdram via={'Idram'} />, <PayViaIdram via={'Visa'} />, <PayViaIdram via={'Telcell'} />]}
                />
            </div>
        </div>
    )
}
import './style.css'
import Tabs from '../tabs'
import { useState } from 'react'
import { Idram, Telcell, Visa } from '../svg'
import { PayViaIdram } from '../payFromWallet'

export const MyWallet = () => {
    const [active, setActive] = useState(1)
    const smallScreen = window.matchMedia("(max-width: 425px)").matches
    const bigScreen = window.matchMedia("(min-width: 425px)").matches

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
                {bigScreen &&
                    <Tabs
                        tabList={[<Idram />, <Visa />, <Telcell />]}
                        tabPanel={[<PayViaIdram via={'Idram'} />, <PayViaIdram via={'Visa'} />, <PayViaIdram via={'Telcell'} />]}
                    />
                }
                {smallScreen &&
                    <>
                        <div className='mobileWalletTabs'>
                            <div className='changeWalletTabs'>
                                <div className='centerDiv eachWalletTab' style={active === 1 ? { borderBottom: ' 2px solid #7791F7' } : { borderBottom: ' 2px solid #ebebeb' }} onClick={() => setActive(1)}>
                                    <Idram />
                                </div>
                                <div className='centerDiv eachWalletTab' style={active === 2 ? { borderBottom: ' 2px solid #7791F7' } : { borderBottom: ' 2px solid #ebebeb' }} onClick={() => setActive(2)}>
                                    <Visa />
                                </div>
                                <div className='centerDiv eachWalletTab' style={active === 3 ? { borderBottom: ' 2px solid #7791F7' } : { borderBottom: ' 2px solid #ebebeb' }} onClick={() => setActive(3)}>
                                    <Telcell />
                                </div>
                            </div>
                            <PayViaIdram via={active === 1 ? 'Idram' : active === 2 ? 'Visa' : 'Telcell'} />
                        </div>
                    </>
                }
            </div>
        </div>
    )
}
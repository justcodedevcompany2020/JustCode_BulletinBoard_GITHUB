import './style.css'

export const MyPayments = () => {
    const payments = [
        {
            date: 'Август 17, 2022 23:28',
            payVia: 'Telcell',
            price: '1000 Р',
            id: 1,
        },
        {
            date: 'Август 17, 2022 23:28',
            payVia: 'Telcell',
            price: '1000 Р',
            id: 2,
        },
        {
            date: 'Август 17, 2022 23:28',
            payVia: 'Telcell',
            price: '1000 Р',
            id: 3,
        },
    ]

    return (
        <div className='payViaIdram'>
            {payments.length > 0
                ? payments.map((e, i) => (
                    <div key={i} className='eachPayment'>
                        <div className='eachMyPayment' id='eachPayLeft'>
                            <p>{e?.date}</p>
                            <span>{e?.payVia}</span>
                        </div>
                        <div className='eachMyPayment' id='eachPayRight'>
                            <p onClick={() => console.log('id --->>>', e?.id)} style={{ cursor: 'pointer' }}>Пополнить кошелёк</p>
                            <span>{e?.price}</span>
                        </div>
                    </div>
                ))
                : <div className='noActiveAnnouncements'>
                    <p>No Payments</p>
                </div>
            }
        </div>
    )
}
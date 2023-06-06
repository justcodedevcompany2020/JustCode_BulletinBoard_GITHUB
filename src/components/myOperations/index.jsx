import './style.css'

export const MyOperations = () => {
    const operations = [
        {
            date: 'Август 17, 2022 23:28',
            price: '1000 Р',
            id: 1,
        },
        {
            date: 'Август 17, 2022 23:28',
            price: '1000 Р',
            id: 2,
        },
        {
            date: 'Август 17, 2022 23:28',
            price: '1000 Р',
            id: 3,
        },
    ]

    return (
        <div className='payViaIdram'>
            {operations.length > 0
                ? operations.map((e, i) => (
                    <div key={i} className='eachPayment'>
                        <div className='eachMyPayment' id='eachPayLeft'>
                            <p>{e?.date}</p>
                            <span onClick={() => console.log('id --->>>', e?.id)} style={{ cursor: 'pointer' }}>Разместить в Топ</span>
                        </div>
                        <div className='eachMyPayment' id='eachOperRight'>
                            <p>{e?.price}</p>
                        </div>
                    </div>
                ))
                : <div className='noActiveAnnouncements'>
                    <p>No operations</p>
                </div>
            }
        </div>
    )
}
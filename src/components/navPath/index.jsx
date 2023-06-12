import './style.css'

export const NavPath = ({ width }) => {
    const navPath = [
        {
            path: 'Главная',
            url: '/'
        },
        {
            path: 'Услуги исполнителей',
            url: ''
        },
        {
            path: 'Изготовление на заказ',
            url: ''
        },
        {
            path: 'Шкафы купе от производителя',
            url: ''
        },
    ]

    return (
        <div className='navPath' style={{ width }}>
            <ul>
                {navPath.length > 0 && navPath.map((e, i) => {
                    if (i === navPath.length - 1) {
                        return <li key={i} onClick={() => window.location = e?.url}>{e?.path}</li>
                    } else {
                        return (
                            <div key={i} className='navUrl'>
                                <li style={{ color: '#7791F7' }} key={i} onClick={() => window.location = e?.url}>{e.path}</li>
                                <span>&bull;</span>
                            </div>
                        )
                    }
                })}
            </ul>
        </div>
    )
}
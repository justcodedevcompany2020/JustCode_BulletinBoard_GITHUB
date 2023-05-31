import './style.css'

export const NavPath = () => {
    const navPath = [
        {
            path: 'Главная'
        },
        {
            path: 'Услуги исполнителей'
        },
        {
            path: 'Изготовление на заказ'
        },
        {
            path: 'Шкафы купе от производителя'
        },
    ]

    return (
        <div className='navPath'>
            <ul>
                {navPath.length > 0 && navPath?.map((e, i) => (
                    (i === navPath.length - 1)
                        ? <li key={i}>{e.path}</li>
                        // stex key-i warning
                        : <>
                            <li style={{ color: '#7791F7' }} key={i}>{e.path}</li>
                            <span>&bull;</span>
                        </>
                ))}
            </ul>
        </div>
    )
}
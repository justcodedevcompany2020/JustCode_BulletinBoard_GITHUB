import './style.css'
import { Similar } from '../similar'
import { SingleAnnouncementLeftPart } from './leftPart'
import { SingleAnnouncementRightPart } from './rightPart'
import { useContext } from 'react'
import Context from '../context/context'

export const SingleAnnouncement = () => {
    const context = useContext(Context)
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
        <div className='pageBg'>
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
            <div className='singleMainPart'>
                <SingleAnnouncementLeftPart />
                <SingleAnnouncementRightPart />
                {/* {context.windowSize.innerWidth > 425 && <SingleAnnouncementRightPart />} */}
            </div>
            <div className='similar'>
                <Similar />
            </div>
        </div>
    )
}
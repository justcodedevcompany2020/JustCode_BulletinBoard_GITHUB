import './style.css'
import { Similar } from '../similar'
import { SingleAnnouncementLeftPart } from './leftPart'
import { SingleAnnouncementRightPart } from './rightPart'

export const SingleAnnouncement = () => {
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
        <div>
            <div className='navPath'>
                <ul>
                    {navPath.length > 0 && navPath.map((e, i) => (<>
                        {(i === navPath.length - 1)
                            ? <li>{e.path}</li>
                            : <li style={{ color: '#7791F7' }}>{e.path}</li>
                        }
                        {(i !== navPath.length - 1) && <span>&bull;</span>}
                    </>
                    ))}
                </ul>
            </div>

            <div className='singleMainPart'>
                <SingleAnnouncementLeftPart />
                <SingleAnnouncementRightPart />
            </div>

            <div className='similar'>
                <Similar />
            </div>
        </div>
    )
}
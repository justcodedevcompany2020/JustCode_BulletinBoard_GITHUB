import './style.css'
import { useState } from 'react'
import { MoreIcons } from '../svg'

export const BlacklistSettings = () => {
    const blacklist = [
        {
            image: 'man.png',
            name: 'Алексей',
            date: '13 мар 2023',
            id: 1,
        },
        {
            image: 'man.png',
            name: 'Алексей',
            date: '13 мар 2023',
            id: 2,
        },
        {
            image: 'man.png',
            name: 'Алексей',
            date: '13 мар 2023',
            id: 3,
        },
        {
            image: 'man.png',
            name: 'Алексей',
            date: '13 мар 2023',
            id: 4,
        },
        {
            image: 'man.png',
            name: 'Алексей',
            date: '13 мар 2023',
            id: 5,
        },
    ]
    const [seeMore, setSeeMore] = useState(null)

    return (
        <div className='allMyContacts'>
            {blacklist.length > 0
                ? blacklist.map((e, i) =>
                    <div className='eachContact' id='eachBlack' key={i}>
                        <div className='eachBlacklist'>
                            <img alt='' src={require(`../../public/${e?.image}`)} />
                            <div className='blackName'>
                                <h2>{e?.name}</h2>
                                <h3>{e?.date}</h3>
                            </div>
                        </div>
                        <div className='eachContactConfirmation'>
                            <div className='moreIcons' onClick={() => {
                                if (seeMore !== e.id) {
                                    setSeeMore(e.id)
                                } else {
                                    setSeeMore(null)
                                }
                            }}>
                                <MoreIcons />
                                <div className='seeMore' style={seeMore === e.id ? { display: 'flex' } : { display: 'none' }}>
                                    <span>Разблокировать</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )
                : <div className='noActiveAnnouncements'>
                    <p>No blacklist</p>
                </div>
            }
        </div>
    )
}
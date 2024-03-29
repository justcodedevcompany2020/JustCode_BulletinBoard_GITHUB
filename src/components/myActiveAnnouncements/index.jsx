import './style.css'
import { useState } from 'react'
import { SelectLabel } from '../popup/selectLabel'
import { AddToTop, Heart, HeartFilled } from '../svg'
import { SellGoodsFaster } from '../popup/sellGoodsFaster'

export const MyActiveAnnouncements = () => {
    const [advertisement, setAdvertisement] = useState([
        {
            price: '950.000 $',
            image: 'apartment.png',
            liked: false,
            description: 'Прокат машин',
            buyMe: false,
            urgent: false,
            location: 'Ереван',
            id: 2
        },
        {
            price: '950.000 $',
            image: 'apartment.png',
            liked: true,
            description: 'Прокат машин',
            buyMe: true,
            urgent: false,
            location: 'Ереван',
            id: 3
        },
        {
            price: '950.000 $',
            image: 'apartment.png',
            liked: false,
            description: 'Прокат машин',
            buyMe: false,
            urgent: false,
            location: 'Ереван',
            id: 4
        },
        {
            price: '950.000 $',
            image: 'apartment.png',
            liked: true,
            description: 'Прокат машин',
            buyMe: false,
            urgent: true,
            location: 'Ереван',
            id: 5
        },
        {
            price: '950.000 $',
            image: 'apartment.png',
            liked: false,
            description: 'Прокат машин',
            buyMe: false,
            urgent: false,
            location: 'Ереван',
            id: 6
        },
        {
            price: '950.000 $',
            image: 'apartment.png',
            liked: true,
            description: 'Прокат машин',
            buyMe: true,
            urgent: false,
            location: 'Ереван',
            id: 7
        },
        {
            price: '950.000 $',
            image: 'apartment.png',
            liked: false,
            description: 'Прокат машин',
            buyMe: false,
            urgent: false,
            location: 'Ереван',
            id: 8
        },
        {
            price: '950.000 $',
            image: 'apartment.png',
            liked: true,
            description: 'Прокат машин',
            buyMe: false,
            urgent: true,
            location: 'Ереван',
            id: 9
        },
        {
            price: '950.000 $',
            image: 'apartment.png',
            liked: false,
            description: 'Прокат машин',
            buyMe: false,
            urgent: false,
            location: 'Ереван',
            id: 10
        },
        {
            price: '950.000 $',
            image: 'apartment.png',
            liked: true,
            description: 'Прокат машин',
            buyMe: true,
            urgent: false,
            location: 'Ереван',
            id: 11
        },
        {
            price: '950.000 $',
            image: 'apartment.png',
            liked: false,
            description: 'Прокат машин',
            buyMe: false,
            urgent: false,
            location: 'Ереван',
            id: 12
        },
    ])
    const [selectedLabel, setSelectedLabel] = useState(null)
    const [openPopup, setOpenPopup] = useState(null)
    const [openSelect, setOpenSelect] = useState(false)

    function handleFavorite(event) {
        let item = [...advertisement]
        item.find(e => e === event).liked = !item.find(e => e === event).liked
        setAdvertisement(item)
    }

    return (
        <div className='catalogItems'>
            <SellGoodsFaster
                open={openPopup}
                setOpen={setOpenPopup}
                // onClickHomeBtn={() => {
                //     setOpenPopup1(true)
                //     setOpenPopup(null)
                // }}
                // onClickTopBtn={() => {
                //     setOpenPopup1(true)
                //     setOpenPopup(null)
                // }}
                onClickLabelBtn={() => {
                    setOpenSelect(true)
                    setOpenPopup(null)
                    setSelectedLabel(null)
                }}
                selectedLabel={selectedLabel}
                setSelectedLabel={setSelectedLabel}
            />
            <SelectLabel
                open={openSelect}
                setOpen={setOpenSelect}
                onClick={() => console.log('buy selected label')}
            />
            {advertisement.length > 0 ? advertisement.map((e, i) => (
                <div className='catalogImages' key={i}>
                    <img alt='' src={require(`../../public/${e.image}`)} onClick={() => window.location = '/item/1'} />
                    <div className='topPadding'>
                        {e?.price.length > 14
                            ? <p>{e?.price.slice(0, 14) + '...'}</p>
                            : <p>{e?.price}</p>
                        }
                        {e?.description.length > 20
                            ? <span>{e?.description.slice(0, 20) + '...'}</span>
                            : <span>{e?.description}</span>
                        }
                    </div>
                    <div className='topLocation'>
                        <span>{e.location}</span>
                    </div>
                    <div className='addToTop' onClick={() => setOpenPopup(e?.id)}>
                        <AddToTop />
                    </div>
                    {e.urgent &&
                        <div className='profileUrgent'>
                            <span>Срочно !</span>
                        </div>
                    }
                    {e.buyMe &&
                        <div className='profileBuyMe'>
                            <span>Купи меня</span>
                        </div>
                    }
                    <div className='topFavorite' onClick={() => handleFavorite(e)} style={{ top: '170px' }}>
                        {e.liked ?
                            <HeartFilled />
                            : <Heart />
                        }
                    </div>
                </div>
            ))
                : <div className='noActiveAnnouncements'>
                    <p>Здесь вы найдете все активные объявления. В данный момент у вас нет активных объявлений.</p>
                    <button onClick={() => window.location = '/create'}>Разместить обьявление</button>
                </div>
            }
        </div>
    )
}
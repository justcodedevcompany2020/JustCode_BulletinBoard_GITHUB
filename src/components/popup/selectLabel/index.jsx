import './style.css'
import { useState } from 'react'
import { CloseIcon } from '../../svg'

export const SelectLabel = ({ open, setOpen, onClick }) => {
    const labels = [
        {
            id: 1,
            title: 'Срочно!',
            background: 'red',
        },
        {
            id: 2,
            title: 'Срочно!',
            background: 'red',
        },
        {
            id: 3,
            title: 'Срочно!',
            background: 'red',
        },
        {
            id: 4,
            title: 'Срочно!',
            background: 'red',
        },
        {
            id: 5,
            title: 'Срочно!',
            background: 'red',
        },
        {
            id: 6,
            title: 'Срочно!',
            background: 'red',
        },
        {
            id: 7,
            title: 'Срочно!',
            background: 'red',
        },
        {
            id: 8,
            title: 'Срочно!',
            background: 'red',
        },
        {
            id: 9,
            title: 'Срочно!',
            background: 'red',
        },
        {
            id: 10,
            title: 'Срочно!',
            background: 'red',
        },
    ]
    const details = [
        {
            title: 'Срок действи',
            price: '1 месяц',
        },
        {
            title: 'Цена',
            price: '12,000 Р',
        },
        {
            title: 'В кошельке',
            price: '200 Р',
        },
    ]
    const [active, setActive] = useState(null)

    function chooseLabel(e) {
        labels.filter((event, index) => {
            if (e === event) {
                setActive(index)
            }
        })
    }

    return (
        <div className={open ? 'active' : 'inactive'}>
            <div className='pop' style={{ width: '570px' }}>
                <div className='close' onClick={() => {
                    setOpen(false)
                    setActive(null)
                }} >
                    <CloseIcon />
                </div>
                <h1>Продайте свой товар быстрее</h1>
                <span id='sellSpan'>Вы можете продвегать свое объявление данными способами</span>
                <div className='loginSeparator' />
                <div className='popupScroller'>
                    <div className='urgentLabels' style={{ marginBottom: '30px' }}>
                        {labels.map((e, i) => (
                            <div key={i} style={active == null ? { background: '#e21003', opacity: '1' } : {}} className={active === i ? 'selectedLabel' : 'otherLabels'} onClick={() => chooseLabel(e)}>
                                <span>{e.title}</span>
                            </div>
                        ))}
                    </div>
                    <div className='loginSeparator' />
                    <div className='labelPriceList'>
                        {details.map((e, i) => (
                            <div className='eachLabelPrice' key={i}>
                                <p>{e?.title}</p>
                                <span>{e?.price}</span>
                            </div>
                        ))}
                    </div>
                    <div className='labelButton'>
                        <button onClick={() => active !== null && onClick()} style={active === null ? { background: 'rgba(119, 145, 247, 0.3)', color: '#7791F7' } : {}} className='blueButton'>Купить</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
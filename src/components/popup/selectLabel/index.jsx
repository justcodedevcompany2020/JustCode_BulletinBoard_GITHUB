import './style.css'
import { CloseIcon } from '../../svg'
import { useState } from 'react'

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
    const [selected, setSelected] = useState()

    function chooseLabel(id) {
        let selectedLabel = labels.find(e => e.id === id)
        console.log(selectedLabel)
    }

    return (
        <div className={open ? 'active' : 'inactive'}>
            <div className='pop' style={{ width: '570px' }}>
                <div className='close' onClick={() => {
                    setOpen(false)
                }} >
                    <CloseIcon />
                </div>
                <h1>Продайте свой товар быстрее</h1>
                <span id='sellSpan'>Вы можете продвегать свое объявление данными способами</span>
                <div className='loginSeparator' />
                <div className='popupScroller'>
                    <div className='urgentLabels' style={{ marginBottom: '30px' }}>
                        {labels.map((e, i) => (
                            <div key={i} className={e.background === 'red' ? 'urgent cursor' : 'cursor'} onClick={() => chooseLabel(i + 1)}>
                                <span>{e.title}</span>
                            </div>
                        ))}
                    </div>
                    <div className='loginSeparator' />
                    <div className='labelPriceList'>
                        <div className='eachLabelPrice'>
                            <p>Срок действия</p>
                            <span>1 месяц</span>
                        </div>
                        <div className='eachLabelPrice'>
                            <p>Цена</p>
                            <span>12,000 Р</span>
                        </div>
                        <div className='eachLabelPrice'>
                            <p>В кошельке</p>
                            <span>200 Р</span>
                        </div>
                    </div>
                    <div className='labelButton'>
                        <button className='blueButton' onClick={onClick}>Купить</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
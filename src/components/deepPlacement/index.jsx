import { useState } from 'react'
import { Checkmark } from '../svg'
import './style.css'

export const DeepPlacement = ({ open, setHeaderTitle, setHeaderIcon }) => {
    open && setHeaderIcon('back')
    open && setHeaderTitle('Срок размещения')
    const [check, setCheck] = useState(2)

    return (
        <div className={open ? 'activeBrands' : 'inactive'}>
            <div className='eachActivePlacement' onClick={() => setCheck(1)}>
                <span>За 24 часа</span>
                {check === 1 && <Checkmark />}
            </div>
            <div className='eachActivePlacement' onClick={() => setCheck(2)}>
                <span>За 7 дней</span>
                {check === 2 && <Checkmark />}
            </div>
            <div className='eachActivePlacement' onClick={() => setCheck(3)}>
                <span>За всё время</span>
                {check === 3 && <Checkmark />}
            </div>
        </div>
    )
}
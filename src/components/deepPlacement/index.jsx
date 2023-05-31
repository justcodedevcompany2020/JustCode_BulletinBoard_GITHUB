import './style.css'
import { useState } from 'react'
import { Checkmark } from '../svg'
import { FilterHeader } from '../filterHeader'

export const DeepPlacement = ({ open, setOpen }) => {
    const [check, setCheck] = useState(2)

    return (
        <div className={open ? 'activeBrands' : 'inactive'}>
            <FilterHeader
                title={'Срок размещения'}
                icon={'back'}
                open={open}
                setOpen={setOpen}
            />
            <div className='top60'>
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
        </div>
    )
}
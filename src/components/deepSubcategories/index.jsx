import './style.css'
import { useState } from 'react'
import { FilterHeader } from '../filterHeader'

export const DeepSubcategories = ({ open, setOpen }) => {
    const [subcategory, setSubcategory] = useState(['Аксессуары', 'Аксессуары', 'Аксессуары', 'Аксессуары', 'Аксессуары', 'Аксессуары', 'Аксессуары', 'Аксессуары'])

    return (
        <div className={open ? 'activeSubcategories' : 'inactive'}>
            <FilterHeader
                title={'Уточнить подкатегорию'}
                icon={'back'}
                open={open}
                setOpen={setOpen}
            />
            <div className='top60'>
                {subcategory?.map((e, i) => (
                    <h2 key={i}>{e}</h2>
                ))}
            </div>
        </div>
    )
}
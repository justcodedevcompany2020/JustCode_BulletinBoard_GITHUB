import './style.css'
import { useState } from 'react'

export const DeepSubcategories = ({ open, setHeaderTitle, setHeaderIcon }) => {
    open && setHeaderIcon('back')
    open && setHeaderTitle('Уточнить подкатегорию')
    const [subcategory, setSubcategory] = useState(['Аксессуары', 'Аксессуары', 'Аксессуары', 'Аксессуары', 'Аксессуары', 'Аксессуары', 'Аксессуары', 'Аксессуары'])

    return (
        <div className={open ? 'activeSubcategories' : 'inactive'}>
            {subcategory?.map((e, i) => (
                <h2 key={i}>{e}</h2>
            ))}
        </div>
    )
}
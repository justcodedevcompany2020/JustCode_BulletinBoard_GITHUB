import './style.css'
import { useState } from 'react'

export const DeepBrands = ({ open, setHeaderTitle, setHeaderIcon }) => {
    open && setHeaderIcon('back')
    open && setHeaderTitle('Бренд')
    const [brand, setBrand] = useState(['Dolce & Gabbana', 'Nike', 'Adidas', 'Reebok', 'Versace', 'Emporio Armani'])

    return (
        <div className={open ? 'activeBrands' : 'inactive'}>
            {brand?.map((e, i) => (
                <p>{e}<input type='checkbox' className='brandCheckbox' value={e} /></p>
            ))}
        </div>
    )
}
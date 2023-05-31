import './style.css'
import { useState } from 'react'
import { FilterHeader } from '../filterHeader'

export const DeepBrands = ({ open, setOpen }) => {
    const [brand, setBrand] = useState(['Dolce & Gabbana', 'Nike', 'Adidas', 'Reebok', 'Versace', 'Emporio Armani'])

    return (
        <div className={open ? 'activeBrands' : 'inactive'}>
            <FilterHeader
                title={'Бренд'}
                icon={'back'}
                open={open}
                setOpen={setOpen}
            />
            <div className='top60'>
                {brand?.map((e, i) => (
                    <label>{e}<input type='checkbox' value={e} /></label>
                ))}
            </div>
        </div>
    )
}
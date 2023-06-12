import './style.css'
import { useState } from 'react'
import { FilterHeader } from '../filterHeader'
import { Checkbox } from '../svg'

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
                    <div className='brandCheckbox' key={i}>
                        <label>{e}</label>
                        <div className='checkbox' style={true ? { background: '#7791f7' } : {}}>
                            <Checkbox />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
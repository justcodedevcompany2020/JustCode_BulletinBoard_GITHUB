import './style.css'
import { useState } from 'react'
import Switch from '@mui/material/Switch'

export const SwitchFilter = ({ open, title }) => {
    const [checked, setChecked] = useState(false)

    return (
        <div className={open ? 'singleSelectFilter' : 'inactive'}>
            <div className='switchFilter'>
                <h3> {title}</h3>
                <Switch
                    checked={checked}
                    onChange={e => setChecked(e.target.checked)}
                />
            </div>
        </div>
    )
}
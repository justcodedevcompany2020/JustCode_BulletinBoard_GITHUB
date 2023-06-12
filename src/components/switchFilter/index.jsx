import './style.css'
import Switch from "react-switch"
import { useState } from 'react'

export const SwitchFilter = ({ open, title }) => {
    const [checked, setChecked] = useState(false)

    return (
        <div className={open ? 'singleSelectFilter' : 'inactive'}>
            <div className='switchFilter'>
                <h3> {title}</h3>
                <Switch
                        checked={checked}
                        onChange={(e) => setChecked(e)}
                        offColor='#EBEBEB'
                        onColor='#7791F7'
                        uncheckedIcon={false}
                        checkedIcon={false}
                        width={35}
                        height={20}
                        borderRadius={10}
                    />
            </div>
        </div>
    )
}
import './style.css'
import { BlueBack, BlueCloseIcon } from '../svg'

export const FilterHeader = ({ title, icon, setOpen, close }) => {
    return (
        <div className='filterHamTop'>
            <h1>{title}</h1>
            <div className='blueCloseIcon'>
                {icon === 'close'
                    ? <div onClick={() => setOpen(false)}>
                        <BlueCloseIcon />
                    </div>
                    : <div onClick={() => setOpen(false)}>
                        <BlueBack />
                    </div>
                }
            </div>
        </div>
    )
}
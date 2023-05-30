import './style.css'
import { BlueArrowRight } from '../svg'

export const DeepFilter = ({ title }) => {
    return (
        <div className='deepFilter'>
            <h2>{title}</h2>
            <BlueArrowRight />
        </div>
    )
}
import './style.css'
import { WatchLeft } from './watchLeft'
import { WatchRight } from './watchRight'

export const WatchBeforeSubmit = ({ setCurrentStep }) => {
    return (
        <div className='watchToSubmit'>
            <div className='singleMainPart' style={{ width: '100%', padding: '30px' }}>
                <WatchLeft />
                <WatchRight />
            </div>
            <div className='watchButtons'>
                <div className='watchLeftBtn'>
                    <button className='blueButton' onClick={() => setCurrentStep(4)}>Разместить</button>
                    <button className='blueButton' onClick={() => setCurrentStep(1)}>Изменить</button>
                </div>
                <button onClick={() => setCurrentStep(0)}>Отменить</button>
            </div>
        </div>
    )
}
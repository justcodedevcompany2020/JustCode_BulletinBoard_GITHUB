import './style.css'
import { useDispatch, useSelector } from 'react-redux'
import { CloseDownloadApp } from '../../../Redux/action/sidebar_action'

export const DownloadApp = () => {
    const open = useSelector(st => st.Sidebar_reducer.openDownloadApp)
    const dispatch = useDispatch()
    
    return (
        <div className={open ? 'activePopup' : 'inactive'}>
            <div className='downloadApp'>
                <h1>JustCode</h1>
                <img alt='' src={require('../../../public/youla.jpg')} />
                <div className='eachFooterColumn'>
                    <img alt='' src={require('../../../public/googlePlay.png')} />
                    <img alt='' src={require('../../../public/appStore.png')} />
                </div>
                <span onClick={() => dispatch(CloseDownloadApp())}>Пропустить</span>
            </div>
        </div>
    )
}
import './style.css'
import { CloseIcon, Star } from '../../svg'

export const TextAnnouncer = ({ open, setOpen }) => {
    return (
        <div className={open ? 'active' : 'inactive'}>
            <div className='pop' style={{ width: '570px' }}>
                <div className='close' onClick={() => setOpen(false)}>
                    <CloseIcon />
                </div>
                <h1>Послать сообщение</h1>
                <div className='loginSeparator' />
                <div className='callTop'>
                    <img alt='' src={require('../../../public/man.png')} />
                    <h5 onClick={() => window.location = `/seller/1`}>Алексей Т.</h5>
                    <h6>на JustCode с 13 мар 2023 </h6>
                    <div className='businessRating'>
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                    </div>
                    <span>2 отзыва</span>
                </div>
                <textarea placeholder='Ваше сообщение' />
                <div className='sendMessage'>
                    <span>Отправить</span>
                </div>
            </div>
        </div>
    )
}
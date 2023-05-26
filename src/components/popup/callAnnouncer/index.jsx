import './style.css'
import { CloseIcon, Star, Viber, Whatsapp } from '../../svg'

export const CallAnnouncer = ({ open, setOpen }) => {
    return (
        <div className={open ? 'active' : 'inactive'}>
            <div className='pop' style={{ width: '370px' }}>
                <div className='close' onClick={() => setOpen(false)}>
                    <CloseIcon />
                </div>
                <h1>Позвонить</h1>
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
                <div className='loginSeparator' />
                <div className='callPhone'>
                    <a href='tel:077122134'>(077) 12-21-34</a>
                </div>
                <div className='callPhone'>
                    <a href='tel:077122134'>(077) 12-21-34</a>
                </div>
                <div className='loginSeparator' />
                <div className='CallOther'>
                    <Whatsapp />
                    <span>WhatsApp</span>
                </div>
                <div className='callPhone'>
                    <a href='tel:077122134'>(077) 12-21-34</a>
                </div>
                <div className='CallOther'>
                    <Viber />
                    <span>Viber</span>
                </div>
                <div className='callPhone'>
                    <a href='tel:077122134'>(077) 12-21-34</a>
                </div>
            </div>
        </div>
    )
}
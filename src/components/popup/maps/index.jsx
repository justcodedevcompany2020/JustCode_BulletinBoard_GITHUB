import './style.css'
import { CloseIcon } from "../../svg"

export const Maps = ({ open, setOpen }) => {
    return (
        <div className={open ? 'activePopup' : 'inactive'}>
            <div className='pop' style={{ width: '900px' }}>
                <div className='close' onClick={() => {
                    setOpen(false)
                }}>
                    <CloseIcon />
                </div>
                <h1>26a Movses Khorenatsi Street, Yerevan</h1>
                <div className='loginSeparator' />
                <iframe title='maps' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d190.5399326570288!2d44.51106948095729!3d40.172592384419765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abdbd86faeca3%3A0x90233b43f9aaa717!2sJustCode%20Development%20Company!5e0!3m2!1sru!2sam!4v1688729729526!5m2!1sru!2sam" className="maps" allowFullScreen="" referrerPolicy="no-referrer-when-downgrade" />
            </div>
        </div>
    )
}
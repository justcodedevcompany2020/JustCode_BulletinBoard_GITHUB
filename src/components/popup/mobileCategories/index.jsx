import './style.css'
import { useEffect } from 'react'
import { BlueArrowRight, BlueCloseIcon } from '../../svg'

export const MobileCategoriesPopup = ({ open, setOpen, setSelectedCategoryTitle, onSelectCategory, categories }) => {
    useEffect(() => {
        if (open) {
            if ((document.querySelector('.pageBg') || document.querySelector('.main') || document.querySelector('.mobileCategoriesPopup')) && document.querySelector('.navigationShadow') && document.querySelector('.footerShadow')) {
                if (document.querySelector('.pageBg')) {
                    document.querySelector('.pageBg').style.display = 'none'
                } else {
                    document.querySelector('.main').style.display = 'none'
                }
                document.querySelector('.navigationShadow').style.display = 'none'
                document.querySelector('.footerShadow').style.display = 'none'
            }
        }
        else {
            if ((document.querySelector('.pageBg') || document.querySelector('.main') || document.querySelector('.mobileCategoriesPopup')) && document.querySelector('.navigationShadow') && document.querySelector('.footerShadow')) {
                if (document.querySelector('.pageBg')) {
                    document.querySelector('.pageBg').style.display = 'block'
                } else {
                    document.querySelector('.main').style.display = 'block'
                }
                document.querySelector('.navigationShadow').style.display = 'block'
                document.querySelector('.footerShadow').style.display = 'block'
            }
        }
    }, [open])

    return (
        <div className={open ? 'mobileCategoriesPopup' : 'inactive'}>
            <div className='mobileCategoriesPopupTop'>
                <h1>Категории</h1>
                <div className='mobileCategoriesPopupClose' onClick={() => setOpen(false)}>
                    <BlueCloseIcon />
                </div>
            </div>
            <div className='mobilePopupCats'>
                {categories.length > 0 && categories.map((e, i) => (
                    <div className='eachMobilePopCat' key={i} onClick={() => {
                        onSelectCategory()
                        setSelectedCategoryTitle(e?.title)
                    }}>
                        <div className='eachMobilePopCatLeft'>
                            <img alt='' src={require(`../../../public/${e?.image}`)} />
                            <span>{e?.title}</span>
                        </div>
                        <BlueArrowRight />
                    </div>
                ))}
            </div>
        </div>
    )
}
import './style.css'
import { BlueArrowRight, BlueCloseIcon } from '../../svg'

export const MobileCategoriesPopup = ({ open, setOpen, setSelectedCategoryTitle, onSelectCategory, categories }) => {
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
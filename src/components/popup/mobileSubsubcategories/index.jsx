import { BlueArrowLeft, BlueArrowRight, } from '../../svg'

export const MobileSubsubcategoriesPopup = ({ open, onClickBack, selectedSubcategoryTitle, categories }) => {
    return (
        <div className={open ? 'mobileCategoriesPopup' : 'inactive'}>
            <div className='mobileCategoriesPopupTop'>
                <h1>{selectedSubcategoryTitle}</h1>
                <div className='mobileCategoriesPopupClose' onClick={onClickBack}>
                    <BlueArrowLeft />
                </div>
            </div>
            <div className='mobilePopupCats'>
                {categories.length > 0 && categories.map((e, i) => (
                    <div className='eachMobilePopCat' key={i} onClick={() => {
                        window.location = `/catalog/${e?.id}`
                    }}>
                        <div className='eachMobilePopCatLeft'>
                            <span>{e?.title}</span>
                        </div>
                        <BlueArrowRight />
                    </div>
                ))}
            </div>
        </div>
    )
}
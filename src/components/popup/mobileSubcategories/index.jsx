import { BlueArrowLeft, BlueArrowRight } from '../../svg'

export const MobileSubcategoriesPopup = ({ open, onClickBack, setSelectedSubategoryTitle, onSelectCategory, categories, selectedCategoryTitle }) => {
    return (
        <div className={open ? 'mobileCategoriesPopup' : 'inactive'}>
            <div className='mobileCategoriesPopupTop'>
                <h1>{selectedCategoryTitle}</h1>
                <div className='mobileCategoriesPopupClose' onClick={onClickBack}>
                    <BlueArrowLeft />
                </div>
            </div>
            <div className='mobilePopupCats'>
                {categories.length > 0 && categories.map((e, i) => (
                    <div className='eachMobilePopCat' key={i} onClick={() => {
                        onSelectCategory()
                        setSelectedSubategoryTitle(e?.title)
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
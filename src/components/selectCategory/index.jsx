import './style.css'
import { useState, useEffect } from 'react'

export const SelectCategory = ({ categories, openCategories, setOpenCategories }) => {
    const [subcategories, setSubcategories] = useState(categories[0]?.subCategories)
    const [subSubCategories, setSubSubcategories] = useState(categories[0]?.subCategories[0]?.subSubcategories)
    const [activeCategory, setActiveCategory] = useState(categories[0]?.id)
    const [activeCategoryTitle, setActiveCategoryTitle] = useState(categories[0]?.title)
    const [activeSubcategory, setActiveSubcategory] = useState(categories[0]?.subCategories[0]?.id)
    const [activeSubcategoryTitle, setActiveSubcategoryTitle] = useState(categories[0]?.subCategories[0]?.title)
    const [currentImage, setCurrentImage] = useState(categories[0]?.subCategories[0]?.image)
    const bigScreen = window.matchMedia("(min-width: 768px)").matches

    useEffect(() => {
        if (!openCategories) {
            setSubcategories(categories[0]?.subCategories)
            setSubSubcategories(categories[0]?.subCategories[0]?.subSubcategories)
            setActiveCategory(categories[0]?.id)
            setActiveCategoryTitle(categories[0]?.title)
            setActiveSubcategory(categories[0]?.subCategories[0]?.id)
            setActiveSubcategoryTitle(categories[0]?.subCategories[0]?.title)
            setCurrentImage(categories[0]?.subCategories[0]?.image)
        }
    }, [openCategories])


    return (
        <>
            {bigScreen &&
                <div onClick={(e) => e.stopPropagation()} className='selectCategory'>
                    <div className='mainCats'>
                        {categories.length > 0 && categories.map((e, i) => (
                            <div key={i} className='eachCreateCat eachCreateCatRad' onMouseOver={() => {
                                setSubcategories(e?.subCategories)
                                setActiveSubcategory(e?.subCategories[0].id)
                                setSubSubcategories(e?.subCategories[0].subSubcategories)
                                setActiveCategory(e?.id)
                                setActiveCategoryTitle(e?.title)
                                setActiveSubcategoryTitle(e?.subCategories[0].title)
                                setCurrentImage(e?.subCategories[0]?.image)
                            }}
                                style={{ background: activeCategory === e?.id && '#f5f5f5' }}
                            >
                                {e?.image && <img alt='' src={require(`../../public/${e?.image}`)} />}
                                <span>{e?.title}</span>
                            </div>
                        ))}
                    </div>
                    <div className='mainCats'>
                        {subcategories?.length > 0 &&
                            <div className='selectBorder' >
                                <h2>{activeCategoryTitle}</h2>
                                {subcategories?.map((e, i) => (
                                    <div className='eachCreateCat' key={i} onMouseOver={() => {
                                        setActiveSubcategory(e?.id)
                                        setSubSubcategories(e?.subSubcategories)
                                        setActiveSubcategoryTitle(e?.title)
                                        setCurrentImage(e?.image)
                                    }} style={{ background: activeSubcategory === e?.id && '#f5f5f5' }}>
                                        <span>{e?.title}</span>
                                    </div>
                                ))}
                            </div>
                        }
                    </div>
                    <div className='mainCats'>
                        {subSubCategories?.length > 0 &&
                            <div onMouseLeave={() => {
                                setSubSubcategories(null)
                            }}>
                                <h2>{activeSubcategoryTitle}</h2>
                                {subSubCategories.map((e, i) => (
                                    <div className='eachCreateCat mainCatsRad'
                                        key={i}
                                        onClick={() => {
                                            window.location = `/catalog/${e?.id}`
                                        }}>
                                        <p>{e?.title}</p>
                                    </div>
                                ))}
                            </div>
                        }
                    </div>
                    {currentImage &&
                        <div className='catImages'>
                            <img alt='' src={require(`../../public/${currentImage}`)} />
                        </div>
                    }
                </div>
            }
        </>
    )
}
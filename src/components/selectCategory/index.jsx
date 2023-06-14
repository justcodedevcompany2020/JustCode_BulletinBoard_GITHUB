import './style.css'
import Context from '../context'
import { useContext, useState, useEffect } from 'react'

export const SelectCategory = ({ categories, openCategories, setOpenCategories }) => {
    const context = useContext(Context)
    const [subcategories, setSubcategories] = useState([])
    const [subSubCategories, setSubSubcategories] = useState(null)
    const [activeCategory, setActiveCategory] = useState(categories[0])
    const [activeCategoryTitle, setActiveCategoryTitle] = useState('')
    const [activeSubcategory, setActiveSubcategory] = useState(null)
    const [activeSubcategoryTitle, setActiveSubcategoryTitle] = useState('')
    const [activeSubSubcategory, setActiveSubSubcategory] = useState(null)
    const [currentImage, setCurrentImage] = useState(null)

    useEffect(() => {
        if (!openCategories) {
            setSubcategories([])
            setSubSubcategories(null)
            setActiveCategory(categories[0])
            setActiveCategoryTitle('')
            setActiveSubcategory(null)
            setActiveSubcategoryTitle('')
            setActiveSubSubcategory(null)
        }
    }, [openCategories])

    return (
        <>
            {context.windowSize.innerWidth > 768 &&
                <div onClick={(e) => e.stopPropagation()} className='selectCategory'>
                    <div className='mainCats'>
                        {categories.length > 0 && categories.map((e, i) => (
                            <div key={i} className='eachCreateCat' onMouseOver={() => {
                                setSubcategories(e?.subCategories)
                                setActiveSubcategory(null)
                                setSubSubcategories(e?.subCategories[0].subSubcategories)
                                setActiveCategory(i)
                                setActiveCategoryTitle(e?.title)
                                setActiveSubcategoryTitle(e?.subCategories[0].title)
                                setCurrentImage(e?.image)
                            }}
                                style={{ background: activeCategory === i && '#f5f5f5' }}
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
                                        setActiveSubcategory(i)
                                        setSubSubcategories(e?.subSubcategories)
                                        setActiveSubcategoryTitle(e?.title)
                                    }} style={{ background: activeSubcategory === i && '#f5f5f5' }}>
                                        <span>{e?.title}</span>
                                    </div>
                                ))}
                            </div>
                        }
                    </div>
                    <div className='mainCats'>
                        {subSubCategories?.length > 0 &&
                            <div onMouseLeave={() => {
                                setActiveSubSubcategory(null)
                                setSubSubcategories(null)
                            }}>
                                <h2>{activeSubcategoryTitle}</h2>
                                {subSubCategories.map((e, i) => (
                                    <div className='eachCreateCat'
                                        key={i}
                                        style={{ background: activeSubSubcategory === i && '#f5f5f5' }}
                                        onMouseOver={() => {
                                            setActiveSubSubcategory(i)
                                        }}
                                        onClick={() => {
                                            window.location = `/catalog/${e?.id}`
                                        }}>
                                        <span>{e?.title}</span>
                                    </div>
                                ))}
                            </div>
                        }
                    </div>
                    <div className='catImages'>
                        {currentImage && <img alt='' src={require(`../../public/${currentImage}`)} />}
                    </div>
                </div>
            }
        </>
    )
}
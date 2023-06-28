import './style.css'
import Switch from "react-switch"
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUp, ArrowDown, GreaterThan, LessThan, FooterFacebook, FooterInstagram, FooterLinkedIn, SearchIcon, Checkbox } from '../svg'

export const CatalogFilter = () => {
    const [subCategory, setSubCategory] = useState(true)
    const [showMoreSubCategory, setShowMoreSubCategory] = useState(false)
    const subCategories = ['Аксессуары', 'Аксессуары', 'Аксессуары', 'Аксессуары', 'Аксессуары', 'Аксессуары', 'Аксессуары', 'Аксессуары']
    const [brand, setBrand] = useState(true)
    const [showMoreBrands, setShowMoreBrands] = useState(false)
    const [brands, setBrands] = useState([
        {
            title: 'Dolce & Gabbana',
            id: 1,
            checked: false,
        },
        {
            title: 'Nike',
            id: 2,
            checked: true,
        },
        {
            title: 'Adidas',
            id: 3,
            checked: false,
        },
        {
            title: 'Reebok',
            id: 4,
            checked: false,
        },
        {
            title: 'Versace',
            id: 5,
            checked: true,
        },
        {
            title: 'Emporio Armani',
            id: 6,
            checked: false,
        }])
    const [safeDeal, setSafeDeal] = useState(false)
    const [sale, setSale] = useState(true)
    const [shop, setShop] = useState(false)
    const [placement, setPlacement] = useState(true)
    const [selectedRadio, setSelectedRadio] = useState(3)

    function handleCheck(event) {
        let item = [...brands]
        item.find(e => e === event).checked = !item.find(e => e === event).checked
        setBrands(item)
    }

    return (
        <div className='catalogFilter'>
            {subCategories.length > 0 && <div className='subCategory'>
                <h3 onClick={() => {
                    setSubCategory(!subCategory)
                    setShowMoreSubCategory(false)
                }}>Уточнить подкатегорию {subCategory ? <GreaterThan /> : <LessThan />}</h3>
                {subCategory && subCategories?.map((e, i) => {
                    if (!showMoreSubCategory) {
                        if (i < 4) {
                            return (
                                <span key={i}>{e}</span>
                            )
                        }
                    }
                    else {
                        return (
                            <span key={i}>{e}</span>
                        )
                    }
                })}
                {(subCategory && !showMoreSubCategory) && <span onClick={() => setShowMoreSubCategory(true)}>Все категории <ArrowDown /></span>}
                {(subCategory && showMoreSubCategory) && <span onClick={() => setShowMoreSubCategory(false)}>Скрыть <ArrowUp /></span>}
            </div>}
            {brands.length > 0 && <div className='subCategory brand'>
                <h3 onClick={() => {
                    setBrand(!brand)
                    setShowMoreBrands(false)
                }}>Бренд {brand ? <GreaterThan /> : <LessThan />}</h3>
                {brand && <div className='searchBrand'>
                    <SearchIcon /> <input placeholder='Поиск..' />
                </div>}
                {brand && brands?.map((e, i) => {
                    if (!showMoreBrands) {
                        if (i < 4) {
                            return (
                                <div className='notificatinCheckbox' key={i}>
                                    <div className='checkbox' style={e.checked ? { background: '#7791f7' } : {}} onClick={() => handleCheck(e)}>
                                        <Checkbox />
                                    </div>
                                    <label>{e.title}</label>
                                </div>
                            )
                        }
                    }
                    else {
                        return (
                            <div className='notificatinCheckbox' key={i}>
                                <div className='checkbox' style={e.checked ? { background: '#7791f7' } : {}} onClick={() => handleCheck(e)}>
                                    <Checkbox />
                                </div>
                                <label>{e.title}</label>
                            </div>
                        )
                    }
                })}
                {(brand && !showMoreBrands) && <span onClick={() => setShowMoreBrands(true)}>Все категории <ArrowDown /></span>}
                {(brand && showMoreBrands) && <span onClick={() => setShowMoreBrands(false)}>Скрыть <ArrowUp /></span>}
            </div>}
            <div className='subCategory'>
                <h3> Безопасная сделка
                    <Switch
                        checked={safeDeal}
                        onChange={(e) => setSafeDeal(e)}
                        offColor='#EBEBEB'
                        onColor='#7791F7'
                        uncheckedIcon={false}
                        checkedIcon={false}
                        width={35}
                        height={20}
                        borderRadius={10}
                    />
                </h3>
            </div>
            <div className='subCategory'>
                <h3> Товары со скидкой
                    <Switch
                        checked={sale}
                        onChange={(e) => setSale(e)}
                        offColor='#EBEBEB'
                        onColor='#7791F7'
                        uncheckedIcon={false}
                        checkedIcon={false}
                        width={35}
                        height={20}
                        borderRadius={10}
                    />
                </h3>
            </div>
            <div className='subCategory'>
                <h3> Товары из магазинов
                    <Switch
                        checked={shop}
                        onChange={(e) => setShop(e)}
                        offColor='#EBEBEB'
                        onColor='#7791F7'
                        uncheckedIcon={false}
                        checkedIcon={false}
                        width={35}
                        height={20}
                        borderRadius={10}
                    />
                </h3>
            </div>
            <div className='subCategory'>
                <h3 onClick={() => {
                    setPlacement(!placement)
                }}>Срок размещения {placement ? <GreaterThan /> : <LessThan />}</h3>
                {placement && <>
                    <label onClick={() => setSelectedRadio(1)}>
                        <div className={selectedRadio === 1 ? 'radioButtonSelected' : 'radioButton'}>
                            <div />
                        </div>
                        За 24 часа
                    </label>
                    <label onClick={() => setSelectedRadio(2)}>
                        <div className={selectedRadio === 2 ? 'radioButtonSelected' : 'radioButton'}>
                            <div />
                        </div>
                        За 7 дней
                    </label>
                    <label onClick={() => setSelectedRadio(3)}>
                        <div className={selectedRadio === 3 ? 'radioButtonSelected' : 'radioButton'}>
                            <div />
                        </div>
                        За всё время
                    </label>
                </>}
            </div>
            <div className='categoriesAds'>
                <div className='findUs findInCategories'>
                    <h2>JustCode в соцсетях</h2>
                    <div className='FooterSocialMedia' style={{ margin: '10px 0' }}>
                        <FooterFacebook />
                        <FooterInstagram />
                        <FooterLinkedIn />
                    </div>
                    <Link to=''>Лицензионное соглашение</Link>
                    <Link to=''>Реклама на Justcode</Link>
                    <Link to=''>Помощь</Link>
                </div>
                <div className='webAd'>
                    <img alt='' src={require('../../public/ad.png')} />
                </div>
                <div className='mobileAd'>
                    <img alt='' src={require('../../public/mobileAd.png')} />
                </div>
            </div>
        </div>
    )
}
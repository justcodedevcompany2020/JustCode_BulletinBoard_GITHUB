import './style.css'
import { useState } from 'react'
import { DeepBrands } from '../deepBrands'
import { DeepFilter } from '../deepFilter'
import { FilterHeader } from '../filterHeader'
import { SwitchFilter } from '../switchFilter'
import { DeepPlacement } from '../deepPlacement'
import { DeepSubcategories } from '../deepSubcategories'

export const CatalogFilterHamburger = ({ open, setOpen }) => {
    const [headerTitle, setHeaderTitle] = useState('Фильтр')
    const [headerIcon, setHeaderIcon] = useState('close')

    const [filterHasSubcategories, setFilterHasSubcategories] = useState(true)
    const [openSubcategories, setOpenSubcategories] = useState(false)

    const [filterHasBrands, setFilterHasBrands] = useState(true)
    const [openBrands, setOpenBrands] = useState(false)

    const [safeDeal, setSafeDeal] = useState(true)
    const [sale, setSale] = useState(true)
    const [shop, setShop] = useState(true)

    const [filterHasPlacement, setFilterHasPlacement] = useState(true)
    const [placement, setPlacement] = useState(false)

    return (
        <div className={open ? 'activeCatFilter' : 'inactive'}>
            <FilterHeader
                title={headerTitle}
                icon={headerIcon}
                setOpen={setOpen}
            />
            <DeepSubcategories
                open={openSubcategories}
                setOpen={setOpenSubcategories}
            />
            <DeepBrands
                open={openBrands}
                setOpen={setOpenBrands}
            />
            <DeepPlacement
                open={placement}
                setOpen={setPlacement}
            />
            <div className='filters'>
                {filterHasSubcategories &&
                    <div onClick={() => setOpenSubcategories(true)}>
                        <DeepFilter
                            title={'Уточнить подкатегорию'}
                        />
                    </div>
                }
                {filterHasBrands &&
                    <div onClick={() => setOpenBrands(true)}>
                        <DeepFilter
                            title={'Бренд'}
                        />
                    </div>
                }
                {safeDeal && <SwitchFilter open={safeDeal} title='Безопасная сделка' />}
                {sale && <SwitchFilter open={sale} title='Товары со скидкой' />}
                {shop && <SwitchFilter open={sale} title='Товары из магазинов' />}
                {filterHasPlacement &&
                    <div onClick={() => setPlacement(true)}>
                        <DeepFilter
                            title={'Срок размещения'}
                        />
                    </div>
                }
            </div>
        </div>
    )
}
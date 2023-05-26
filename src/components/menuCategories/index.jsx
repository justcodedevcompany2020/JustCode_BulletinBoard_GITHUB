import './style.css'
import { CategoryHamburger } from '../svg'

export const Categories = ({ openCategories, setOpenCategories }) => {

    return (
        <div className='navCategories' onClick={() => setOpenCategories(!openCategories)}>
            <CategoryHamburger />
            <span>Категории</span>
        </div>
    )
}
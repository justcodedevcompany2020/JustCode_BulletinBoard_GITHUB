import './style.css'
import { CategoryHamburger } from '../svg'

export const Categories = () => {
    return (
        <div className='navCategories'>
            <CategoryHamburger />
            <span>Категории</span>
        </div>
    )
}
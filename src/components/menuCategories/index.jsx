import './style.css'
import { CategoryHamburger } from '../svg'
import { useSelector, useDispatch } from 'react-redux'
import { CloseMenu, OpenMenu } from '../../Redux/action/auth_action'

export const Categories = () => {
    const open = useSelector((st) => st.Auth_reducer.openCategories)
    const dispatch = useDispatch()
    const handleClick = (e) => {
        e.stopPropagation()
        open ? dispatch(CloseMenu()) : dispatch(OpenMenu())
    }

    return (
        <div className='navCategories' onClick={(e) => handleClick(e)}>
            <CategoryHamburger />
            <span>Категории</span>
        </div>
    )
}
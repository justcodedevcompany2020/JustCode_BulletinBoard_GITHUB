import './style.css'
import ReactFlagsSelect from 'react-flags-select'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Outlet, Link } from 'react-router-dom'
import { NavbarLogo } from '../../components/svg'
import { CloseMask } from '../../Redux/action/auth_action'

export const AuthLayout = () => {
    const [selected, setSelected] = useState("RU")
    const dispatch = useDispatch()

    return (
        <div className='logPage' onClick={() => dispatch(CloseMask())}>
            <div className='navigationShadow'>
                <div className='logNav'>
                    <div className='centerDiv cursor' onClick={() => window.location = '/'}>
                        <NavbarLogo />
                    </div>
                    <ReactFlagsSelect
                        countries={["RU", "AM", "US"]}
                        selected={selected}
                        onSelect={(code) => setSelected(code)}
                        optionsSize={14}
                        className='countries'
                        showOptionLabel={true}
                        showSelectedLabel={true}
                    />
                </div>
            </div>
            <Outlet />
            <div className='logFooter'>
                <div className='logNavLeft'>
                    <Link>Лицензионное соглашение</Link>
                    <Link
                    >Помощь</Link>
                    <Link>Реклама на JustCode</Link>
                </div>
                <span>© 2023 JustCode</span>
            </div>
        </div>

    )
}
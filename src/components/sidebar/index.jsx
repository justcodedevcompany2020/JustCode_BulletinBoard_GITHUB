import './style.css'
import { useState } from 'react'
import { NavLink } from "react-router-dom"
import { ProfileUser } from '../profileUser'

export const Sidebar = ({ sidebar }) => {
    const [active, setActive] = useState(null)
    const setIcon = (e) => {
        sidebar.filter(event => {
            if (e === event) {
                setActive(e?.id)
            }
        })
    }

    return (
        <div className='sidebar'>
            <ProfileUser />
            <div className='loginSeparator' />
            <div className='sidebarItems'>
                {sidebar.map((e, i) => (
                    <NavLink
                        key={i}
                        to={e?.path}
                        style={{ color: active === e?.id ? '#7791f7' : '' }}
                        className={({ isActive }) => isActive ? "activey" : "pending"}
                    >
                        <div className='eachSidebarItem' onMouseOver={() => setIcon(e)} onMouseLeave={() => setActive(null)} >
                            <img alt='' src={require(`../../public/${active === e?.id ? e.active_image : e.image}`)} />
                            {e.title}
                        </div>
                    </NavLink>
                ))}
            </div>
            <div className='loginSeparator' />
        </div>
    )
}
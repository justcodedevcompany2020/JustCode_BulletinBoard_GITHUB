import './style.css'
import { useState } from 'react'
import { NavLink } from "react-router-dom"
import { ProfileUser } from '../profileUser'

export const Sidebar = ({ sidebar }) => {
    const [active, setActive] = useState(null)

    const setIcon = (e) => {
        sidebar.filter((event, index) => {
            if (e === event) {
                setActive(index)
            }
        })
    }

    return (
        <div className='sidebar'>
            <ProfileUser />
            <div className='loginSeparator' />
            <div className='sidebarItems'>
                {sidebar.map((e, i) => (
                    <div key={i} onClick={() => window.location = `${e?.path}`} className='eachSidebarItem' onMouseOver={() => setIcon(e)} onMouseLeave={() => setActive(null)} >
                        <img alt='' src={require(`../../public/${active === i ? e.active_image : e.image}`)} />
                        <NavLink
                            to={`${e?.path}`}
                            style={{ color: active === i && '#7791f7' }}
                            className={({ isActive }) =>
                                isActive ? "activey" : "pending"
                            }
                        >
                            {e.title}
                        </NavLink>
                    </div>
                ))}
            </div>
            <div className='loginSeparator' />
        </div>
    )
}
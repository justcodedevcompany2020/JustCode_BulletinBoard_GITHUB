import './style.css'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ProfileUser } from '../profileUser'

export const Sidebar = ({ sidebar, active, setActive }) => {
    const [activeHover, setActiveHover] = useState(null)

    return (
        <div className='sidebar'>
            <ProfileUser />
            <div className='loginSeparator' />
            <div className='sidebarItems'>
                {sidebar.map((e, i) => (
                    <NavLink
                        key={i}
                        to={e?.path}
                        style={{ color: active.id === e?.id ? '#7791f7' : '' }}
                        className={({ isActive }) => isActive ? 'activey' : 'pending'}
                    >
                        <div className='eachSidebarItem'
                            onMouseOver={() => {
                                setActiveHover(e?.id)
                            }}
                            onMouseLeave={() => {
                                setActive(sidebar.find(e => e.path === window.location.pathname))
                                setActiveHover(null)
                            }}
                            onClick={() => {
                                setActive(e)
                            }}
                        >
                            <img alt='' src={require(`../../public/${active.id === e?.id || activeHover === e?.id ? e.active_image : e.image}`)} />
                            <span style={active.id === e?.id || activeHover === e?.id ? { color: '#7791f7', fontWeight: 600 } : {}}>{e?.title}</span>
                        </div>
                    </NavLink>
                ))}
            </div>
            <div className='loginSeparator' />
        </div>
    )
}
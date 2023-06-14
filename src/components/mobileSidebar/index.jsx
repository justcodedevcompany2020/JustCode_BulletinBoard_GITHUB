import './style.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BlueGreaterThan, BlueLessThan } from '../svg'

export const MobileSidebar = ({ sidebar, active, setActive }) => {
    const [open, setOpen] = useState(false)
    const navigate = useNavigate()
    return (
        <div className='MobileSidebar'>
            <div className='mobileSidebar' onClick={() => setOpen(!open)}>
                <div className='selectedMenu'>
                    <img alt='' src={require(`../../public/${active?.active_image}`)} />
                    <span>{active?.title}</span>
                </div>
                {open ? <BlueGreaterThan /> : <BlueLessThan />}
            </div>
            <div className={open ? 'sidebarOtherOptions' : 'inactive'}>
                {sidebar.map((e, i) => (
                    <div className='eachSidebarOption' key={i} onClick={() => {
                        setActive(e)
                        navigate(e.path)
                        setOpen(false)
                    }}>
                        {active?.title === e.title ? <img alt='' src={require(`../../public/${e.active_image}`)} /> : <img alt='' src={require(`../../public/${e.image}`)} />}
                        <span style={{ color: active?.title === e.title && '#7791f7' }}>{e.title}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
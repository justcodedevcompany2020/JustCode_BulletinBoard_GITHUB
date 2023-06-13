import './style.css'
import { useState } from 'react'
import { BlueGreaterThan, BlueLessThan } from '../svg'

export const MobileSidebar = ({ sidebar }) => {
    const [open, setOpen] = useState(false)
    const [selected, setSelected] = useState(sidebar.find((e) => e.path = window.location.pathname))
    console.log(selected);
    return (
        <div className='MobileSidebar'>
            <div className='mobileSidebar' onClick={() => setOpen(!open)}>
                <div className='selectedMenu'>
                    <img alt='' src={require(`../../public/${selected.active_image}`)} />
                    <span>{selected.title}</span>
                </div>
                {open ? <BlueGreaterThan /> : <BlueLessThan />}
            </div>
            <div className={open ? 'sidebarOtherOptions' : 'inactive'}>
                {sidebar.map((e, i) => (
                    <div className='eachSidebarOption' key={i} onClick={() => {
                        setSelected(e)
                        setOpen(false)
                    }}>
                        {selected.title === e.title ? <img alt='' src={require(`../../public/${e.active_image}`)} /> : <img alt='' src={require(`../../public/${e.image}`)} />}
                        <span style={{ color: selected.title === e.title && '#7791f7' }}>{e.title}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
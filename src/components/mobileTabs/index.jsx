import './style.css'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { BlueGreaterThan, BlueLessThan } from '../svg'
import { ChangeMenu } from '../../Redux/action/sidebar_action'

export const MobileTabs = ({ tabList }) => {
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)
    const [selected, setSelected] = useState(tabList[0])

    return (
        <div className='MobileSidebar'>
            <div className='mobileSidebar' onClick={() => setOpen(!open)}>
                <div className='selectedMenu selectedTab'>
                    <span>{selected}</span>
                </div>
                {open ? <BlueGreaterThan /> : <BlueLessThan />}
            </div>
            <div className={open ? 'tabOtherOptions' : 'inactive'}>
                {tabList.map((e, i) => (
                    <div className='eachSidebarOption eachTabOption' key={i} onClick={() => {
                        setSelected(e)
                        setOpen(false)
                        dispatch(ChangeMenu(e))
                    }}>
                        <span style={{ color: selected === e && '#7791f7' }}>{e}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
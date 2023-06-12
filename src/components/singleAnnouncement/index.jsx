import './style.css'
import Context from '../context'
import { useContext } from 'react'
import { NavPath } from '../navPath'
import { Similar } from '../similar'
import { SingleAnnouncementLeftPart } from './leftPart'
import { SingleAnnouncementRightPart } from './rightPart'

export const SingleAnnouncement = () => {
    const context = useContext(Context)

    return (
        <div className='pageBg'>
            <NavPath width={'80%'}/>
            <div className='singleMainPart'>
                <SingleAnnouncementLeftPart />
                <SingleAnnouncementRightPart />
                {/* {context.windowSize.innerWidth > 425 && <SingleAnnouncementRightPart />} */}
            </div>
            <div className='similar'>
                <Similar />
            </div>
        </div>
    )
}
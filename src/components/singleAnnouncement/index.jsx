import './style.css'
import Context from '../context'
import { useContext } from 'react'
import { Similar } from '../similar'
import { SingleAnnouncementLeftPart } from './leftPart'
import { SingleAnnouncementRightPart } from './rightPart'
import { NavPath } from '../navPath'

export const SingleAnnouncement = () => {
    const context = useContext(Context)

    return (
        <div className='pageBg'>
            <NavPath />
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
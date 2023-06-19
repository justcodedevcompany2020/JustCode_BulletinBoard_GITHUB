import './style.css'
import { NavPath } from '../navPath'
import { Similar } from '../similar'
import { SingleAnnouncementLeftPart } from './leftPart'
import { SingleAnnouncementRightPart } from './rightPart'

export const SingleAnnouncement = () => {
    return (
        <div className='pageBg'>
            <NavPath width={'80%'} />
            <div className='singleMainPart'>
                <SingleAnnouncementLeftPart />
                <SingleAnnouncementRightPart />
            </div>
            <div className='similar'>
                <Similar />
            </div>
        </div>
    )
}
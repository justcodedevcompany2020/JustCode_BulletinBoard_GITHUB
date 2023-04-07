import './mainNavs.css'
import { MainNavs } from './mainNavs'
import { LittleNavs } from './littleNavs'
import { MobileNavs } from './mobileNavs'

export const Navigation = () => {
    return (
        <div className='navigationShadow'>
            <div className='navigation'>
                <LittleNavs />
                <MainNavs />
                <MobileNavs />
            </div>
        </div>
    )
}
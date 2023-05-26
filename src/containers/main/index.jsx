import './style.css'
import { Slider } from '../../components/slider'
import { MainTop } from '../../components/mainTop'
import { Appartments } from '../../components/mainApartments'
import { AutoService } from '../../components/mainAutoService'
import { MainCategories } from '../../components/mainPageCategories'
import { MainBusinessAccounts } from '../../components/mainPageBusinessAccounts'
import { FooterFacebook, FooterInstagram, FooterLinkedIn } from '../../components/svg'
import { Link } from 'react-router-dom'

export const Main = () => {
    return (
        <div className='main'>
            <Slider />
            <div className='mainAndBusiness'>
                <MainCategories />
                <MainBusinessAccounts />
            </div>
            <MainTop />
            <div className='autoAndApartment'>
                <div className='autoAndApartmentLeftPart'>
                    <AutoService />
                    <Appartments />
                </div>
                <div className='autoAndApartmentRightPart'>
                    <div className='findUs'>
                        <h2>JustCode в соцсетях</h2>
                        <div className='FooterSocialMedia'>
                            <FooterFacebook />
                            <FooterInstagram />
                            <FooterLinkedIn />
                        </div>
                        <Link to=''>Лицензионное соглашение</Link>
                        <Link to=''>Реклама на Justcode</Link>
                        <Link to=''>Помощь</Link>
                    </div>
                    <div className='webAd'>
                        <img alt='' src={require('../../public/ad.png')} />
                        <img alt='' src={require('../../public/ad.png')} />
                    </div>
                    <div className='mobileAd'>
                        <img alt='' src={require('../../public/mobileAd.png')} />
                    </div>
                </div>
            </div>
        </div>
    )
}
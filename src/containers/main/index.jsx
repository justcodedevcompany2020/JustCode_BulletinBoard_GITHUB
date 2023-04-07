import './style.css'
import { Slider } from '../../components/slider'
import { MainTop } from '../../components/mainTop'
import { Appartments } from '../../components/mainApartments'
import { AutoService } from '../../components/mainAutoService'
import { MainCategories } from '../../components/mainPageCategories'
import { MainBusinessAccounts } from '../../components/mainPageBusinessAccounts'
import { FooterFacebook, FooterInstagram, FooterLinkedIn } from '../../components/svg'

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
                        <span>Лицензионное соглашение</span>
                        <span>Реклама на Justcode</span>
                        <span>Помощь</span>
                    </div>
                    <img alt='' src={require('../../public/ad.png')} />
                    <img alt='' src={require('../../public/ad.png')} />
                </div>
            </div>
        </div>
    )
}
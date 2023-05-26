import './style.css'
import { Link } from 'react-router-dom'
import { FooterFacebook, FooterInstagram, FooterLinkedIn } from '../svg'

export const CatalogFilter = () => {
    return (
        <div className='catalogFilter'>
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
    )
}
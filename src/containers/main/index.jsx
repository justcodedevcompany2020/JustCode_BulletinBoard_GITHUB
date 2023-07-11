import './style.css'
import Context from '../../components/context'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useContext, useEffect } from 'react'
import { MainTop } from '../../components/mainTop'
import { MainSlider } from '../../components/slider'
import { Appartments } from '../../components/mainApartments'
import { AutoService } from '../../components/mainAutoService'
import { OpenDownloadApp } from '../../Redux/action/sidebar_action'
import { MainCategories } from '../../components/mainPageCategories'
import { MainBusinessAccounts } from '../../components/mainPageBusinessAccounts'
import { FooterFacebook, FooterInstagram, FooterLinkedIn } from '../../components/svg'

export const Main = () => {
    const dispatch = useDispatch()
    const context = useContext(Context)

    useEffect(() => {
        setTimeout(() => {
            dispatch(OpenDownloadApp())
        }, 25000)
    }, [dispatch])

    if (context.windowSize.innerWidth < 1024) {
        let lastScrollPosition = window.pageYOffset
        window.addEventListener('scroll', function () {
            const currentScrollPosition = window.pageYOffset
            if (currentScrollPosition > lastScrollPosition) {
                document.querySelector('.mobAddAnn').style.transform = 'translateY(220%)'
                document.querySelector('.mobAddAnn').style.transition = 'transform 200ms ease-in-out 0s'
            } else {
                document.querySelector('.mobAddAnn').style.transform = 'none'
            }
            if (document.body?.offsetHeight - (window.innerHeight + document.querySelector('.footerShadow').offsetHeight + 50) <= currentScrollPosition) {
                document.querySelector('.mobAddAnn').style.transform = 'translateY(-20%)'
            }
            lastScrollPosition = currentScrollPosition
        })
    }

    return (
        <div className='main'>
            <MainSlider />
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
                    {/* <div className='mobileAd'>
                        <img alt='' src={require('../../public/mobileAd.png')} />
                    </div> */}
                </div>
            </div>
            <div className='mobAddAnn'>
                <button onClick={() => window.location = '/create'}>Разместить объявление</button>
            </div>
        </div>
    )
}
import './style.css'
import Context from '../../components/context'
import { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
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
        }, 15000)
    }, [dispatch])

    console.log(document?.querySelector('.autoServiceSlider')?.offsetHeight)

    if (context.windowSize.innerWidth < 1024) {
        let lastScrollPosition = window.pageYOffset
        window.addEventListener('scroll', function () {
            const currentScrollPosition = window.pageYOffset
            if (currentScrollPosition > lastScrollPosition) {
                if (currentScrollPosition - 800 >= document?.querySelector('.main')?.offsetHeight) {
                    document.querySelector('.mobAddAnn').style.display = 'none'
                } else {
                    document.querySelector('.mobAddAnn').style.transform = 'translateY(200%)'
                    document.querySelector('.mobAddAnn').style.transition = 'transform 200ms ease-in-out 0s'
                    document.querySelector('.mobAddAnn').style.display = 'flex'
                }
            } else {
                document.querySelector('.mobAddAnn').style.transform = 'none'
                document.querySelector('.mobAddAnn').style.transition = 'transform 200ms ease-in-out 0s'
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
                <button>Разместить объявление</button>
            </div>
        </div>
    )
}
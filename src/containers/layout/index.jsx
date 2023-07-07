import './style.css'
import { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Context from '../../components/context'
import { Footer } from '../../components/footer'
import { Navigation } from '../../components/navigation'
import { CloseMenu } from '../../Redux/action/sidebar_action'

export const Layout = () => {
    const dispatch = useDispatch()
    const context = useContext(Context)

    if (context.windowSize.innerWidth < 1024) {
        let lastScrollPosition = window.pageYOffset
        window.addEventListener('scroll', function () {
            const currentScrollPosition = window.pageYOffset
            if (currentScrollPosition > lastScrollPosition) {
                document.querySelector('.mobAddAnn').style.transform = 'translateY(200%)'
                document.querySelector('.mobAddAnn').style.transition = 'transform 200ms ease-in-out 0s'
            } else {
                document.querySelector('.mobAddAnn').style.transform = 'none'
                document.querySelector('.mobAddAnn').style.transition = 'transform 200ms ease-in-out 0s'
            }
            lastScrollPosition = currentScrollPosition
        })
    }

    return (
        <div onClick={() => dispatch(CloseMenu())} className='layout'>
            <Navigation />
            <Outlet />
            <Footer />
            <div className='mobAddAnn'>
                <button>Разместить объявление</button>
            </div>
        </div>
    )
}
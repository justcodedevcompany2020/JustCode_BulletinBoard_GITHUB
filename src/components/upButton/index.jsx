import './style.css'
import { ScrollUp } from '../svg'
import { useEffect } from 'react'

export const UpButton = () => {

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY >= 200 && window.matchMedia("(min-width: 426px)").matches) {
                document.querySelector('.upButton').style.display = 'flex';
            } else {
                document.querySelector('.upButton').style.display = 'none';
            }
        })
    }, [])

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return <button className='upButton' onClick={scrollToTop}><ScrollUp /></button>
}
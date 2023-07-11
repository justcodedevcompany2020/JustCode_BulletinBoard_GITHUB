import './style.css'
import 'pure-react-carousel/dist/react-carousel.es.css'
import { useState } from 'react'
import { BiggerSign } from '../svg'

export const MainBusinessAccounts = () => {
    const [advertisement, setAdvertisement] = useState([
        {
            title: 'HD Computers',
            image: 'business.png'
        },
        {
            title: 'HD Computers',
            image: 'business.png'
        },
        {
            title: 'HD Computers',
            image: 'business.png'
        },
        {
            title: 'HD Computers',
            image: 'business.png'
        },
        {
            title: 'HD Computers',
            image: 'business.png'
        },
        {
            title: 'HD Computers',
            image: 'business.png'
        },
        {
            title: 'HD Computers',
            image: 'business.png'
        },
        {
            title: 'HD Computers',
            image: 'business.png'
        },
        {
            title: 'HD Computers',
            image: 'business.png'
        },
        {
            title: 'HD Computers',
            image: 'business.png'
        },
        {
            title: 'HD Computers',
            image: 'business.png'
        },
        {
            title: 'HD Computers',
            image: 'business.png'
        },
        {
            title: 'HD Computers',
            image: 'business.png'
        },
        {
            title: 'HD Computers',
            image: 'business.png'
        },
        {
            title: 'HD Computers',
            image: 'business.png'
        },
    ])

    return (
        <div className='businessCategories'>
            <div className='pageTitle'>
                <h2>Бизнес страницы</h2>
                <div className='centerDiv' style={{ marginTop: '5px' }}>
                    <BiggerSign />
                </div>
            </div>
            <div className='businessArrows'>
                {advertisement.length > 0 && advertisement.map((e, i) => (
                    <img alt='' key={i} className='eachMenuBusiness' src={require(`../../public/${e.image}`)} onClick={() => window.location = '/item/1'} />
                ))}
            </div>
        </div>
    )
}
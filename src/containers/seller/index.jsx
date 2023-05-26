import './style.css'
import { SingleSellerLeft } from '../../components/singleSeller/singleSellerLeft'
import { SingleSellerRight } from '../../components/singleSeller/singleSellerRight'

export const Seller = () => {
    const navPath = [
        {
            path: 'Главная'
        },
        {
            path: 'Алексей Т.'
        },
    ]

    return (
        <div className='pageBg'>
            <div className='navPath'>
                <ul>
                    {navPath.length > 0 && navPath?.map((e, i) => (
                        (i === navPath.length - 1)
                            ? <li key={i}>{e.path}</li>
                            // stex key-i warning
                            : <>
                                <li style={{ color: '#7791F7' }} key={i}>{e.path}</li>
                                <span>&bull;</span>
                            </>
                    ))}
                </ul>
            </div>
            <div className='singleSeller'>
                <SingleSellerLeft />
                <SingleSellerRight />
            </div>
        </div>
    )
}
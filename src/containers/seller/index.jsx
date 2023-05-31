import './style.css'
import { SingleSellerLeft } from '../../components/singleSeller/singleSellerLeft'
import { SingleSellerRight } from '../../components/singleSeller/singleSellerRight'
import { NavPath } from '../../components/navPath'

export const Seller = () => {
    return (
        <div className='pageBg'>
            <NavPath />
            <div className='singleSeller'>
                <SingleSellerLeft />
                <SingleSellerRight />
            </div>
        </div>
    )
}
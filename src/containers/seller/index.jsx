import './style.css'
import { NavPath } from '../../components/navPath'
import { SingleSellerLeft } from '../../components/singleSeller/singleSellerLeft'
import { SingleSellerRight } from '../../components/singleSeller/singleSellerRight'

export const Seller = () => {
    return (
        <div className='pageBg'>
            <NavPath width={window.matchMedia("(min-width: 768px)").matches ? '80%' : '90%'} />
            <div className='singleSeller'>
                <SingleSellerLeft />
                <SingleSellerRight />
            </div>
        </div>
    )
}
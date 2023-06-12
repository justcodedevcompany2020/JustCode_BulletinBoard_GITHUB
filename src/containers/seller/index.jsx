import './style.css'
import Context from '../../components/context'
import { useContext } from 'react'
import { NavPath } from '../../components/navPath'
import { SingleSellerLeft } from '../../components/singleSeller/singleSellerLeft'
import { SingleSellerRight } from '../../components/singleSeller/singleSellerRight'

export const Seller = () => {
    const context = useContext(Context)

    return (
        <div className='pageBg'>
            <NavPath width={context.windowSize.innerWidth > 768 ? '80%' : '90%'} />
            <div className='singleSeller'>
                <SingleSellerLeft />
                <SingleSellerRight />
            </div>
        </div>
    )
}
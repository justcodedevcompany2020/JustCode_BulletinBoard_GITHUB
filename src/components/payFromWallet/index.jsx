import './style.css'

export const PayViaIdram = ({ via }) => {
    return (
        <div className='payViaIdram'>
            <p>Оплата через платежную систему <span>{via}</span></p>
            <div className='idramPayment'>
                <input type='number' placeholder='5000' />
                <button className='blueButton'>Оплатить</button>
            </div>
        </div>
    )
}
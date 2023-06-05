import './style.css'

export const PayViaIdram = () => {
    return (
        <div className='payViaIdram'>
            <p>Оплата через платежную систему <span>Idram</span></p>
            <div className='idramPayment'>
                <input type='number' placeholder='5000'/>
                <button className='blueButton'>Оплатить</button>
            </div>
        </div>
    )
}
export const TopLabel = ({ onClick }) => {
    return (
        <div className='homeLabel'>
            <p>Объявление будет размещено на главной странице List.am в ротации с другими объявлениями.</p>
            <ul>
                <li>Максимальное количество показов на самой посещаемой странице сайта</li>
                <li>Первым, что увидят посетители - это ваше объявление</li>
                <li>Выделение желтым фоном на время действия услуги</li>
            </ul>
            <div className='loginSeparator' />
            <div className='labelPriceList'>
                <div className='eachLabelPrice'>
                    <p>Срок действия</p>
                    <span>1 месяц</span>
                </div>
                <div className='eachLabelPrice'>
                    <p>Цена</p>
                    <span>12,000 Р</span>
                </div>
                <div className='eachLabelPrice'>
                    <p>В кошельке</p>
                    <span>200 Р</span>
                </div>
            </div>
            <div className='labelButton'>
                <button className='blueButton' onClick={onClick}>Купить</button>
            </div>
        </div>
    )
}
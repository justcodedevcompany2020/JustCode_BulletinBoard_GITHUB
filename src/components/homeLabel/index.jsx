import './style.css'

export const HomeLabel = ({ onClick }) => {
    return (
        <div className='homeLabel'>
            <p>Объявление будет помещено в блок "Топ объявления" наверху всех страниц рубрики. </p>
            <ul>
                <li>Значительное увеличение просмотров</li>
                <li>Приоритет в результатах поиска</li>
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
export const LabelLabel = ({ onClick }) => {
    return (
        <div className='homeLabel'>
            <p>В объявление будет добавлена яркая метка, видная на странице объявления, в списке объявлений и в результатах поиска.
                <ul>
                    <li>Метки разного дизайна и оформления для персонализации вашего объявления</li>
                    <li>Объявления с меткой получают больше откликов от посетителей</li>
                    <li>Идеальная возможность привлечь внимание к вашему объявлению</li>
                </ul>
            </p>
            <div className='loginSeparator' />
            <div className='urgentLabels'>
                <div className='urgent'>
                    <span>Срочно!</span>
                </div>
                <div className='urgent'>
                    <span>Срочно!</span>
                </div>
                <div className='urgent'>
                    <span>Срочно!</span>
                </div>
                <div className='urgent'>
                    <span>Срочно!</span>
                </div>
                <div className='urgent'>
                    <span>Срочно!</span>
                </div>
                <div className='urgent'>
                    <span>Срочно!</span>
                </div>
                <div className='urgent'>
                    <span>Срочно!</span>
                </div>
                <div className='urgent'>
                    <span>Срочно!</span>
                </div>
                <div className='urgent'>
                    <span>Срочно!</span>
                </div>
                <div className='urgent'>
                    <span>Срочно!</span>
                </div>
            </div>
            <div className='labelButton'>
                <button className='blueButton' onClick={onClick}>Выбрать метку</button>
            </div>
        </div>
    )
}
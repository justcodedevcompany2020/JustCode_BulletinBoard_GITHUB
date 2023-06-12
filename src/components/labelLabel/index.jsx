export const LabelLabel = ({ onClick }) => {
    const labels = [
        {
            title: 'Срочно!',
        },
        {
            title: 'Срочно!',
        },
        {
            title: 'Срочно!',
        },
        {
            title: 'Срочно!',
        },
        {
            title: 'Срочно!',
        },
        {
            title: 'Срочно!',
        },
        {
            title: 'Срочно!',
        },
        {
            title: 'Срочно!',
        },
        {
            title: 'Срочно!',
        },
        {
            title: 'Срочно!',
        },
    ]
    return (
        <div className='homeLabel'>
            <p>В объявление будет добавлена яркая метка, видная на странице объявления, в списке объявлений и в результатах поиска.</p>
            <ul>
                <li>Метки разного дизайна и оформления для персонализации вашего объявления</li>
                <li>Объявления с меткой получают больше откликов от посетителей</li>
                <li>Идеальная возможность привлечь внимание к вашему объявлению</li>
            </ul>
            <div className='loginSeparator' />
            <div className='urgentLabels'>
                {labels?.map((e, i) => (
                    <div className='selectedLabel' key={i}>
                        <span>{e?.title}</span>
                    </div>
                ))}
            </div>
            <div className='labelButton'>
                <button className='blueButton' onClick={onClick}>Выбрать метку</button>
            </div>
        </div>
    )
}
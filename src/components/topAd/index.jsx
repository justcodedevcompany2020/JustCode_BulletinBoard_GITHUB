import './style.css'

export const TopAd = () => {
    return (
        <div className='topAd'>
            <h1>Уникальный узор и ручная работа в коврах ИКЕА</h1>
            <button>Подробнее</button>
            <img alt='' src={require('../../public/ikea.jpg')} />
        </div>
    )
}
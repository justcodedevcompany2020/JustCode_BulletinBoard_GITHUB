import './style.css'
import { MobileHeart } from '../svg'
import { Carousel } from 'react-carousel-minimal'
import { MobileRightPart } from './mobileRightPart'

export const SingleAnnouncementLeftPart = () => {
    const images = [
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
        },
        {
            image: "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
        },
        {
            image: "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
        },
        {
            image: "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
        },
        {
            image: "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
        },
        {
            image: "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
        },
        {
            image: "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
        },
        {
            image: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
        }
    ]

    const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
    }

    return (
        <div className='singleMainLeft'>
            <div className='nameBlock'>
                <h1>Шкафы купе от производителя</h1>
                <span>Добавить в избранное</span>
                <div className='mobileHeart noMobileHeart'>
                    <MobileHeart />
                </div>
            </div>
            <Carousel
                data={images}
                time={2000}
                width="850px"
                height="500px"
                radius="10px"
                slideNumber={true}
                slideNumberStyle={slideNumberStyle}
                captionPosition="bottom"
                slideBackgroundColor="transparent"
                slideImageFit="cover"
                thumbnails={true}
                thumbnailWidth="90px"
            />
            <div className='urgent'>
                <span>Срочно!</span>
            </div>
            <MobileRightPart />
            <div className='mainInfo'>
                <div className='eachInfo'>
                    <span>Местоположение</span>
                    <div className='showOnMap'>
                        <span>Ереван</span>
                        <p>Показать на карте</p>
                    </div>
                </div>
                <div className='loginSeparator' />
                <div className='eachInfo'>
                    <span>Описание</span>
                    <p>
                        Шкафы купе от производителя
                        ⭐Наша компания занимается производством шкафов-купе, угловых шкафов, встроенных шкафов купе, распашных шкафов, и другой мебели для дома. Работаем с 1994.
                        🔥Качественная мебель напрямую от производителя. Также для Вашего удобства есть возможность сборки мебели. Качество на совесть!

                        Преимущества работы с нами:
                        ✔️ Высокое качество;
                        ✔️ Индивидуальные размеры.
                        💯Разнообразные цвета .
                        🫢Направляющие на выбор: Топ Лайн ,Версаль ,Аристо.
                        💙Самые низкие цены.
                        📌Гарантия;
                        👍Оплата после доставки.
                        ✔️ Вызов замерщика 1500 руб. При оформление заказа после замера, за замер мы вычтем 1500 руб. с заказа, замер будет бесплатный;
                        ✅Срок изготовления: 2 дня; ✔️ Подъём 700 руб;
                        ⭐Просчитаем за 5 минут Вам.
                        ✔️ Готовый каталог;
                        ✔️ Акция ! Зеркало в подарок;

                        🎁Доставка БЕСПЛАТНО по Москве и Московской области бесплатная до 60 км от МКАД. За МКАД 35 р. за 1 км, только если дальше 60 км. 📲 📞Пишите, звоните и мы проконсультируем вас по всем вопросам!
                        Добавляйте нас в Избранное 💖 чтобы не потерять
                    </p>
                </div>
                <div className='loginSeparator' />
                <div className='eachInfo'>
                    <span>Категория</span>
                    <p>Услуги исполнителей</p>
                </div>
                <div className='loginSeparator' />
                <div className='eachInfo'>
                    <span>Категория</span>
                    <p>Услуги исполнителей</p>
                </div>
                <div className='loginSeparator' />
                <div className='eachInfo'>
                    <span>Подкатегория</span>
                    <p>Изготовление на заказ</p>
                </div>
                <div className='eachInfo'>
                    <span>Вид услуг</span>
                    <p>Мебель на заказ</p>
                </div>
                <div className='eachInfo'>
                    <span>Стоимость указана</span>
                    <p>За услугу</p>
                </div>
                <div className='loginSeparator' />
                <div className='postLicense'>
                    <span>Номер объявления 10882266</span>
                    <span>Размещено 12.03.2023</span>
                    <span>Обновлено 23.03.2023 09:31</span>
                </div>
            </div>
        </div >
    )
}
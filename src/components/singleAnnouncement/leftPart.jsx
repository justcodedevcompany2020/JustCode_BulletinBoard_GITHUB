import './style.css'
import { useContext, useEffect, useState } from 'react'
import { MobileRightPart } from './mobileRightPart'
import { Camera, MobileHeart, NextArrow, PreviousArrow } from '../svg'
import { Carousel } from 'react-carousel-minimal';
import Context from '../context'

export const SingleAnnouncementLeftPart = () => {
    // const images = [
    //     {
    //         image: 'shkaf.png'
    //     },
    //     {
    //         image: 'shkaf2.png'
    //     },
    //     {
    //         image: 'ad.png'
    //     },
    //     {
    //         image: 'apartment.png'
    //     },
    //     {
    //         image: 'auto.png'
    //     },
    //     {
    //         image: 'madeInArmenia.png'
    //     },
    // ]
    // const [imageCount, setImageCount] = useState(0)

    // useEffect(() => {
    //     const current = document.querySelectorAll('.opacity')
    //     current.forEach((e, i) => {
    //         if (i === imageCount) {
    //             e.style.opacity = '0.5'
    //         } else {
    //             e.style.opacity = '1'
    //         }
    //     })
    // }, [imageCount])

    // function handleImageChange(change) {
    //     const slidingBox = document.querySelector('.slidingBox')
    //     slidingBox.style.transition = '400ms'

    //     if (change == 'next') {
    //         if (imageCount == images.length - 1) {
    //             slidingBox.style.transition = '0ms'
    //             setImageCount(0)
    //         } else {
    //             setImageCount(imageCount + 1)
    //         }
    //     } else if (change == 'prev') {

    //         if (imageCount == 0) {
    //             slidingBox.style.transition = '0ms'
    //             setImageCount(images.length - 1)
    //         } else {
    //             setImageCount(imageCount - 1)
    //         }
    //     }
    //     // slidingBox.style.transition = '400ms'
    // }

    const context = useContext(Context)



    const data = [
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

            {/* <div className='imageSlider'>
                <div className='mainImage'>
                    <div className='slidingBox' style={{ left: `${-imageCount}00%` }}>
                        {images.length > 0 && images.map((e, i) => (
                            <img alt='' src={require(`../../public/${e.image}`)} />
                        ))}
                    </div>
                    <div className='imageCount'>
                        <Camera />
                        <span>10</span>
                    </div>
                    <div className='previousArrow prevArrSingle' onClick={() => handleImageChange('prev')}>
                        <PreviousArrow />
                    </div>
                    <div className='nextArrow nextArrSingle' onClick={() => handleImageChange('next')}>
                        <NextArrow />
                    </div>
                </div>
                <div className='allSliderImages'>
                    {images.length > 0 && images.map((e, i) => (
                        <div className='opacity' onClick={() => { setImageCount(i) }} key={i}>
                            <img alt='' src={require(`../../public/${e.image}`)} style={{ transitionDuration: '1s' }} />
                        </div>
                    ))}
                </div>
            </div> */}

            <Carousel
                data={data}
                time={2000}
                width="850px"
                height="500px"
                // captionStyle={captionStyle}
                radius="10px"
                slideNumber={true}
                slideNumberStyle={slideNumberStyle}
                captionPosition="bottom"
                // automatic={true}
                dots={true}
                // pauseIconColor="white"
                // pauseIconSize="40px"
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
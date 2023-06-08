import './style.css'
import { useContext, useEffect, useState } from 'react'
import { MobileRightPart } from './mobileRightPart'
import { Camera, MobileHeart, NextArrow, PreviousArrow } from '../svg'
import Flickity from 'flickity'
import { Carousel } from 'react-carousel-minimal';
import Context from '../context'

export const SingleAnnouncementLeftPart = () => {
    const images = [
        {
            image: 'shkaf.png'
        },
        {
            image: 'shkaf2.png'
        },
        {
            image: 'ad.png'
        },
        {
            image: 'apartment.png'
        },
        {
            image: 'auto.png'
        },
        {
            image: 'madeInArmenia.png'
        },
    ]
    const [imageCount, setImageCount] = useState(0)
    const context = useContext(Context)

    useEffect(() => {
        const current = document.querySelectorAll('.opacity')
        current.forEach((e, i) => {
            if (i === imageCount) {
                e.style.opacity = '0.5'
            } else {
                e.style.opacity = '1'
            }
        })
    }, [imageCount])

    function handleImageChange(change) {
        if (change === 'next') {
            if (imageCount === images.length - 1) {
                setImageCount(0)
            } else {
                setImageCount(imageCount + 1)
            }
        } else if (change === 'prev') {
            if (imageCount === 0) {
                setImageCount(images.length - 1)
            } else {
                setImageCount(imageCount - 1)
            }
        }
    }

    // const data = [
    //     {
    //         image: "http://localhost:3000/static/media/shkaf.eea5ab90e54bd712cb11.png",
    //         // caption: "San Francisco"
    //     },
    //     {
    //         image: "http://localhost:3000/static/media/shkaf2.e3719d5608738c2dee39.png",
    //         // caption: "Scotland"
    //     },
    //     {
    //         image: "http://localhost:3000/static/media/ad.76307c7d50d0b32657cc.png",
    //         // caption: "Darjeeling"
    //     },
    //     {
    //         image: "http://localhost:3000/static/media/apartment.cc96864086f9f81c1736.png",
    //         // caption: "San Francisco"
    //     },
    //     {
    //         image: "http://localhost:3000/static/media/auto.941461f2dcd3115e23c7.png",
    //         // caption: "Scotland"
    //     },
    //     {
    //         image: "http://localhost:3000/static/media/madeInArmenia.a08d2f8f73591d0abd82.png",
    //         // caption: "Darjeeling"
    //     },
    // ];

    useEffect(() => {
        window.addEventListener('scroll', (event) => {
            if (window.scrollY >= 20 && context.windowSize.innerWidth > 425) {
                document.querySelector('.littleNavs').style.display = 'none';
                document.querySelector('.navigationShadow').style.position = 'sticky';
                document.querySelector('.navigationShadow').style.top = '0';
                document.querySelector('.navigationShadow').style.zIndex = '1';
            } else if (window.scrollY < 20 && context.windowSize.innerWidth > 425) {
                document.querySelector('.littleNavs').style.display = 'flex';
                document.querySelector('.navigationShadow').style.position = 'relative';
                document.querySelector('.navigationShadow').style.zIndex = '1';
            }
        })
    }, [window.scrollY])

    return (
        <div className='singleMainLeft'>
            <div className='nameBlock'>
                <h1>Шкафы купе от производителя</h1>
                <span>Добавить в избранное</span>
                <div className='mobileHeart noMobileHeart'>
                    <MobileHeart />
                </div>
            </div>

            <div className='imageSlider'>
                <div className='mainImage'>
                    <img alt='' src={require(`../../public/${images[imageCount].image}`)} />
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
                        <div className='opacity' onClick={() => setImageCount(i)} key={i}>
                            <img alt='' src={require(`../../public/${e.image}`)} />
                        </div>
                    ))}
                </div>
            </div>

            {/* <Carousel
                data={data}
                time={2000}
                width="850px"
                height="500px"
                radius="10px"
                slideBackgroundColor="darkgrey"
                slideImageFit="cover"
                thumbnails={true}
                thumbnailWidth="100px"
                style={{
                    textAlign: "center",
                    maxWidth: "850px",
                    maxHeight: "500px",
                    margin: "40px auto",
                }}
            /> */}

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
        </div>
    )
}
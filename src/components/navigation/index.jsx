import './mainNavs.css'
import { MainNavs } from './mainNavs'
import { LittleNavs } from './littleNavs'
import { MobileNavs } from './mobileNavs'
import { useEffect, useState } from 'react'
import { MobileMenu } from '../popup/mobileMenu'
import { SelectCategory } from '../selectCategory'
import { useDispatch, useSelector } from 'react-redux'
import { GetUser } from '../../Redux/action/auth_action'
import { MobileCategoriesPopup } from '../popup/mobileCategories'
import { MobileSubcategoriesPopup } from '../popup/mobileSubcategories'
import { MobileSubsubcategoriesPopup } from '../popup/mobileSubsubcategories'

export const Navigation = () => {
    const dispatch = useDispatch()
    const categories = [
        {
            title: 'Вещи, электроника и прочее',
            image: 'c1.png',
            id: 1,
            subCategories: [
                {
                    title: 'Женский гардероб',
                    id: 1,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                            id: 1
                        },
                        {
                            id: 2,
                            title: 'Category 2',
                        },
                        {
                            id: 3,
                            title: 'Category 3',
                        },
                        {
                            id: 4,
                            title: 'Category 4',
                        },
                        {
                            id: 5,
                            title: 'Category 5',
                        },
                        {
                            id: 6,
                            title: 'Category 6',
                        },
                        {
                            id: 7,
                            title: 'Category 7',
                        },
                        {
                            id: 8,
                            title: 'Category 8',
                        },
                        {
                            id: 9,
                            title: 'Category 9',
                        },
                        {
                            id: 10,
                            title: 'Category 10',
                        },
                        {
                            id: 11,
                            title: 'Category 11',
                        },
                        {
                            id: 12,
                            title: 'Category 12',
                        },
                        {
                            id: 13,
                            title: 'Category 13',
                        },
                    ]
                },
                {
                    title: 'Мужской гардероб',
                    id: 2,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Детский гардероб',
                    id: 3,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Детские товары',
                    id: 4,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Хэндмейд',
                    id: 5,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Телефоны и планшеты',
                    id: 6,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Фото- и видеокамеры',
                    id: 7,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Компьютерная техника',
                    id: 8,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'ТВ, аудио, видео',
                    id: 9,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Бытовая техника',
                    id: 10,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Для дома и дачи',
                    id: 11,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Стройматериалы и инструменты',
                    id: 12,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Красота и здоровье',
                    id: 13,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Хобби и развлечения',
                    id: 14,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Прочее',
                    id: 15,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
            ]
        },
        {
            title: 'Услуги исполнителей',
            image: 'c1.png',
            id: 2,
            subCategories: [
                {
                    title: 'Женский гардероб',
                    id: 1,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },

                        {
                            id: 2,
                            title: 'Category 3',
                        },
                        {
                            id: 3,
                            title: 'Category 4',
                        },
                        {
                            id: 4,
                            title: 'Category 5',
                        },
                        {
                            id: 5,
                            title: 'Category 6',
                        },
                        {
                            id: 6,
                            title: 'Category 7',
                        },
                        {
                            id: 7,
                            title: 'Category 8',
                        },
                        {
                            id: 8,
                            title: 'Category 9',
                        },
                        {
                            id: 9,
                            title: 'Category 10',
                        },
                        {
                            id: 10,
                            title: 'Category 11',
                        },
                        {
                            id: 11,
                            title: 'Category 12',
                        },
                        {
                            id: 12,
                            title: 'Category 13',
                        },
                    ]
                },
                {
                    title: 'Детский гардероб',
                    id: 3,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Детские товары',
                    id: 4,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Хэндмейд',
                    id: 5,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Телефоны и планшеты',
                    id: 6,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Фото- и видеокамеры',
                    id: 7,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Компьютерная техника',
                    id: 8,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'ТВ, аудио, видео',
                    id: 9,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Бытовая техника',
                    id: 10,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Для дома и дачи',
                    id: 11,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Стройматериалы и инструменты',
                    id: 12,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Красота и здоровье',
                    id: 13,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Хобби и развлечения',
                    id: 14,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Прочее',
                    id: 15,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
            ]
        },
        {
            title: 'Недвижимость',
            image: 'c1.png',
            id: 4,
            subCategories: [
                {
                    title: 'Женский гардероб',
                    id: 1,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Мужской гардероб',
                    id: 2,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Детский гардероб',
                    id: 3,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Детские товары',
                    id: 4,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Хэндмейд',
                    id: 5,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Телефоны и планшеты',
                    id: 6,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Фото- и видеокамеры',
                    id: 7,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Компьютерная техника',
                    id: 8,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'ТВ, аудио, видео',
                    id: 9,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Бытовая техника',
                    id: 10,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Для дома и дачи',
                    id: 11,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Стройматериалы и инструменты',
                    id: 12,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Красота и здоровье',
                    id: 13,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Хобби и развлечения',
                    id: 14,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Прочее',
                    id: 15,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
            ]
        },
        {
            title: 'Животные',
            image: 'c1.png',
            id: 5,
            subCategories: [
                {
                    title: 'Женский гардероб',
                    id: 1,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Мужской гардероб',
                    id: 2,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Детский гардероб',
                    id: 3,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Детские товары',
                    id: 4,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Хэндмейд',
                    id: 5,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Телефоны и планшеты',
                    id: 6,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Фото- и видеокамеры',
                    id: 7,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Компьютерная техника',
                    id: 8,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'ТВ, аудио, видео',
                    id: 9,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Бытовая техника',
                    id: 10,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Для дома и дачи',
                    id: 11,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Стройматериалы и инструменты',
                    id: 12,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Красота и здоровье',
                    id: 13,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Хобби и развлечения',
                    id: 14,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Прочее',
                    id: 15,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
            ]
        },
        {
            title: 'Легковые автомобили',
            image: 'c1.png',
            id: 6,
            subCategories: [
                {
                    title: 'Женский гардероб',
                    id: 1,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Мужской гардероб',
                    id: 2,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Детский гардероб',
                    id: 3,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Детские товары',
                    id: 4,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Хэндмейд',
                    id: 5,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Телефоны и планшеты',
                    id: 6,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Фото- и видеокамеры',
                    id: 7,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Компьютерная техника',
                    id: 8,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'ТВ, аудио, видео',
                    id: 9,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Бытовая техника',
                    id: 10,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Для дома и дачи',
                    id: 11,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Стройматериалы и инструменты',
                    id: 12,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Красота и здоровье',
                    id: 13,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Хобби и развлечения',
                    id: 14,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Прочее',
                    id: 15,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
            ]
        },
        {
            title: 'Спецтехника и мотоциклы',
            image: 'c1.png',
            id: 7,
            subCategories: [
                {
                    title: 'Женский гардероб',
                    id: 1,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Мужской гардероб',
                    id: 2,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Детский гардероб',
                    id: 3,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Детские товары',
                    id: 4,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Хэндмейд',
                    id: 5,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Телефоны и планшеты',
                    id: 6,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Фото- и видеокамеры',
                    id: 7,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Компьютерная техника',
                    id: 8,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'ТВ, аудио, видео',
                    id: 9,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Бытовая техника',
                    id: 10,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Для дома и дачи',
                    id: 11,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Стройматериалы и инструменты',
                    id: 12,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Красота и здоровье',
                    id: 13,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Хобби и развлечения',
                    id: 14,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Прочее',
                    id: 15,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
            ]
        },
        {
            title: 'Запчасти и автотовары',
            image: 'c1.png',
            id: 8,
            subCategories: [
                {
                    title: 'Женский гардероб',
                    id: 1,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Мужской гардероб',
                    id: 2,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Детский гардероб',
                    id: 3,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Детские товары',
                    id: 4,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Хэндмейд',
                    id: 5,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Телефоны и планшеты',
                    id: 6,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Фото- и видеокамеры',
                    id: 7,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Компьютерная техника',
                    id: 8,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'ТВ, аудио, видео',
                    id: 9,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Бытовая техника',
                    id: 10,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Для дома и дачи',
                    id: 11,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Стройматериалы и инструменты',
                    id: 12,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Красота и здоровье',
                    id: 13,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Хобби и развлечения',
                    id: 14,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Прочее',
                    id: 15,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
            ]
        },
        {
            title: 'Вакансии',
            image: 'c1.png',
            id: 9,
            subCategories: [
                {
                    title: 'Женский гардероб',
                    id: 1,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Мужской гардероб',
                    id: 2,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Детский гардероб',
                    id: 3,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Детские товары',
                    id: 4,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Хэндмейд',
                    id: 5,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Телефоны и планшеты',
                    id: 6,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Фото- и видеокамеры',
                    id: 7,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Компьютерная техника',
                    id: 8,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'ТВ, аудио, видео',
                    id: 9,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Бытовая техника',
                    id: 10,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Для дома и дачи',
                    id: 11,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Стройматериалы и инструменты',
                    id: 12,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Красота и здоровье',
                    id: 13,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Хобби и развлечения',
                    id: 14,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Прочее',
                    id: 15,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
            ]
        },
        {
            title: 'Для бизнеса',
            image: 'c1.png',
            id: 10,
            subCategories: [
                {
                    title: 'Женский гардероб',
                    id: 1,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Мужской гардероб',
                    id: 2,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Детский гардероб',
                    id: 3,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Хэндмейд',
                    id: 5,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Телефоны и планшеты',
                    id: 6,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Фото- и видеокамеры',
                    id: 7,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Компьютерная техника',
                    id: 8,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'ТВ, аудио, видео',
                    id: 9,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Бытовая техника',
                    id: 10,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Для дома и дачи',
                    id: 11,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Стройматериалы и инструменты',
                    id: 12,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Красота и здоровье',
                    id: 13,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Хобби и развлечения',
                    id: 14,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
                {
                    title: 'Прочее',
                    id: 15,
                    subSubcategories: [
                        {
                            title: 'Category 1',
                            id: 1,
                        },
                        {
                            title: 'Category 2',
                            id: 2,
                        },
                        {
                            title: 'Category 3',
                            id: 3,
                        },
                        {
                            title: 'Category 4',
                            id: 4
                        },
                        {
                            title: 'Category 5',
                            id: 5
                        },
                        {
                            title: 'Category 6',
                            id: 6,
                        },
                        {
                            title: 'Category 7',
                            id: 7,
                        },
                        {
                            title: 'Category 8',
                            id: 8,
                        },
                        {
                            title: 'Category 9',
                            id: 9,
                        },
                        {
                            title: 'Category 10',
                            id: 10,
                        },
                        {
                            title: 'Category 11',
                            id: 11,
                        },
                        {
                            title: 'Category 12',
                            id: 12,
                        },
                        {
                            title: 'Category 13',
                            id: 13,
                        },
                    ]
                },
            ]
        },
    ]
    const [openMobileCategories, setOpenMobileCategories] = useState(false)
    const [openCategories, setOpenCategories] = useState(false)
    const [selectedCategoryTitle, setSelectedCategoryTitle] = useState(null)
    const [selectedSubcategoryTitle, setSelectedSubategoryTitle] = useState(null)

    const [openSubcategories, setOpenSubcategories] = useState(false)
    const [openSubsubcategories, setOpenSubsubcategories] = useState(false)
    const [openMobileMenu, setOpenMobileMenu] = useState(false)

    // const [openMobileSubcategories, setOpenMobileSubcategories] = useState(false)
    // const [openMobileSubSubcategories, setOpenMobileSubSubcategories] = useState(false)
    const open = useSelector((st) => st.Auth_reducer.openCategories)

    useEffect(() => {
        dispatch(GetUser())
    }, [dispatch])

    useEffect(() => {
        setOpenCategories(open)
    }, [open])

    return (
        <>
            <MobileCategoriesPopup
                open={openMobileCategories}
                setOpen={setOpenMobileCategories}
                setSelectedCategoryTitle={setSelectedCategoryTitle}
                onSelectCategory={() => {
                    setOpenMobileCategories(false)
                    setOpenSubcategories(true)
                }}
                categories={categories}
            />
            <MobileSubcategoriesPopup
                open={openSubcategories}
                onClickBack={() => {
                    setOpenSubcategories(false)
                    setOpenMobileCategories(true)
                }}
                setSelectedSubategoryTitle={setSelectedSubategoryTitle}
                onSelectCategory={() => {
                    setOpenSubcategories(false)
                    setOpenSubsubcategories(true)
                }}
                categories={categories[0].subCategories}
                selectedCategoryTitle={selectedCategoryTitle}
            />
            <MobileSubsubcategoriesPopup
                open={openSubsubcategories}
                onClickBack={() => {
                    setOpenSubsubcategories(false)
                    setOpenSubcategories(true)
                }}
                selectedSubcategoryTitle={selectedSubcategoryTitle}
                categories={categories[0].subCategories[0].subSubcategories}
            />
            <MobileMenu
                open={openMobileMenu}
                setOpen={setOpenMobileMenu}
            />
            <div className='navigationShadow'>
                <div className='navigation'>
                    <LittleNavs />
                    <MainNavs />
                    <MobileNavs setOpenMobileCategories={setOpenMobileCategories} setOpenMobileMenu={setOpenMobileMenu} />
                </div>
            </div>
            <div className={openCategories ? 'openCategories' : 'closedCategories'}>
                <SelectCategory categories={categories} openCategories={openCategories} setOpenCategories={setOpenCategories} />
            </div>
        </>
    )
}
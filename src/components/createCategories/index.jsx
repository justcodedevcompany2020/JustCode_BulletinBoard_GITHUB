import './style.css'
import { useState } from 'react'
import { BlueArrowRight } from '../svg'

export const CreateCategories = ({ setSelectedCategory, setCurrentStep }) => {
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
            image: 'c2.png',
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
            title: 'Заявки на услуги',
            image: 'c3.png',
            id: 3,
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
            title: 'Недвижимость',
            image: 'c4.png',
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
            image: 'c5.png',
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
            image: 'c6.png',
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
            image: 'c7.png',
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
            image: 'c8.png',
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
            image: 'c9.png',
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
            image: 'c10.png',
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
    const [subcategories, setSubcategories] = useState([])
    const [subSubCategories, setSubSubcategories] = useState([])
    const [activeCategory, setActiveCategory] = useState(null)
    const [activeSubcategory, setActiveSubcategory] = useState(null)
    const [activeSubSubcategory, setActiveSubSubcategory] = useState(null)
    const [openMobileCategories, setOpenMobileCategories] = useState(true)
    const [openMobileSubcategories, setOpenMobileSubcategories] = useState(false)
    const [openMobileSubSubcategories, setOpenMobileSubSubcategories] = useState(false)
    const bigScreen = window.matchMedia("(min-width: 768px)").matches

    return (
        <>
            {bigScreen
                ? <div className='createCategoryPage'>
                    <div className='createCategories'>
                        {categories?.length > 0 && categories.map((e, i) => (
                            <div key={i} className='eachCreateCat' onMouseOver={() => {
                                setSubcategories(e?.subCategories)
                                setActiveSubcategory(null)
                                setSubSubcategories(null)
                                setActiveCategory(i)
                            }}
                                style={{ background: activeCategory === i && '#f5f5f5' }}
                            >
                                {e?.image && <img alt='' src={require(`../../public/${e?.image}`)} />}
                                <span>{e?.title}</span>
                            </div>
                        ))}
                    </div>
                    {subcategories?.length > 0 && <div className='createCategories' >
                        {subcategories?.map((e, i) => (
                            <div className='eachCreateCat' key={i} onMouseOver={() => {
                                setActiveSubcategory(i)
                                setSubSubcategories(e?.subSubcategories)
                            }} style={{ background: activeSubcategory === i && '#f5f5f5' }}>
                                <span>{e?.title}</span>
                            </div>
                        ))}
                    </div>}
                    {subSubCategories?.length > 0 && <div className='createCategories' onMouseLeave={() => {
                        setActiveSubSubcategory(null)
                        setSubSubcategories(null)
                    }}>
                        {subSubCategories.map((e, i) => (
                            <div className='eachCreateCat'
                                key={i}
                                style={{ background: activeSubSubcategory === i && '#f5f5f5' }}
                                onMouseOver={() => {
                                    setActiveSubSubcategory(i)
                                }}
                                onClick={() => {
                                    setCurrentStep(1)
                                    setSelectedCategory(e?.title)
                                }}>
                                <span>{e?.title}</span>
                            </div>
                        ))}
                    </div>}
                </div>
                : <div className='createMobileCategoryPage'>
                    {openMobileCategories && categories.length > 0 && categories.map((e, i) => (
                        <div className='eachMobileCreateCat' key={i} onClick={() => {
                            setOpenMobileCategories(false)
                            setOpenMobileSubcategories(true)
                            setSubcategories(e?.subCategories)
                        }}>
                            <div className='eachMobileCreateCatLeft' >
                                {e?.image && <img alt='' src={require(`../../public/${e?.image}`)} />}
                                <span>{e?.title}</span>
                            </div>
                            <BlueArrowRight />
                        </div>
                    ))}
                    {openMobileSubcategories && subcategories.length > 0 && subcategories.map((e, i) => (
                        <div className='eachMobileCreateCat' key={i} style={{}} onClick={() => {
                            setOpenMobileSubcategories(false)
                            setOpenMobileSubSubcategories(true)
                            setSubSubcategories(e?.subSubcategories)
                        }}>
                            <div className='eachMobileCreateCatLeft'>
                                <span>{e?.title}</span>
                            </div>
                            <BlueArrowRight />
                        </div>
                    ))}
                    {openMobileSubSubcategories && subSubCategories.length > 0 && subSubCategories.map((e, i) => (
                        <div className='eachMobileCreateCat' key={i} style={{}} onClick={() => {
                            setOpenMobileSubcategories(false)
                            setOpenMobileSubSubcategories(false)
                            setCurrentStep(1)
                            setSelectedCategory(e?.title)
                        }}>
                            <div className='eachMobileCreateCatLeft'>
                                <span>{e?.title}</span>
                            </div>
                            <BlueArrowRight />
                        </div>
                    ))}
                </div>
            }
        </>
    )
}
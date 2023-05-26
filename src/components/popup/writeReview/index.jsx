import './style.css'
import { CloseIcon, Star } from '../../svg'

export const WriteReview = ({ open, setOpen }) => {
    return (
        <div className={open ? 'active' : 'inactive'}>
            <div className='pop' style={{ width: '570px' }}>
                <div className='close' onClick={() => setOpen(false)}>
                    <CloseIcon />
                </div>
                <h1>Написать отзыв</h1>
                <div className='loginSeparator' />
                <div className='yourRating'>
                    <h2>Выберите вашу оценку</h2>
                    <div>
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                    </div>
                </div>
                <textarea placeholder='Пожалуйста, опишите ваши впечатления и результаты вашего взаимодействия с этим пользователем. Ваш отзыв не может содержать оскорбительную или ненормативную лексику.' />
                <div className='sendMessage'>
                    <span>Отправить</span>
                </div>
            </div>
        </div>
    )
}
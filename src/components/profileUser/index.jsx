import './style.css'
import { Star } from '../svg'

export const ProfileUser = () => {
    return (
        <div className='userInfoProfile'>
            <h1>Алексей Т.</h1>
            <div className='profileUser'>
                <img alt='' src={require(`../../public/man.png`)} />
                <div className='profileUserJoin'>
                    <span>на JustCode с 13 мар 2023</span>
                    <div className='businessRating'>
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                    </div>
                </div>
            </div>
        </div>
    )
}
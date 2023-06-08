import './style.css'
import Context from '../../components/context'
import { BlueArrowLeft } from '../../components/svg'
import { useContext, useState, useEffect } from 'react'
import { MessageLeft } from '../../components/messageLeft'
import { MessageRight } from '../../components/messageRight'

export const Messages = () => {
    const [currentMemberId, setCurrentMemberId] = useState(null)
    const context = useContext(Context)
    const currentMember = {
        image: 'man.png',
        name: 'Алексей Т.',
    }

    useEffect(() => {
        if (context.windowSize.innerWidth <= 768 && currentMemberId) {
            document.querySelector('.mobileTop').style.display = 'flex'
            document.querySelector('.messageLeftSide').style.display = 'none'
            document.querySelector('.messageRightSide').style.display = 'flex'
            document.querySelector('.messageRightSide').style.width = '100%'
        } else if (context.windowSize.innerWidth > 768 && currentMemberId) {
            document.querySelector('.mobileTop').style.display = 'none'
            document.querySelector('.messageRightSide').style.display = 'flex'
            document.querySelector('.messageRightSide').style.width = '80%'
            document.querySelector('.messageLeftSide').style.display = 'flex'
            document.querySelector('.messageLeftSide').style.width = '20%'
        } else if (context.windowSize.innerWidth <= 768 && !currentMemberId) {
            document.querySelector('.mobileTop').style.display = 'none'
            document.querySelector('.messageRightSide').style.display = 'none'
            document.querySelector('.messageLeftSide').style.width = '100%'
        } else if (context.windowSize.innerWidth > 768 && !currentMemberId) {
            document.querySelector('.mobileTop').style.display = 'none'
            document.querySelector('.messageRightSide').style.display = 'flex'
            document.querySelector('.messageRightSide').style.width = '80%'
            document.querySelector('.messageLeftSide').style.width = '20%'
        }
    }, [context.windowSize.innerWidth, currentMemberId])

    function backToMessages() {
        document.querySelector('.mobileTop').style.display = 'none'
        document.querySelector('.messageLeftSide').style.display = 'flex'
        setCurrentMemberId(null)
    }

    return (
        <div>
            <div className='mobileTop'>
                <h2>{currentMember?.name}</h2>
                <div className='backToMessages' onClick={backToMessages}>
                    <BlueArrowLeft />
                </div>
            </div>
            <div className='messages'>
                <div className='messageLeftSide'>
                    <MessageLeft currentMemberId={currentMemberId} setCurrentMemberId={setCurrentMemberId} />
                </div>
                <div className='messageRightSide'>
                    <MessageRight currentMemberId={currentMemberId} setCurrentMemberId={setCurrentMemberId} currentMember={currentMember} />
                </div>
            </div>
        </div>
    )
}
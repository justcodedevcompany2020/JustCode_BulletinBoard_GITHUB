import './style.css'
import { useState, useEffect } from 'react'
import { BlueArrowLeft } from '../../components/svg'
import { MessageLeft } from '../../components/messageLeft'
import { MessageRight } from '../../components/messageRight'

export const Messages = () => {
    const smallScreen = window.matchMedia("(max-width: 768px)").matches
    const bigScreen = window.matchMedia("(min-width: 768px)").matches
    const [currentMemberId, setCurrentMemberId] = useState(null)
    const currentMember = {
        image: 'man.png',
        name: 'Алексей Т.',
    }

    useEffect(() => {
        if (smallScreen && currentMemberId) {
            document.querySelector('.mobileTop').style.display = 'flex'
            document.querySelector('.messageLeftSide').style.display = 'none'
            document.querySelector('.memberRight').style.display = 'flex'
            document.querySelector('.memberRight').style.width = '100%'
            document.querySelector('.messageRightSide').style.width = '100%'
        } else if (smallScreen && !currentMemberId) {
            document.querySelector('.mobileTop').style.display = 'none'
            document.querySelector('.messageLeftSide').style.width = '100%'
            document.querySelector('.messageRightSide').style.width = '0'
        } else if (bigScreen && currentMemberId) {
            document.querySelector('.mobileTop').style.display = 'none'
            document.querySelector('.memberRight').style.display = 'flex'
            document.querySelector('.memberRight').style.width = '75%'
            document.querySelector('.messageLeftSide').style.display = 'flex'
            document.querySelector('.messageLeftSide').style.width = '25%'
        } else if (bigScreen && !currentMemberId) {
            document.querySelector('.mobileTop').style.display = 'none'
            document.querySelector('.messageLeftSide').style.width = '25%'
        }
    }, [smallScreen, bigScreen, currentMemberId])

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
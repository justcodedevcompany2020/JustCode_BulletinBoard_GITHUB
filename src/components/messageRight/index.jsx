import './style.css'
import { useEffect, useRef, useState } from 'react'
import { MoreIcons, Attachment, SendMessage, BlueSendMessage, BlueAttachment } from '../svg'

export const MessageRight = ({ currentMemberId, setCurrentMemberId, currentMember }) => {
    const me = {
        image: 'man2.png',
        name: 'Сергей А.'
    }
    const [allMessages, setAllMessages] = useState([
        {
            user: me,
            message: 'Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании?Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании?Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании?Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании?Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании?Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании?Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании?Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании?Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании?Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании?Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании?Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании?Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании?Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании?Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании?Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании?Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании?Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании?Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании?Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании?Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании?Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании?',
            time: '12:33'
        },
        {
            user: currentMember,
            message: 'Здравствуйте! Да',
            time: '12:33'
        },
        {
            user: me,
            message: 'Здравствуйте, товар был в использовании?',
            time: '12:33'
        },
        {
            user: currentMember,
            message: 'Здравствуйте! Да',
            time: '12:33'
        },
    ])
    const conversationRef = useRef(null);
    const [scrollToBottom] = useState(new Date())
    const [message, setMessage] = useState('')
    const [activeAttachment, setActiveAttachment] = useState(false)

    useEffect(() => {
        if (conversationRef.current) conversationRef.current.scrollTop = conversationRef.current.scrollHeight
    }, [scrollToBottom, allMessages])

    function sendMessage() {
        setAllMessages([...allMessages, {
            user: me,
            message,
            time: '12:33'
        }])
        setMessage('')
    }

    return (
        <div className={currentMemberId ? 'memberRight' : 'inactive'}>
            <div className='rightTop'>
                <div className='rightInnerTop'>
                    <div className='rightTopLeft'>
                        <img alt='' src={require(`../../public/${currentMember?.image}`)} />
                        <h2>{currentMember?.name}</h2>
                    </div>
                    <MoreIcons />
                </div>
                <div className='loginSeparator' />
            </div>
            <div className='rightCenter' ref={conversationRef}>
                {allMessages?.length > 0
                    ? allMessages?.map((e, i) => (
                        <div className='eachMessage' key={i}>
                            <div className='eachMessageLeft'>
                                <img alt='' src={require(`../../public/${e?.user?.image}`)} />
                                <div className='messageText'>
                                    <h2>{e?.user?.name}</h2>
                                    <p>{e?.message}</p>
                                </div>
                            </div>
                            <span>{e?.time}</span>
                        </div>
                    ))
                    : <div className='noActiveAnnouncements'>
                        <p>No messages</p>
                    </div>
                }
            </div>
            <div className='rightBottom'>
                <div className='cursor' onMouseOver={() => setActiveAttachment(true)} onMouseLeave={() => setActiveAttachment(false)}>
                    {activeAttachment
                        ? <BlueAttachment />
                        : <Attachment />
                    }
                </div>
                <input className='chatInput' value={message} onChange={(e) => setMessage(e.target.value)} style={{ border: message.length > 0 && '1px solid #7791F7' }} />
                {message.length > 0
                    ? <div className='cursor' onClick={sendMessage}><BlueSendMessage /></div>
                    : <div><SendMessage /></div>
                }
            </div>
        </div>
    )
}
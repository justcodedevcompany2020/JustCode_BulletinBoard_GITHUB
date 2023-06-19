import './style.css'
import { useEffect, useRef, useState } from 'react'
import { MoreIcons, Attachment, SendMessage, BlueSendMessage, BlueAttachment } from '../svg'
import { IMuiFbPhotoGridImage, MuiFbPhotoGrid } from 'mui-fb-photo-grid';

export const MessageRight = ({ currentMemberId, setCurrentMemberId, currentMember }) => {
    const me = {
        image: 'man2.png',
        name: 'Сергей А.'
    }
    const [allMessages, setAllMessages] = useState([
        {
            user: me,
            message: 'Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании?Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании?Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании?Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании?Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании?Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании?Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании?Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании?Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании?Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании?Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании?Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании?Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании?Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании?Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании?Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании?Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании?Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании?Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании?Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании?Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании?Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании? Здравствуйте, товар был в использовании?',
            time: '12:33',
            image: []
        },
        {
            user: currentMember,
            message: 'Здравствуйте! Да',
            time: '12:35',
            image: null
        },
        {
            user: me,
            message: 'Здравствуйте, товар был в использовании?',
            time: '12:40',
            image: null
        },
        {
            user: currentMember,
            message: 'Здравствуйте! Да',
            time: '12:41',
            image: null
        },
    ])
    const conversationRef = useRef(null);
    const [scrollToBottom] = useState(new Date())
    const [message, setMessage] = useState('')
    const [activeAttachment, setActiveAttachment] = useState(false)
    let selectedFiles = []
    const [selected, setSelected] = useState([])
    let newImages = []

    useEffect(() => {
        if (conversationRef.current) conversationRef.current.scrollTop = conversationRef.current.scrollHeight
    }, [scrollToBottom, allMessages, currentMemberId])

    function handleImageChange(event) {
        let targetFiles = event.target.files
        let targetFilesObject = [...targetFiles] // file for backend

        targetFilesObject.forEach((e, i) => {
            selectedFiles.push(targetFilesObject[i])
            let blob = URL.createObjectURL(targetFilesObject[i])

            const postPhoto = document.createElement('div')
            postPhoto.className = 'photoList'
            let img = document.createElement('img')

            img.src = blob
            postPhoto?.append(img)

            setSelected(selectedFiles)
            document.body.querySelector('.photoListDiv')?.append(postPhoto)
            console.log(selectedFiles, 66)
        })
    }


    function sendMessage() {
        let item = [...allMessages]
        let img = []
        selected.forEach((e, i) => {
            let FileBlob = URL.createObjectURL(e)
            img.push({ img: FileBlob })
            newImages.push({ img: FileBlob })
        })
        item.push({
            user: me,
            message,
            time: new Date().toTimeString().split(' ')[0].slice(0, 5),
            image: img
        })
        setAllMessages(item)
        setSelected([])
        selectedFiles = []
        setMessage('')
        document.querySelector('.photoListDiv').innerHTML = ''
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
                    ? allMessages?.map((e, i) => {
                        return <div className='eachMessage' key={i}>
                            <div className='eachMessageLeft'>
                                <img alt='' src={require(`../../public/${e?.user?.image}`)} />
                                <div className='messageText'>
                                    <h2>{e?.user?.name}</h2>
                                    {e?.image &&
                                        <MuiFbPhotoGrid
                                            images={e?.image}
                                            reactModalStyle={{ overlay: { zIndex: 2000 } }}
                                        />
                                    }
                                    <p>{e?.message}</p>
                                </div>
                            </div>
                            <span>{e?.time}</span>
                        </div>
                    })
                    : <div className='noActiveAnnouncements'>
                        <p>No messages</p>
                    </div>
                }
            </div>
            {<div style={selected.length === 0 ? { display: 'none' } : { display: 'flex' }} className='photoListDiv' />}
            <div className='rightBottom'>
                <div className='cursor' onMouseOver={() => setActiveAttachment(true)} onMouseLeave={() => setActiveAttachment(false)}>
                    <label>
                        <input
                            type='file'
                            multiple
                            onChange={handleImageChange}
                        />
                    </label>
                    {activeAttachment
                        ? <BlueAttachment />
                        : <Attachment />
                    }
                </div>
                <input className='chatInput' value={message} onChange={(e) => setMessage(e.target.value)} style={{ border: message.length > 0 && '1px solid #7791F7' }} onKeyDown={e => e.key === 'Enter' && sendMessage()} />
                {message.length > 0 || selected.length > 0
                    ? <div className='cursor' onClick={sendMessage}><BlueSendMessage /></div>
                    : <div><SendMessage /></div>
                }
            </div>
        </div>
    )
}
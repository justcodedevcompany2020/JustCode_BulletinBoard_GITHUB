import './style.css'

export const MessageLeft = ({ currentMemberId, setCurrentMemberId }) => {
    const chatMembers = [
        {
            image: 'man.png',
            name: 'Алексей Т.',
            date: 'Сегодня, 17:40',
            lastMessage: 'Здравствуйте Да! Здравствуйте',
            id: 1,
        },
        {
            image: 'man.png',
            name: 'Алексей Т.',
            date: 'Сегодня, 17:40',
            lastMessage: 'Здравствуйте! Да',
            id: 2,
        },
        {
            image: 'man.png',
            name: 'Алексей Т.',
            date: 'Сегодня, 17:40',
            lastMessage: 'Здравствуйте! Да',
            id: 3,
        },
        {
            image: 'man.png',
            name: 'Алексей Т.',
            date: 'Сегодня, 17:40',
            lastMessage: 'Здравствуйте! Да',
            id: 4,
        },
        {
            image: 'man.png',
            name: 'Алексей Т.',
            date: 'Сегодня, 17:40',
            lastMessage: 'Здравствуйте! Да',
            id: 5,
        }
    ]

    function selectMember(id) {
        setCurrentMemberId(id)
    }

    return (
        <div className='chatMembers'>
            {chatMembers.length > 0
                ? chatMembers.map((e, i) => (
                    <div className='eachChatMember' key={i} onClick={() => selectMember(e?.id)} style={{ background: currentMemberId === e?.id && 'rgba(119, 145, 247, 0.15)' }}>
                        <img alt='' src={require(`../../public/${e?.image}`)} />
                        <div className='memberRight'>
                            <div className='memberName'>
                                <h2>{e?.name}</h2>
                                <span>{e?.date}</span>
                            </div>
                            {e?.lastMessage.length > 23
                                ? <p>{e?.lastMessage.slice(0, 23) + '...'}</p>
                                : <p>{e?.lastMessage}</p>}
                        </div>
                    </div>
                ))
                : <div className='noActiveAnnouncements'>
                    <p>No chat members</p>
                </div>
            }
        </div>
    )
}
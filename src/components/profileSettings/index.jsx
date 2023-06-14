import './style.css'
import { ArrowDown, Edit, GreaterThan, LessThan } from '../svg'
import { useState } from 'react'
import { AccountType } from '../popup/accountType'

export const ProfilSettings = () => {
    const [openType, setOpenType] = useState(false)
    const [name, setName] = useState('Алексей Т.')
    const [editName, setEditName] = useState(false)
    const [nameError, setNameError] = useState(false)
    const [photoURL, setPhotoURL] = useState('http://localhost:3000/static/media/man.2461d0edf7774ef37c62.png')
    const [file, setFile] = useState('') // es uxarkvelu a backend
    const regions = [
        {
            id: 1,
            region: 'Ереван 1',
        },
        {
            id: 2,
            region: 'Ереван 2',
        },
        {
            id: 3,
            region: 'Ереван 3',
        },
        {
            id: 4,
            region: 'Ереван 4',
        },
        {
            id: 5,
            region: 'Ереван 5',
        },
    ]
    const [openRegions, setOpenRegions] = useState(false)
    const [selectedRegion, setSelectedRegion] = useState('Ереван 1')

    function save() {
        if (name.length > 0) {
            setEditName(false)
            setNameError(false)
        } else {
            setNameError(true)
        }
    }

    const handleAvatarChange = async (e) => {
        let url = URL.createObjectURL(e.target.files[0])
        let img = new Image()
        img.onload = function () {
            setPhotoURL(URL.createObjectURL(e?.target?.files[0]))
            setFile(e?.target?.files[0])
        }
        img.src = url
    }

    return (
        <div>
            <AccountType
                open={openType}
                setOpen={setOpenType}
            />
            <div className='profileInfo'>
                <div className='eachProfileSetting'>
                    <span>Ваш аватар</span>
                    <div className='changeAvatar'>
                        <img alt='' src={photoURL} />
                        <label className='cursor'>
                            <input type="file"
                                style={{ display: 'none' }}
                                onChange={handleAvatarChange}
                                // accept="image/jpg, image/JPG, image/jpeg, image/JPEG, image/tiff, image/TIFF, image/png, image/PNG"
                                accept="image/*"
                            />
                            Изменить
                        </label>
                    </div>
                </div>
                <div className='loginSeparator' />
                <div className='eachProfileSetting'>
                    <span>Ваше имя</span>
                    <div className='changeType' id='changeName' style={nameError ? { border: '1px solid red' } : {}}>
                        <input value={name} onChange={(e) => setName(e.target.value)} disabled={editName ? false : true} />
                        <div className='editName' onClick={() => setEditName(true)}>
                            <Edit />
                        </div>
                    </div>
                </div>
                <div className='loginSeparator' />
                <div className='eachProfileSetting'>
                    <span>Регион</span>
                    <div className='changeRegion'>
                        <div className='selectRegion' onClick={() => setOpenRegions(!openRegions)}>
                            <div className='currentRegion'>
                                <span>{selectedRegion}</span>
                                <LessThan />
                            </div>
                            <div className={openRegions ? 'regionDropdown' : 'inactive'}>
                                {openRegions && regions.map((e, i) => (
                                    <div className='eachRegion' key={i} onClick={() => {
                                        setSelectedRegion(e?.region)
                                        setOpenRegions(false)
                                    }}>
                                        <span>{e?.region}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='loginSeparator' />
                <div className='eachProfileSetting' id='profSetting'>
                    <div className='changeAvatar'>
                        <span>Тип аккаунта</span>
                        <p>Индивидуальный</p>
                    </div>
                    <p onClick={() => setOpenType(true)}>Изменить</p>
                </div>
            </div>
            <div className='notificationButton'>
                <button className='blueButton' onClick={save}>Сохранить</button>
            </div>
        </div>
    )
}
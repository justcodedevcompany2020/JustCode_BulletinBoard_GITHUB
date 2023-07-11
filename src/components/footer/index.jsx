import './style.css'
import { FooterFacebook, FooterInstagram, FooterLinkedIn } from '../svg'
import ReactFlagsSelect from 'react-flags-select'
import { useState } from 'react'


export const Footer = () => {
    const [selected, setSelected] = useState("RU")
    return (
        <div className='footerShadow'>
            <div className='footer'>
                <div className='eachFooterColumn'>
                    <p>Лицензионное соглашение</p>
                    <p>Помощь</p>
                    <p>Реклама на JustCode</p>
                </div>
                <div className='mobileFooterLang'>
                    <ReactFlagsSelect
                        countries={["RU", "AM", "US"]}
                        selected={selected}
                        onSelect={(code) => setSelected(code)}
                        optionsSize={14}
                        className='countries'
                        showOptionLabel={true}
                        showSelectedLabel={true}
                    />
                </div>
                <div className='eachFooterColumn'>
                    <span>JustCode в соцсетях</span>
                    <div className='FooterSocialMedia'>
                        <FooterFacebook />
                        <FooterInstagram />
                        <FooterLinkedIn />
                    </div>
                </div>
                <div className='eachFooterColumn'>
                    <span>Мобильное приложение</span>
                    <img alt='' src={require('../../public/googlePlay.png')} />
                    <img alt='' src={require('../../public/appStore.png')} />
                </div>
                <div className='eachFooterColumn mobileC'>
                    <span>© 2023 JustCode</span>
                </div>
            </div>
            <div className='mobileCC'>
                <span>© 2023 JustCode</span>
            </div>
        </div>
    )
}
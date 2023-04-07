import './littleNavs.css'
import ReactFlagsSelect from "react-flags-select"
import { useState } from "react"
import { Favorites, Message, Wallet } from "../svg"

export const LittleNavs = () => {
    const [selected, setSelected] = useState("RU")

    return (
        <div className='littleNavs'>
            <div className='eachLittleNav'>
                <Message />
                <span>Сообщения</span>
            </div>
            <div className='eachLittleNav'>
                <Favorites />
                <span>Избранное</span>
            </div>
            <div className='eachLittleNav'>
                <Wallet />
                <span>Кошелёк</span>
            </div>
            <div className='eachLittleNav'>
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
        </div>
    )
}
import lightOn from './img/light-on.svg'
import lightOff from './img/light-off.svg'
import { useState } from 'react'
import './style.css'

const Light = ({ name, state }) => {

    const [stateFinal, setStateFinal] = useState(state)

    return (
        <div className="light" onClick={() => {
            if (stateFinal === 'on') {
                setStateFinal('off')
            } else if (stateFinal === 'off') {
                setStateFinal('on')
            }
        }}>
            <div className="light__icon">
                <img
                    src={stateFinal === 'on' ? lightOn : lightOff}
                    alt="light"
                />
            </div>
            <div className="light__name">
                {name}
            </div>
        </div>
    )
}

export default Light



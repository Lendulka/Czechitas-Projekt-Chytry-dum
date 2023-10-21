import temp from './img/temp.svg'
import { useState } from 'react'
import './style.css'

const Climate = ({ climate }) => {
    const { temperature, humidity } = climate

    const [temperatureFinal, setTemperatureFinal] = useState(temperature)

    return (
        <div className="climate">
            <div className="climate__icon">
                <img
                    src={temp}
                    alt="thermometer"
                />
            </div>
            <div className="climate__content">
                <div className="climate__temperature">{temperatureFinal}&deg;C</div>
                <div className="climate__humidity">Vlhkost vzduchu {humidity}&nbsp;%</div>
            </div>
            <div className="climate__controls">
                <button className="button"
                    onClick={() => {
                        setTemperatureFinal(temperatureFinal + 1)
                    }}
                >+</button>
                <button className="button"
                    onClick={() => {
                        setTemperatureFinal(temperatureFinal - 1)
                    }}
                >-</button>
            </div>
        </div>
    )
}

export default Climate
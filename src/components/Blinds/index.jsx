import blindsClosed from './img/blinds-closed.svg'
import blindsOpen from './img/blinds-open.svg'
import { useState } from 'react'
import './style.css'

const Blinds = ({ state }) => {

    const [blinds, setBlinds] = useState(state)

    return (
        <div className="blinds">
            <div className="blinds__icon">
                <img
                    src={blinds === "open" ? blindsOpen : blindsClosed}
                    alt={blinds}
                />
            </div>
            <div className="blinds__name">
                Žaluzie
            </div>
            <div className="blinds__controls">
                <button
                    className={blinds === "open" ? "button button--active" : "button"}
                    onClick={() => {
                        setBlinds("open")
                    }}
                >Otevřeno</button>
                <button
                    className={blinds === "closed" ? "button button--active" : "button"}
                    onClick={() => {
                        setBlinds("closed")
                    }}
                >Zavřeno</button>
            </div>
        </div>
    )
}

export default Blinds
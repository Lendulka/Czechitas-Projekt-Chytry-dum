import elektricityIcon from './img/electricity.svg'
import waterIcon from './img/water.svg'
import './style.css'

const Energy = ({ consumption }) => {

    const { electricity, water } = consumption

    return (
        <div className="energy">
            <div className="energy__source">
                <div className="energy__icon">
                    <img
                        src={elektricityIcon}
                        alt="elektricity"
                    />
                </div>
                <div className="energy__consumption">
                    <div className="energy__description">Elektřina</div>
                    <div className="energy__value">{electricity} kW</div>
                </div>
            </div>
            <div className="energy__source">
                <div className="energy__icon">
                    <img
                        src={waterIcon}
                        alt="water"
                    />
                </div>
                <div className="energy__consumption">
                    <div className="energy__description">Voda</div>
                    <div className="energy__value">{water} m<sup>3</sup></div>
                </div>
            </div>
        </div>
    )
}

export default Energy
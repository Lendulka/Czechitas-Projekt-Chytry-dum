import Light from '../Light'
import './style.css'

const Lights = ({ lights }) => {

    return (
        <div className="lights">

            {lights.map(oneLight => (
                <Light
                    key={oneLight.name}
                    name={oneLight.name}
                    state={oneLight.state}
                />
            ))}

        </div>
    )
}

export default Lights
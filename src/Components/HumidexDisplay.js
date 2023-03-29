// HumidexDisplay.js

const HumidexDisplay = (props) => {
    return (
        <section className="humidex-display">
            <div className="wrapper text-container">
                <h2 className="humidex">{props.humidex}%</h2>
            </div>
        </section>
    )
}

export default HumidexDisplay;
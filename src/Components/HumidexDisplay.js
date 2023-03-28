// HumidexDisplay.js

const HumidexDisplay = (props) => {
    console.log('Humidex', props)

    return (
        <h2>{props.humidex} %</h2>
    )
}

export default HumidexDisplay;
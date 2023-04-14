export default function Search(props) {
    const show = () => {
        return props.info.map((val) => {
            return <div>
                <h1 style={{ color: 'white' }}>Weather of {val.city}</h1>
                <h3 className="info">temp:  {val.temp} c</h3>
                <h3 className="info">desc:  {val.desc}</h3>
                <h3 className="info">wind: {val.wind} kmh</h3>
                <h3 className="info">The coldest temperature expected today: {val.minTemp}</h3>
                <h3 className="info">The hottest temperature expected today: {val.maxTemp}</h3>
                {checkTemp(val.temp)}
            </div>
        })
    }

    const checkTemp = (temp) => {
        if (temp <1) {
            return <div>
                <div id='snow'></div>
                <h2>Very cold! Take care of yourself</h2>
            </div>
        }
        else if (temp >= 1 && temp < 11) {
            return <div>
                <div id='rain'></div>
                <h2>cold, don't forget your umbrella</h2>
            </div>
        }
        else if (temp >= 11 && temp <= 17) {
            return <div>
                <div id='overcast'></div>
                <h2>pleasant weather</h2>
            </div>
        }
        else if (temp >= 18 && temp <= 25) {
            return <div>
                <div id='clearSky'></div>
                <h2>A wonderful day to go for a walk !</h2>
            </div>
        }
        else if (temp >= 25) {
            return <div>
                <div id='sun'></div>
                <h2>Very hot! Take care of yourself</h2>
            </div>
        }
    }

    return (
        <div>
            {show()} <br />
            {checkTemp()}
        </div>
    )
}

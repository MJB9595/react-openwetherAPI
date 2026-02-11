import React, {useMemo} from 'react'
import './WetherCard.css'

const WetherCard = ({wether, locationName}) => {
    if(!wether) return null

    const {weather}=wether
    const {main} = wether

    const {temp, humidity}=main || {}

    const {description, icon}=(weather && weather[0]) || {}

    console.log(name, temp, humidity, description, icon)

    const iconUrl=useMemo(()=> (
        icon? `https://openweathermap.org/img/wn/${icon}@2x.png`:''
    ),[icon])
    return (
        <div className='card'> 
        <h2>{locationName}</h2>
        <div className='img-wrap'>
            {iconUrl&&
            <img src={iconUrl} alt={description}/>
            }

        </div>
            <p>{description}</p>
            <p>
                🌡️ {Math.round(temp)}°C
            </p>
            <p>
                💧 {humidity}%
            </p>
        </div>
    )
}

export default WetherCard

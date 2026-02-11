import WetherCard from './components/WetherCard'
import React,{useState, useRef, useEffect, useMemo} from 'react'
import './App.css'
import { fetchCoordinates } from './api/geo'
import { fetchWeatherByCoords } from './api/wether'
import { getColorByWeatherId } from './data/bgColor'

function App() {

  const [city, setCity]=useState('seoul')
  const [wether, setWether]=useState(null)

  const [locationName, setLocationName]=useState('')


  const [loading, setLoading]=useState(false)
  const[err, setErr]=useState('')

  const inputRef = useRef(null)

  useEffect(()=>{
    inputRef.current.focus()
  },[])

  // const bg = useMemo(()=>{
  //   const wetherId = wether?.wether?.[0].id

  //   return getColorByWeatherId(wetherId)

  // },[wether])



  const handleSearch= async()=>{
    const q = city.trim()

    if(!q) return
    try{
      setLoading(true)
      setErr('')
      const {lat, lon, name, country, state} = await fetchCoordinates(q)
      const fomattedName = state ? `${state} / ${name}` : `${name}, ${country}`;

      // console.log(lat, lon, name, country)
        const data = await fetchWeatherByCoords(lat, lon,)
      // console.log(data)
      setWether(data)
      setLocationName(fomattedName)
      setCity('')


    } catch (error) {
      setErr(error)
      console.error(error)
    } finally {
      setLoading(false)
    }
  }
  const onChangeInput=(e)=>{
    setCity(e.target.value)
  }
  const onKeyup=(e)=>{
    if(e.key==='Enter') handleSearch()
  }

  const weatherId = wether ? wether.weather[0].id : 800;

  const bgStyle = getColorByWeatherId(weatherId);

  return (
    <div className='app' style={{ background: bgStyle, transition: 'background 0.5s ease' }}>
      <div className="container">
        <h1>김재아의 날씨앱</h1>
          <div className="input-wrap">
            <input 
            value={city}
            onChange={onChangeInput}
            onKeyUp={onKeyup}
            type="text" 
            placeholder='날씨를 알고싶은 지역을 입력하세요'
            ref={inputRef}/>
            <button
            onClick={handleSearch}>검색</button>
          </div>
          {err && <p>{err}</p>}
          {loading && <p>불러오는 중 ...</p>}
        <WetherCard wether={wether} locationName={locationName}/>
      </div>
    </div>
  )
}

export default App

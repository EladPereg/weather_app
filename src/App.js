import './App.css';
import axios from 'axios';
import Search from './components/Search';
import { useState } from 'react';

function App() {
  const [info, setInfo] = useState([])
  const [name, setName] = useState('')
  const [showMsg, setShowMsg] = useState(false)
  const [showMsg2, setShowMsg2] = useState(false)
  const [showMsg3, setShowMsg3] = useState(false)

  const checkData = async () => {
    setInfo([])
    if (name.length == 0) {
      setShowMsg(true)
    }
    else {
      setShowMsg(false)
      setShowMsg3(true)
      try {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&APPID=0dade8316ab745a702c6d4a7fef1585e&units=metric`
        let res = await axios.get(url)
        let city = res.data.name;
        let temp = res.data.main.temp;
        let desc = res.data.weather[0].description;
        let wind = res.data.wind.speed
        let minTemp = res.data.main.temp_min
        let maxTemp = res.data.main.temp_max
        console.log(res.data)
        info.push({ city: city, temp: temp, desc: desc, wind: wind, minTemp: minTemp, maxTemp: maxTemp })
        setInfo([...info])
      }
      catch {
        setShowMsg2(true)
      }
    }
  }
  const ShowMsg2 = () => {
    if (showMsg2 === true) {
      return <p style={{fontWeight:'600'}}>Please check that you have entered the city name correctly</p>
    }
  }


  const showMSG3=()=>{
    if(showMsg3===true){
      return <h5>To search for a new city and delete the current city, please click on the search input</h5>
    }
  }

  const pFunc = () => {
    if (showMsg === true) {
      return <p id='p2'>enter city name please</p>
    }
  }

  const clearInp = () => {
    const element = document.getElementById('inp1')
    element.value = ''
  }

  let flag;
  if (info.length > 0) {
    flag = true
  }
  else {
    flag = false
  }

  const checkInfo = () => {
    if (info.length == 0) {
      return <div>
        <h1 id='MSG'>to check the weather, please enter the name of the city in the search input</h1>
        <div id='emptyInfo'></div>
      </div>
    }
  }

  return (
    <div className="App">
      <div id='navBar'>
        <h1 id='p1'>weather</h1>
        <input onClick={() => { setShowMsg3(false);setShowMsg2(false); setInfo([]); clearInp() }} id='inp1' onChange={(e) => { setName(e.target.value) }} type='text' placeholder='enter place' />
        <button disabled={flag ? true : false} id='btn1' onClick={() => { checkData() }}>search</button> <br />
      </div>
      {ShowMsg2()}
      {showMSG3()}
      {pFunc()}
      {checkInfo()}
      <Search info={info} />
    </div>
  );
}
export default App;
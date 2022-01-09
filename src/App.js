import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import { examplesCities } from './utils/exampleCities';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { config } from './utils/config';
import WeatherResume from './components/weatherResume';
const bannerHomepage = require('./assets/banner_homepage.jpg')

function App() {

  const [exampleCitiesInfo, setExampleCitiesInfo] = useState([]);
  const [searchError, setSearchError] = useState(false);

  async function getWeatherInfo(){

    let infoArray = [];

    for(let i=0; i<examplesCities.length; i++){
      const url = "https://api.openweathermap.org/data/2.5/weather?appid=" + config.weatherApiKey + "&q=" + examplesCities[i];
    
      try {
        const res = await axios.get(url);
        console.log(res);
        if(res.status === 200){
          setSearchError(false);
          //setWeatherInfo(res.data);
          infoArray.push(res.data);
        }else{
          setSearchError(true);
        }

      } catch(error) {
      
          setSearchError(true);
          if (error.response) {
            // Request made and server responded
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
          }
      }
    }

    setExampleCitiesInfo(infoArray);

  }

  useEffect(()=>{
    getWeatherInfo();
  }, [])

  useEffect(()=>{
    console.log(exampleCitiesInfo);
  }, [exampleCitiesInfo])

  return (
    <div className="App">
      <NavBar></NavBar>
      {/* <div style={{display: 'flex', justifyContent: 'center'}}>
        {JSON.stringify(exampleCitiesInfo)}
      </div> */}
      <div className='body-container'>
        <div className='banner'>
          <img src={bannerHomepage} alt='banner homepage' width={"100%"} style={{justifyContent: "center"}}/>
        </div>
        <div className='weather-previews' style={{display: 'flex', overflowX: 'scroll'}}>
          {exampleCitiesInfo.length >0  && exampleCitiesInfo.map((info, key)=>(
            <div key={key}>
              <p>{info.name}</p>
              <WeatherResume weatherInfo={info}></WeatherResume>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

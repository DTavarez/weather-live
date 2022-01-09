import { useEffect, useState } from 'react';
import NavBar from '../components/navbar';
import WeatherResume from '../components/weatherResume';
import { useSearchParams} from 'react-router-dom';
import {config} from '../utils/config'
import axios from 'axios';

function LocationWeather() {
  const [cityName, setCityName] = useState("");
  const [weatherInfo, setWeatherInfo] = useState();
  const [loading, setLoading] = useState(false);
  const [searchError, setSearchError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  async function getWeatherInfo(name){
    const url = "https://api.openweathermap.org/data/2.5/weather?appid=" + config.weatherApiKey + "&q=" + String(name);
    
    try {
      const res = await axios.get(url);
      console.log(res);
      if(res.status === 200){
        setSearchError(false);
        console.log(res.data);
        setWeatherInfo(res.data);
      }else{
        console.log("eroooo")
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

  useEffect(() => {
    const name = searchParams.get("city");
    if(name){
      setWeatherInfo(null);
      setLoading(true);
      getWeatherInfo(name);
    }else{
      setSearchError(true);
    }
  }, [searchParams]);
  
  return (
    <div className="App">
      <NavBar></NavBar>
      <div className='body-container'>
        {weatherInfo && !searchError &&
          <WeatherResume weatherInfo={weatherInfo}/>
        }
        {searchError &&
          <div>city not found.</div>
        }
      </div>
    </div>
  );
}

export default LocationWeather;

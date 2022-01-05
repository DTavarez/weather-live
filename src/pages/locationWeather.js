import { useEffect, useState } from 'react';
import NavBar from '../components/navbar';
import { useSearchParams} from 'react-router-dom';
import {config} from '../config/config'
import axios from 'axios';

function LocationWeather() {
  const [cityName, setCityName] = useState("");
  const [weatherInfo, setWeatherInfo] = useState();
  const [loading, setLoading] = useState(false);
  const [searchError, setSearchError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  async function getWeatherInfo(name){
    const url = "https://api.openweathermap.org/data/2.5/weather?appid=" + config.weatherApiKey + "&q=" + String(name);
    console.log(url)
    const res = await axios.get(url);

    if(res.status === 200){
      setSearchError(false);
      console.log(res.data);
      setWeatherInfo(res.data);
    }else{
      setSearchError(true);
    }
  }

  useEffect(() => {
    const name = searchParams.get("city");
    if(name){
      setLoading(true);
      getWeatherInfo(name);
    }else{
      setSearchError(true);
    }
  
  }, [searchParams]);
  
  return (
    <div className="App">
      <NavBar></NavBar>
      <div>
        {weatherInfo &&
          <div>
          {JSON.stringify(weatherInfo)}
          </div>
        }
      </div>
    </div>
  );
}

export default LocationWeather;

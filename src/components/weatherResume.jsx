

function WeatherResume({weatherInfo}){

  console.log(weatherInfo);
  return(
    <div className='weathr-resume shadow'>
      <div className='resume-main'>
        <div style={{display: "grid"}}>
          <span className='resume-title'>{weatherInfo.name}</span>
          <span className='resume-description'>{weatherInfo.weather[0].description}</span>
        </div>
        <div className="resume-condition">
          <img src={`http://openweathermap.org/img/w/${weatherInfo.weather[0].icon}.png`}></img>
          <div style={{display: "table"}}>
            <span style={{display: "table-cell", verticalAlign: "middle"}}>
              {Math.round(weatherInfo.main.temp - 273.15)}ºC
            </span>
          </div>
        </div>
      </div>
      <div className='resume-details'>
        <div className='other-conditions'>
          <span>Precipitation: {weatherInfo.main.rain || 0}%</span>
          <span>Humidity: {weatherInfo.main.humidity}%</span>
          <span>Wind: {Math.round(weatherInfo.wind.speed * 3.6)}km/h</span>
        </div>
        <div className='temps-mm'>
          <div style={{display: "table"}}>
            <span className='max'>
              {Math.round(weatherInfo.main.temp_max - 273.15)}ºC
            </span>
          </div>  
          <div style={{display: "table"}}>
            <span className='min'>
              {Math.round(weatherInfo.main.temp_min - 273.15)} ºC
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherResume;
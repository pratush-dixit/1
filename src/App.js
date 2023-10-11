import React, { useState } from 'react'
import axios from 'axios'

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=0f479ca0f828f8bee157358738c3d30c`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }

  return (
    <>
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Location'
          type="text" />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        {data.name !== undefined &&
          <div className="bottom">
            <div className="feels">
              {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°F</p> : null}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
              <p>Wind Speed</p>
            </div>
           
          </div>
          
        }
   
      </div>
      
      <div className="footer">
        <div className='footer_head'>Connect with me</div>
        <div className='footer_email'>Email: pratush2d@gmail.com</div>
        <div className='footer_hr'><hr/></div>
        <div className='footer_links'>
           <a href="https://github.com/pratush-dixit" className='icons'><i class="devicon-github-original"></i></a>
           <a href="https://www.linkedin.com/in/pratush-dixit-458254201/" className='icons'><i class="devicon-linkedin-plain"></i></a>
           <a href="https://twitter.com/pratushdixit" className='icons'><i class="devicon-twitter-original"></i></a>
        </div>
      </div>
</div>
    </>
  );
}

export default App;

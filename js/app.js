console.log('js connected')

const API_KEY =`efa389eb8509af07e210f312451fab14`;

const searchTemperature =()=>{
   const city = document.getElementById('search-input').value;
   const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

   console.log(url);

   fetch(url)
   .then(res=>res.json())
   .then(data=>displayTempture(data))
}


const innerTextWeather=(id , text)=>{
    document.getElementById(id).innerText=text;
}


const displayTempture = temperature =>{
    console.log(temperature);

    innerTextWeather('city', temperature.name);
    innerTextWeather('weather', temperature.main.temp);
    innerTextWeather('weatherType', temperature.weather[0].main);

    const url =` http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`

    const imageIcon = document.getElementById('weather-icon')
    imageIcon.setAttribute('src',url);
    

}
console.log('js connected')

const API_KEY =`efa389eb8509af07e210f312451fab14`;

const searchTemperature =()=>{
   const city = document.getElementById('search-input').value;
   const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

   console.log(url);

   fetch(url)
   .then(res=>res.json())
   .then(data=>displayTempture(data))
}

const displayTempture = temp =>{
    console.log(temp);
}
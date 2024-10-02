const city = document.getElementById('cityInput');
const searchbtn = document.getElementById('search');
const weatherIcon = document.querySelector('.img-icon');

async function fetchWeatherData(name) {
  const apiKey = "78d2253a441fc9b3f22500badd54a191";
  const URL = "https://api.openweathermap.org/data/2.5/weather"

const res = await fetch( URL + `?q=${name}&appid=${apiKey}&units=metric`);
const data = await res.json();

if(res.status === 404){
  document.querySelector('.error').style.display = 'block'
  document.querySelector('.weather').style.display = 'none'
}
else{
  document.querySelector('.temp').innerHTML = Math.round(data.main.temp ) +'°C';
  document.querySelector('.city').innerHTML = `Weather in ${data.name} (${data.sys.country})`;
  document.querySelector('.condition').innerHTML = data.weather[0].description;
  document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
  document.querySelector('.wind-speed').innerHTML = data.wind.speed + 'Km/h';
  
  if(data.weather[0].main === 'Clouds'){
    weatherIcon.src = '/images/clouds.png'
  }
  else if(data.weather[0].main === 'Rain'){
    weatherIcon.src = '/images/rain.png'
  }
  else if(data.weather[0].main === 'Snow'){
    weatherIcon.src = '/images/snow.png'
  }
  else if(data.weather[0].main === 'Clear'){
    weatherIcon.src = '/images/clear.png'
  }
  else if(data.weather[0].main === 'Mist' || data.weather[0].main === 'Fog' || data.weather[0].main === 'Haze'){
    weatherIcon.src = '/images/fog.png'
  }
  else if(data.weather[0].main === 'Drizzle'){
    weatherIcon.src = '/images/drizzle.png'
  }
  else{
    weatherIcon.src = '/images/mist.png'
  }

   document.querySelector('.error').style.display = 'none'
   document.querySelector('.weather').style.display = 'block'
}

}
searchbtn.addEventListener('click',()=>{
fetchWeatherData(city.value)
})

const background = [
  {color1: 'var(--gradient-2)'},
  {color2: 'var(--gradient-12)'},
  {color3: 'var(--gradient-11)'},
  {color4: 'var(--gradient-13)'},
  {color5: 'var(--gradient-14)'},
  {color6: 'var(--gradient-15)'},
  {color7: 'var(--gradient-18)'},
]
 
setInterval(()=>{
  let randomNum = Math.floor(Math.random() * background.length)
  let randomColor = background[randomNum]

  for(color in randomColor){
    document.querySelector('.card').style.backgroundImage = randomColor[color]
  }
},36000)
 



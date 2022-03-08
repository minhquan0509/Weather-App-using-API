var card = document.querySelector('card');
var cityname = document.querySelector('.cityname');
var temperature = document.querySelector('.temperature');
var weather = document.querySelector('.weather');
var datetime = document.querySelector('.datetime');
var visibility = document.querySelector('.visibility');
var wind = document.querySelector('.wind');
var humidity = document.querySelector('.humidity');
var search = document.querySelector('.search');

async function getWeatherByCity(city){
    let imageURL;
    if(window.screen.width < 500) {
        imageURL = `https://api.unsplash.com/search/photos/?client_id=ZfllO9aE94WiK5bPnnzTsTSijpWUNSdqAU6ztGu95WU&orientation=portrait&page=1&query=`+city;
    } else {
        imageURL = `https://api.unsplash.com/search/photos/?client_id=ZfllO9aE94WiK5bPnnzTsTSijpWUNSdqAU6ztGu95WU&orientation=landscape&page=1&query=`+city;
    }
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=`+city+`&appid=9809afdfe5e85d2f508d4ecc68a0cdc6`;
    let data = await fetch(apiURL)
    .then(res => res.json())

    let image = await fetch(imageURL)
    .then(res=>res.json());

    document.body.style.backgroundImage = `url("`+image.results[0].urls.full+`")`;

    cityname.innerText= data.name + `, ` + data.sys.country;
    temperature.innerText = Math.floor(data.main.temp - 273) + `°C`;
    weather.innerText = data.weather[0].main;
    
    datetime.innerText = new Date().toLocaleString('vi'); 
    visibility.innerText = data.visibility;
    wind.innerText = data.wind.speed;
    humidity.innerText = data.main.humidity;
 
}

window.addEventListener('keydown', function(e){
    if(e.key == 'Enter'){
        var city = search.value.trim();
        getWeatherByCity(city);
    }
})

const apikey = "e416c54d9900976fe132d6a456f9d8da";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon")

async function checkWeather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }else{
        var data = await response.json();
   

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    
    if(data.weather[0].main=="Clouds"){
        weathericon.src = "images1/clouds.png";
    }
    else if(data.weather[0].main=="Clear"){
        weathericon.src = "images1/clear.png";
    }
    else if(data.weather[0].main=="Rain"){
        weathericon.src = "images1/rain.png";
    }
    else if(data.weather[0].main=="Drizzle"){
        weathericon.src = "images1/drizzle.png";
    }
    else if(data.weather[0].main=="Mist"){
        weathericon.src = "images1/mist.png";
    }
    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none";
    }
     

    
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchbox.value);
});

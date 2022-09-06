
const weatherapi = {
    key: "c25aa2a40633ad208570cb7cbf67782e",
    baseurl: "https://api.openweathermap.org/data/2.5/weather"
}
const serachinputbox = document.getElementById('input-box');
serachinputbox.addEventListener('keypress', (event) => {
    if (event.keyCode == 13) {
        console.log(serachinputbox.value);
        geteathorreport(serachinputbox.value);
    }
})

function geteathorreport(city) {
    fetch(`${weatherapi.baseurl}?q=${city}&appid=${weatherapi.key}&units=metric`)
        .then(weather => {
            return weather.json();
        }).then(showeathorreport);
}

function showeathorreport(weather) {
    console.log(weather);
    let city = document.getElementById('city') ;
    city.innerHTML = `${weather.name},${weather.sys.country}` ;

    let temp = document.getElementById('temp') ;
    temp.innerHTML=`${Math.round(weather.main.temp)}&deg;C` ; 

    let minmax = document.getElementById('min-max') ;
    minmax.innerHTML=`${Math.floor(weather.main.temp_min)}&deg;C(min) / ${Math.ceil(weather.main.temp_max)}&deg;C(max)` ;

    let weathertype=document.getElementById('weather')
    weathertype.innerHTML=`${weather.weather[0].main}` ;

  let date1 = document.getElementById('date');
 const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let currentDate = `${day}-${month}-${year}`;
date1.innerHTML=currentDate ;

if(weathertype.textContent=="Clear") {

    document.body.style.backgroundImage="url('https://images.pexels.com/photos/96622/pexels-photo-96622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"

} else if(weathertype.textContent=="Clouds") {

    document.body.style.backgroundImage="url('https://images.pexels.com/photos/417045/pexels-photo-417045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"

}else if(weathertype.textContent=="Haze") {

    document.body.style.backgroundImage="url('https://images.pexels.com/photos/1165991/pexels-photo-1165991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"

}else if(weathertype.textContent=="Rain") {

    document.body.style.backgroundImage="url('https://images.pexels.com/photos/459451/pexels-photo-459451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"

}else if(weathertype.textContent=="Snow") {

    document.body.style.backgroundImage="url('https://images.pexels.com/photos/1571442/pexels-photo-1571442.jpeg?auto=compress&cs=tinysrgb&w=600')"

}else if(weathertype.textContent=="Thunderstorm") {

    document.body.style.backgroundImage="url('https://images.pexels.com/photos/2418664/pexels-photo-2418664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"

}
  
}


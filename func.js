function getWeather(){
    let city = document.getElementById("city").value;
    lat = 0;
    lon = 0;
    switch(city){
        case "merignac":
            lat = 44.8459;
            lon = -0.6552;
            break;
        case "saintgeours":
            lat = 43.6833;
            lon = -1.2333;
            break;
        case "toulouse":
            lat = 43.6000;
            lon = 1.4333;
            break;
        }
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function(){
        let weather = JSON.parse(xhttp.responseText);
        document.getElementById("icon").src = "https://openweathermap.org/payload/api/media/file/" + weather.list[0].weather[0].icon + ".png";
        document.getElementById("weath").innerHTML = weather.list[0].weather[0].main;
        document.getElementById("temp").innerHTML = Math.trunc(weather.list[0].main.temp - 273);
        document.getElementById("mintemp").innerHTML = Math.trunc(weather.list[0].main.temp_min - 273);
        document.getElementById("maxtemp").innerHTML = Math.trunc(weather.list[0].main.temp_max - 273);
    }
    xhttp.open("GET", 'https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&appid=344e1eb4f37ada7d4c994e4e760f05fb', true);
    xhttp.send();
}
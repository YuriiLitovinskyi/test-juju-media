
let http = require('http');
const path = require('path');




let key = "c2dcf8ffb5cdc3f8977bfd2ae7ea4738";
let city = "London";
let url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&?units=metric&APPID=" + key;


function getWeather(request, response) {
	var request = require('request');
	request(url, (err,res,body) => {
		if (err) {
			console.log(err);
		} else {
			console.log(body);
			var weather = JSON.parse(body);
			//console.log(weather);
			response.write("<html><body><div class='container'>");
			response.write("<h2>" + "City name: " + weather['name'] + "<br>" + "</h2>");
			response.write("<h3>" + "Temperature: " + (weather.main['temp'] - 273.15).toFixed(2) + "<br>" + "</h3>");
			response.write("<h3>" + "Atmospheric pressure: " + weather.main['pressure']  + "</h3>");
			response.write("<h3>" + "Humidity: " + weather.main['humidity']  + "</h3>");
			response.write("<h3>" + "Wind speed: " + weather.wind['speed']  + "</h3>");
			response.write("<h3>" + "Wind direction: " + weather.wind['deg']  + "</h3>");
			response.write("</div></body></html>");

		    response.end();
		}	
	})
}

http.createServer(getWeather).listen(3000);
var request = new XMLHttpRequest();

request.open('GET','https://restcountries.eu/rest/v2/all',true);

request.send();

request.onload = function() {
	
	var data = JSON.parse(this.response);
    var srequest = new XMLHttpRequest();
    lat = data[104].latlng[0];
	lon = data[104].latlng[1];
	srequest.open('GET',"api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f65b074e7e5f9345ad4649fe375b9294",true);
	srequest.send();
	srequest.onload = function() {
		var weatherdata = JSON.parse(this.response);
		console.log(weatherdata);
		console.log(weatherdata.main.temp)
		console.log(weatherdata.weather[0].description);
	}
}
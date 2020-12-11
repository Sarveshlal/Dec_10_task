var request = new XMLHttpRequest();

request.open('GET','https://restcountries.eu/rest/v2/all',true);

request.send();

request.onload = function() {
	
	var data = JSON.parse(this.response);
	var lat = data[104].latlng[0];
	var lon = data[104].latlng[1];
	var cityname = data[159].name;
	function weatherapi(url){
		var srequest = new XMLHttpRequest();
		srequest.open('GET',url,true);
		srequest.send();
		srequest.onload = function() {
			var weatherdata = JSON.parse(this.response);
			console.log("Country: ",weatherdata.name);
			console.log("Temperature: ",weatherdata.main.temp)
			console.log("Weather Description:",weatherdata.weather[0].description);
		}
	}
	var url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f65b074e7e5f9345ad4649fe375b9294` 
	weatherapi(url)
	var url = `http://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=f65b074e7e5f9345ad4649fe375b9294`
	weatherapi(url);
}
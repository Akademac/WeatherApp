$(document).ready(function() {

	// get location

	navigator.geolocation.getCurrentPosition(success, error);

	function success(pos) {
		var lat = pos.coords.latitude;
		var long = pos.coords.longitude;

		console.log(lat);
		console.log(long);

		weather(lat, long);
	};

	function error() {
		console.log('greska');
	}; 

	function weather(lat, long) {
		var url = `https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${long}`;
		$.getJSON(url, function(data) {
			console.log(data);
			updateDom(data);
		});
	}

	function updateDom(data) {
		var city = data.name;
		var temp = Math.round(data.main.temp);
		var desc = data.weather[0].description;
		var icon = data.weather[0].icon;
		$('h2').html(city);
		$('#num').html(temp);
		$('#desc').html(desc);
		$('img').attr('src', icon);
		$('span').html('&#176;');
	}
});
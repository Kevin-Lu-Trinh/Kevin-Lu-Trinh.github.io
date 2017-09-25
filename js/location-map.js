function initMap() {
	var location = { lat: 46.272366, lng: -70.596442 };
	var map = new google.maps.Map(document.getElementById("map"), {
		zoom: 8,
		center: location
	});
	var marker = new google.maps.Marker({
		position: location,
		map: map
	});
}




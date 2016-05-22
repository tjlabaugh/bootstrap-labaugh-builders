var map;

function initMap() {
	var officeLatLng = {lat: 40.076840, lng: -74.055554};

	map = new google.maps.Map(document.getElementById("map"), {
		center: officeLatLng,
		zoom: 13
	});

	var marker = new google.maps.Marker({
		position: officeLatLng,
		map: map,
		title: 'LaBaugh Builders'
	});
}
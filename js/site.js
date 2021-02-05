$(document).ready(function () {
	$(".menu").click(function () {
		$(".menu").toggleClass("active");
		$(".navbar-menu").toggleClass("active");
	});
});

function initMap() {
	const uluru = { lat: 38.970557, lng: -94.704462 };
	const map = new google.maps.Map(document.getElementById("map"), {
		zoom: 20,
		center: uluru,
		mapId: '8fbf2334cdd1e067'
	});
	// The marker, positioned at Uluru
	const marker = new google.maps.Marker({
		position: uluru,
		map: map,
		icon: './images/icons/pngs/location_pin.png'
	});
}
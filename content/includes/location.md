{% assign openurl  = 'https://www.google.de/maps/search/' | append: location %}
{% assign routeurl = 'https://www.google.de/maps/dir//'   | append: location %}

<div class="googlemaps">
	<a href="{{ openurl }}" target="_blank">OPEN GOOGLE MAPS</a>
	<div id="googlemaps"></div>
	<div class="clearfix"></div>
</div>
<a href="{{ openurl }}" target="_blank">GoogleMaps</a> &nbsp; | &nbsp;
<a href="{{ routeurl }}" target="_blank">Routenplaner</a>

<script type="text/javascript">
	function initializeGoogleMaps() {
		var mapOptions = {
			zoom: 15,
{% if latitude && longitude %}
			center: new google.maps.LatLng( {{ latitude }}, {{ longitude }} ),
{% endif %}
			mapTypeId: google.maps.MapTypeId.ROADMAP
		}
		var map = new google.maps.Map(document.getElementById("googlemaps"), mapOptions);
		var transitLayer = new google.maps.TransitLayer();
		transitLayer.setMap(map);
	}

	if (document.location.hostname !== 'localhost') {
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = '//maps.googleapis.com/maps/api/js?key=AIzaSyCWYks9hlALQXqdJJJnSDZPrLBO213TVIo&sensor=false&callback=initializeGoogleMaps';
		script.async = true;
		document.head.appendChild(script);
	}
</script>

var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
// L.marker([51.5, -0.09]).addTo(map); 
// L.marker([-34.6012424, -58.3861497]).addTo(map);
// L.marker([-34.596932, -58.3778777]).addTo(map);

$.ajax({
    dataType: "json",
    url: "api/bicicletas",
    success: function (result) {
        console.log(result);
        result.bicicletas.foreach(function (bici) {
            L.marker(bici.ubicacion, { title: bici.id }).addTo(map);
        });
    }
});
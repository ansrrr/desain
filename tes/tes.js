// Inisialisasi peta

var map = L.map('map').setView([-2.7441, 111.4988], 15); // Koordinat Mendawai 4, Sukamara dan level zoom

// Tambahkan OpenStreetMap tiles
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Tambahkan marker untuk lokasi Mendawai 4, Sukamara
var marker = L.marker([-2.7441, 111.4988]).addTo(map);

// Tambahkan popup ke marker
marker.bindPopup("<b>Mendawai 4, Sukamara</b>").openPopup();

// Anda juga bisa menambahkan lingkaran, poligon, dll.
// L.circle([-2.7441, 111.4988], {
//     color: 'red',
//     fillColor: '#f03',
//     fillOpacity: 0.5,
//     radius: 500
// }).addTo(map).bindPopup("Saya adalah lingkaran.");

// L.polygon([
//     [-2.745, 111.498],
//     [-2.743, 111.499],
//     [-2.744, 111.500]
// ]).addTo(map).bindPopup("Saya adalah poligon.");
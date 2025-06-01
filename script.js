
// Leaflet Map Setup
const mapDiv = document.getElementById('map');
if (mapDiv) {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
    document.head.appendChild(script);

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
    document.head.appendChild(link);

    script.onload = () => {
        const map = L.map('map').setView([52.52, 13.405], 12);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors'
        }).addTo(map);
        L.marker([52.52, 13.405]).addTo(map)
            .bindPopup('Bus 245 Richtung Alexanderplatz')
            .openPopup();
    };
}

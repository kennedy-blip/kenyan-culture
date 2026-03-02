// 1. LEAFLET MAP & WEATHER DATA
const map = L.map('safariMap').setView([-1.286, 36.817], 6);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

const destinations = [
    { name: "Nairobi", coords: [-1.286, 36.817], temp: "23°C", desc: "Sunny Skies" },
    { name: "Maasai Mara", coords: [-1.503, 35.126], temp: "24°C", desc: "Mostly Cloudy" },
    { name: "Diani Beach", coords: [-4.279, 39.594], temp: "29°C", desc: "Humid & Breezy" }
];

destinations.forEach(loc => {
    let marker = L.marker(loc.coords).addTo(map).bindPopup(`<b>${loc.name}</b>`);
    marker.on('click', () => {
        document.getElementById('location-name').innerText = loc.name;
        document.getElementById('temp-val').innerText = loc.temp;
        document.getElementById('weather-desc').innerText = loc.desc;
    });
});

// 2. SWAHILI VOICE ASSISTANT
function speakPhrase(text) {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    const viz = document.getElementById('visualizer');
    
    utterance.lang = 'sw-KE'; 
    utterance.rate = 0.85;
    
    viz.classList.add('active');
    synth.speak(utterance);
    utterance.onend = () => viz.classList.remove('active');
}

// 3. LIVE KENYAN TIME (EAT)
function updateTime() {
    const options = { timeZone: 'Africa/Nairobi', hour: '2-digit', minute: '2-digit' };
    const eatTime = new Intl.DateTimeFormat('en-GB', options).format(new Date());
    document.getElementById('local-time').innerText = eatTime;
}
setInterval(updateTime, 1000);
updateTime();
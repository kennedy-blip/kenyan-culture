// --- 1. LEAFLET MAP INITIALIZATION ---
const map = L.map('safariMap').setView([-1.286389, 36.817223], 6); // Centered on Nairobi

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap'
}).addTo(map);

// Safari Destinations Data
const destinations = [
    { name: "Maasai Mara", coords: [-1.5034, 35.1269], desc: "Great Migration & Big Five." },
    { name: "Amboseli", coords: [-2.6349, 37.2513], desc: "Best views of Mt. Kilimanjaro." },
    { name: "Diani Beach", coords: [-4.2797, 39.5947], desc: "Crystal clear coastal waters." },
    { name: "Mt. Kenya", coords: [-0.1521, 37.3084], desc: "Highest peak in Kenya." }
];

destinations.forEach(loc => {
    L.marker(loc.coords).addTo(map)
        .bindPopup(`<b>${loc.name}</b><br>${loc.desc}`);
});

// --- 2. SWAHILI VOICE ASSISTANT ---
function speakPhrase(text) {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    
    // Try to find a Swahili-like or deep voice
    const voices = synth.getVoices();
    utterance.voice = voices.find(v => v.lang.includes('sw')) || voices[0];
    utterance.rate = 0.9; // Slower for learning
    
    // Visualizer effect
    const viz = document.getElementById('visualizer');
    viz.classList.add('active');
    
    synth.speak(utterance);
    
    utterance.onend = () => viz.classList.remove('active');
}

// Ensure voices are loaded (Chrome fix)
window.speechSynthesis.onvoiceschanged = () => { window.speechSynthesis.getVoices(); };
// 1. Swahili Phrasebook Logic
const phrases = [
    { swa: "Asante sana", eng: "Thank you very much" },
    { swa: "Bei gani?", eng: "How much is this?" },
    { swa: "Chakula kitamu", eng: "The food is delicious" },
    { swa: "Safari njema", eng: "Have a safe journey" },
    { swa: "Hapana asante", eng: "No thank you" }
];

let currentPhrase = 0;
function nextPhrase() {
    currentPhrase = (currentPhrase + 1) % phrases.length;
    const display = document.getElementById('phrase-display');
    display.style.opacity = 0;
    setTimeout(() => {
        display.innerText = `"${phrases[currentPhrase].swa}" means "${phrases[currentPhrase].eng}"`;
        display.style.opacity = 1;
    }, 200);
}

// 2. Real-time Nairobi Time
function updateTime() {
    const options = { timeZone: 'Africa/Nairobi', hour: '2-digit', minute: '2-digit' };
    const nairobiTime = new Intl.DateTimeFormat('en-GB', options).format(new Date());
    document.getElementById('local-time').innerText = nairobiTime + " EAT";
}
setInterval(updateTime, 1000);
updateTime();

// 3. Simple Currency Estimator (Based on approx 2026 rates)
const usdInput = document.getElementById('usd-amount');
const kesOutput = document.getElementById('kes-amount');

usdInput.addEventListener('input', (e) => {
    const rate = 135.50; // Mock 2026 Exchange Rate
    const result = e.target.value * rate;
    kesOutput.innerText = result.toLocaleString();
});
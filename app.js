// State Management
let isFinnishToEnglish = false;
let isListening = false;
let recognition;

// DOM Elements
const toggleBtn = document.getElementById('toggle-btn');
const micBtn = document.getElementById('mic-btn');
const inputText = document.getElementById('input-text');
const outputText = document.getElementById('output-text');
const statusText = document.getElementById('status-text');
const statusIndicator = document.getElementById('status-indicator');
const inputLangTag = document.getElementById('input-lang-tag');
const outputLangTag = document.getElementById('output-lang-tag');

// Initialize Speech Recognition
function initSpeech() {
    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    if (!window.SpeechRecognition) {
        alert("Your browser does not support Speech Recognition. Please use Chrome or Edge.");
        return;
    }

    recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = isFinnishToEnglish ? 'fi-FI' : 'en-US';

    recognition.onresult = (event) => {
        let interimTranscript = '';
        let finalTranscript = '';

        for (let i = event.resultIndex; i < event.results.length; ++i) {
            if (event.results[i].isFinal) {
                finalTranscript += event.results[i][0].transcript;
                translateText(finalTranscript);
            } else {
                interimTranscript += event.results[i][0].transcript;
            }
        }

        inputText.textContent = finalTranscript || interimTranscript;
    };

    recognition.onstart = () => {
        isListening = true;
        updateUI();
    };

    recognition.onend = () => {
        isListening = false;
        updateUI();
    };

    recognition.onerror = (event) => {
        console.error("Speech error:", event.error);
        stopListening();
    };
}

// Translation Logic
async function translateText(text) {
    if (!text.trim()) return;

    const sourceLang = isFinnishToEnglish ? 'fi' : 'en';
    const targetLang = isFinnishToEnglish ? 'en' : 'fi';
    
    // Using MyMemory API (Free, no key needed for small usage)
    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${sourceLang}|${targetLang}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.responseData) {
            outputText.textContent = data.responseData.translatedText;
        }
    } catch (error) {
        console.error("Translation error:", error);
        outputText.textContent = "Error: Could not translate.";
    }
}

// UI Updates
function updateUI() {
    // Toggle Button & Labels
    if (isFinnishToEnglish) {
        toggleBtn.classList.add('active');
        inputLangTag.textContent = 'FI';
        outputLangTag.textContent = 'EN';
        inputLangTag.classList.add('active-tag');
        outputLangTag.classList.remove('active-tag');
        document.getElementById('label-left').style.color = 'var(--text-muted)';
        document.getElementById('label-right').style.color = 'var(--primary)';
    } else {
        toggleBtn.classList.remove('active');
        inputLangTag.textContent = 'EN';
        outputLangTag.textContent = 'FI';
        inputLangTag.classList.add('active-tag');
        outputLangTag.classList.remove('active-tag');
        document.getElementById('label-left').style.color = 'var(--primary)';
        document.getElementById('label-right').style.color = 'var(--text-muted)';
    }

    // Mic Button & Status
    if (isListening) {
        micBtn.classList.add('active');
        statusIndicator.classList.add('listening');
        statusText.textContent = "Listening to your voice...";
        document.querySelector('.glass-grid').classList.add('listening');
    } else {
        micBtn.classList.remove('active');
        statusIndicator.classList.remove('listening');
        statusText.textContent = "Ready to listen";
        document.querySelector('.glass-grid').classList.remove('listening');
    }
}

// Event Listeners
toggleBtn.addEventListener('click', () => {
    isFinnishToEnglish = !isFinnishToEnglish;
    
    // If listening, restart with new language
    if (isListening) {
        stopListening();
        setTimeout(() => startListening(), 100);
    }
    
    updateUI();
});

micBtn.addEventListener('click', () => {
    if (isListening) {
        stopListening();
    } else {
        startListening();
    }
});

function startListening() {
    if (!recognition) initSpeech();
    recognition.lang = isFinnishToEnglish ? 'fi-FI' : 'en-US';
    recognition.start();
}

function stopListening() {
    if (recognition) recognition.stop();
}

// Initial UI Setup
updateUI();
initSpeech();

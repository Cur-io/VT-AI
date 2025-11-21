const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const statusEl = document.getElementById('status');
const transcriptEl = document.getElementById('transcript');

let recognition;

if (!('SpeechRecognition' in window || 'webkitSpeechRecognition' in window)) {
    statusEl.textContent = 'Your browser does not support Web Speech API. Use Whisper fallback.';
    startBtn.disabled = true;
} else {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-US';

    recognition.onstart = () => {
        statusEl.textContent = 'Recording...';
        startBtn.disabled = true;
        stopBtn.disabled = false;
    };

    recognition.onresult = (event) => {
        let interim = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
            if (event.results[i].isFinal) {
                transcriptEl.textContent += event.results[i][0].transcript + '\n';
            } else {
                interim += event.results[i][0].transcript;
            }
        }
    };

    recognition.onend = () => {
        statusEl.textContent = 'Stopped';
        startBtn.disabled = false;
        stopBtn.disabled = true;
    };

    startBtn.addEventListener('click', () => {
        transcriptEl.textContent = '';
        recognition.start();
    });

    stopBtn.addEventListener('click', () => recognition.stop());
}

// Copy Transcript Button
const copyBtn = document.getElementById('copyBtn');

copyBtn.addEventListener('click', () => {
    const text = transcriptEl.textContent;

    if (!text.trim()) {
        alert("Transcript is empty!");
        return;
    }

    navigator.clipboard.writeText(text)
        .then(() => {
            copyBtn.textContent = "Copied!";
            setTimeout(() => copyBtn.textContent = "Copy Transcript", 1500);
        })
        .catch(err => {
            console.error(err);
            alert("Failed to copy transcript.");
        });
});

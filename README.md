# VT-AI
# 🎙️ AI Voice-to-Text Transcriber  
### Built by **Kelvin Muchiri & Calvins Mikwaya**

This project is a simple but powerful web-based **Voice-to-Text Transcriber** powered by the **Whisper API**.  
It allows users to record audio, send it to an AI backend, and receive accurate transcriptions instantly.

---

## 🚀 Features

- 🎤 **Record voice directly from the browser**  
- 🔊 **Live audio capture using JavaScript MediaRecorder**  
- 🤖 **Backend transcription using OpenAI Whisper (fast & accurate)**  
- 📄 **Displays transcript instantly on the page**  
- 📋 **Copy Transcript** button  
- 💡 **Clean, modern UI**  
- 🌐 Works in all modern browsers

---

## 📁 Project Structure

```
/voice-transcriber
│
├── index.html       # UI layout
├── style.css        # Styling
├── script.js        # Frontend logic
├── favicon.png      # App icon (optional)
├──transcriber_whisper.py
└── README.md        # Documentation (this file)
```

---

## 🎧 How It Works (Simple Explanation)

1. User clicks **Start Recording**  
2. Browser records audio → stored as `.webm`  
3. Audio is sent to `server.js`  
4. Whisper API transcribes the audio  
5. The transcript is returned and displayed on screen  
6. User can click **Copy Transcript**

---

## 🧪 Testing

Try speaking:
- Slowly and clearly  
- In a quiet environment  
- For 5–10 seconds for best results  

The Whisper model is extremely accurate with:
- Accents  
- Background noise  
- Fast speech  

---

## 🧑‍💻 Contributors

- **Kelvin Muchiri**  
- **Calvins Mikwaya**

---

## 📜 License  
This project is for educational use under PLP AI specialization.

